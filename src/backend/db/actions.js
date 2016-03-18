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
    comments:  r.table('comments').getAll(this.params.dataset_id, {index: 'dataset_id'}).orderBy('birthtime').eqJoin('user_id', r.table('users')).zip().coerceTo('array'),
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
