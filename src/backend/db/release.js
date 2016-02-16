
var r = require('./../dash');
//var parse = require('co-body');

module.exports.getReleases = function* (){
   this.body = yield r.table('datasets').merge(function(rel){
        return {
          'files': r.db('materialscommons').table('datafiles').getAll(r.args(rel('datafiles'))).coerceTo('array')
        }
    });
};

module.exports.getMockReleases = function* (){
  this.body = [{DOI: "ABC123"}, {DOI: "DEF123"}]
};
