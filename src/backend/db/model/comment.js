'use strict';

module.exports = function () {
  var r = require('./../../dash');

  return {
    insert: insert
  };

  function insert(params){
    return r.table('comments').insert(params , {returnChanges: true});
  }
};
