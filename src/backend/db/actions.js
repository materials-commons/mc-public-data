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

//module.exports.getActionsByUser = function* (next) {
//  if (this.params.user_id) {
//    this.body = yield r.table('users').get(this.params.user_id).merge(function (user) {
//      return {
//        appreciations: r.table('appreciations').getAll(user('id'), {index: 'user_id'}).coerceTo('array'),
//        views: r.table('views').getAll(user('id'), {index: 'user_id'}).coerceTo('array'),
//        comments: [],
//        downloads: []
//      }
//    });
//  }
//  yield next;
//};

module.exports.getAll = function* (next) {
  this.body = yield {
    appreciations: r.table('appreciations').getAll(this.params.dataset_id, {index: 'dataset_id'}).coerceTo('array'),
    views: r.table('views').getAll(this.params.dataset_id, {index: 'dataset_id'}).coerceTo('array'),
    comments: [],
    downloads: []
  };
  yield next;
};
