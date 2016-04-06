var r = require('./../dash');
var parse = require('co-body');
var httpStatus = require('http-status');

module.exports.addTag = function*(next) {
  var params = yield parse(this);
  console.log(params);
  var is_tag = yield r.table('tags').get(params.tag);
  if (!is_tag) {
    var inserted = yield r.table('tags').insert({
      id: params.tag,
      user_id: params.user_id
    });
  }
  var does_join_exists = yield r.table('tags2datasets').getAll([params.tag, params.dataset_id], {index: 'tag_dataset'});
  console.log(does_join_exists);
  if (does_join_exists.length !== 0){
    this['throw'](httpStatus.CONFLICT, 'Duplicate request');
  }else{
    yield r.table('tags2datasets').insert(params);
    this.status = 200;
    this.body = inserted;
  }
  yield next;
};

module.exports.removeTag = function*(next) {
  var params = yield parse(this);
  var tag = yield r.table('tags2datasets').get(params.id);
  if (params.user_id === tag.user_id) {
    var deleted = yield r.table('tags2datasets').get(params.id).delete();
    this.status = 200;
    this.body = deleted;
  }
  yield next;
};

module.exports.getTagsByCount = function*(next) {
  this.body = yield r.table('tags').merge(function (tag) {
    return {
      count: r.table('tags2datasets').getAll(tag('id'), {index: 'tag'}).count()
    }
  }).orderBy(r.desc('count'));
  yield next;
};

module.exports.getAllTags = function*(next) {
  this.body = yield r.table('tags').orderBy('id').merge(function (tag) {
    return {
      count: r.table('tags2datasets').getAll(tag('id'), {index: 'tag'}).count()
    }
  });
  yield next;
};

module.exports.getDatasetsByTag = function*(next) {
  this.body = yield r.table('tags2datasets').getAll(this.params.id, {index: 'tag'}).merge(function (row) {
    return r.table('datasets').get(row('dataset_id')).merge(function (ds) {
      return {
        'tags': r.table('tags2datasets').getAll(ds('id'), {index: "dataset_id"}).coerceTo('array')
      }
    });
  });
  yield next;
};
