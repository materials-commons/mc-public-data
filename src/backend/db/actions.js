var r = require('./../dash');
var parse = require('co-body');


module.exports.addAppreciate = function* (next) {
  var params = yield parse(this);
  var inserted = yield r.table('appreciations').insert(params);
  this.status = 200;
  this.body = inserted;
  yield next;
};

module.exports.removeAppreciation = function* (next) {
  var params = yield parse(this);
  var deleted = yield r.table('appreciations').delete(params);
  this.status = 200;
  this.body = deleted;
  yield next;
};

module.exports.addView = function* (next) {
  var params = yield parse(this);
  var inserted = yield r.table('views').insert(params);
  this.status = 200;
  this.body = inserted;
  yield next;
};

module.exports.getAll = function* (next) {
  this.body = yield {
    appreciations: r.table('appreciations').getAll(this.params.dataset_id, {index: 'dataset_id'}).count(),
    views: r.table('views').getAll(this.params.dataset_id, {index: 'dataset_id'}).count(),
    comments: r.table('comments').getAll(this.params.dataset_id, {index: 'dataset_id'}).orderBy('birthtime').eqJoin('user_id', r.table('users')).zip().coerceTo('array'),
    downloads: []
  };
  yield next;
};

module.exports.addComment = function* (next) {
  var params = yield parse(this);
  params.birthtime = r.now();
  var inserted = yield r.table('comments').insert(params);
  this.status = 200;
  this.body = inserted;
  yield next;
};

module.exports.addTag = function* (next) {
  var params = yield parse(this);
  var is_tag = yield r.table('tags').get(params.tag);
  if (!is_tag) {
    var inserted = yield r.table('tags').insert({
      id: params.tag,
      user_id: params.user_id,
      dataset_id: params.dataset_id
    });
  }
  yield r.table('tags2datasets').insert(params);
  this.status = 200;
  this.body = inserted;
  yield next;
};

module.exports.removeTag = function* (next) {
  var params = yield parse(this);
  var tag = yield r.table('tags2datasets').get(params.id);
  if (params.user_id === tag.user_id) {
    var deleted = yield r.table('tags2datasets').get(params.id).delete();
    this.status = 200;
    this.body = deleted;
  }
  yield next;
};

module.exports.getAllTags = function* (next) {
  this.body = yield r.table('tags').merge(function (tag) {
    return {
      count: r.table('tags2datasets').getAll(tag('id'), {index: 'tag'}).count()
    }
  });
  yield next;
};

