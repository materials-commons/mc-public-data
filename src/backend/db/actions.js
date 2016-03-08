var r = require('./../dash');
var parse = require('co-body');

module.exports.appreciate = function* (next) {
  var params = yield parse(this);
  var inserted = yield r.table('appreciations').insert(params);
  this.status = 200;
  this.body = inserted;
  yield next;
};

module.exports.view = function* (next) {
  var params = yield parse(this);
  var inserted = yield r.table('views').insert(params);
  this.status = 200;
  this.body = inserted;
  yield next;
};

module.exports.getAll = function* (next) {
  this.body = yield {
    appreciations: r.table('appreciations').getAll(this.params.dataset_id, {index: 'dataset_id'}).coerceTo('array'),
    views: r.table('views').getAll(this.params.dataset_id, {index: 'dataset_id'}).coerceTo('array'),
    comments:  r.table('comments').getAll(this.params.dataset_id, {index: 'dataset_id'}).orderBy('birthtime').eqJoin('user_id', r.table('users')).zip().coerceTo('array'),
    downloads: []
  };
  yield next;
};

module.exports.comment = function* (next) {
  var params = yield parse(this);
  params.birthtime = r.now();
  var inserted = yield r.table('comments').insert(params);
  this.status = 200;
  this.body = inserted;
  yield next;
};
