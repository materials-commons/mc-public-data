var r = require('./../dash');
//var parse = require('co-body');

module.exports.getAll = function* (next) {
  this.body = yield r.table('datasets').merge(function (rel) {
    return {
      'files': r.table('datafiles').getAll(r.args(rel('datafiles'))).coerceTo('array'),
      'appreciations': r.table('appreciations').getAll(rel('id'), {index: 'dataset_id'}).coerceTo('array'),
      'views': r.table('views').getAll(rel('id'), {index: 'dataset_id'}).coerceTo('array')
    }
  });
  yield next;
};

module.exports.getOne = function* (next) {
  this.body = yield r.table('datasets').get(this.params.id).merge(function (rel) {
    return {
      'files': r.table('datafiles').getAll(r.args(rel('datafiles'))).coerceTo('array'),
      'other_datasets': r.table('datasets').getAll(r.args(rel('authors')), {index: "authors"}).merge(function (od) {
        return {
          'files': r.table('datafiles').getAll(r.args(od('datafiles'))).coerceTo('array')
        } }).coerceTo('array')
  }
  });
  if (this.params.user_id) {
    var is_appreciated = yield r.table('appreciations').getAll([this.params.user_id, this.params.id], {index: 'user_dataset'}).coerceTo('array');
    if (is_appreciated.length > 0) {
      this.body.appreciate = true;
    }
  }
  yield next;
};

module.exports.getMockReleases = function* () {
  this.body = [{DOI: "ABC123"}, {DOI: "DEF123"}]
};


