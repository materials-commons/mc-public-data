
var r = require('./../dash');
//var parse = require('co-body');

module.exports.getReleases = function* (){
  console.log("inside ger release func");
   this.body = yield r.table('releases').merge(function(rel){
        return {
          'files': r.db('materialscommons').table('datafiles').getAll(r.args(rel('datafiles'))).coerceTo('array')
        }
    });
};

module.exports.getMockReleases = function* (){
  console.log("inside mock release func");
  this.body = [{DOI: "ABC123"}, {DOI: "DEF123"}]
};
