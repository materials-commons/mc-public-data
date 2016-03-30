var r = require('./../dash');
var parse = require('co-body');


module.exports.addComment = function*(next) {
  var params = yield parse(this);
  params.birthtime = r.now();
  var inserted = yield r.table('comments').insert(params);
  this.status = 200;
  this.body = inserted;
  yield next;
};
