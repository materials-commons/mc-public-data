
var r = require('./../dash');
//var parse = require('co-body');

module.exports.getAll = function* (next){
   this.body = yield r.table('datasets').merge(function(rel){
        return {
          'files': r.table('datafiles').getAll(r.args(rel('datafiles'))).coerceTo('array')
        }
    });
  yield next;
};

module.exports.getOne = function* (next){
  this.body = yield r.table('datasets').get(this.params.id).merge(function(rel){
    return {
      'files': r.table('datafiles').getAll(r.args(rel('datafiles'))).coerceTo('array')
    }
  });
  yield next;
};

module.exports.getMockReleases = function* (){
  this.body = [{DOI: "ABC123"}, {DOI: "DEF123"}]
};


