var r = require('./../dash');
var parse = require('co-body');

module.exports.create = function* (next) {
  var user = yield parse(this);
  var does_email_exists = yield r.table('users').get(user.email);
  if (does_email_exists) {
    this.status = 500;
    this.body = "Email has already been registered. Please sign in!"
  } else {
    user.id = user.email;
    var inserted = yield r.table('users').insert(user);
    this.status = 200;
    this.body = inserted;
  }
  yield next;
};

module.exports.get = function* (next) {
  var user = yield r.table('users').get(this.params.email);
  if (user) {
    this.status = 200;
    this.body = user;
  }else{
    this.status = 500;
    this.body = "User does not exists. Please Register"
  }
  yield next;
};


