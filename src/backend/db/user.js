
var r = require('./../dash');
var parse = require('co-body');

module.exports.create = function* (next){
  var user = yield parse(this);
  var inserted = yield r.table('users').insert(user);
  this.status = 200;
  this.body = inserted;
  yield next;
};

module.exports.get = function* (next){
  this.body = yield r.table('users').filter({email: this.params.email});
  yield next;
};
