
module.exports = function(){

  'use strict';
  var Schemator = require('js-data-schema');
  var schema = new Schemator();
  var promise = require('bluebird');
  var rules = require('./rules')();
  defineRule();

  return {
    comments: defineCommentSchema()
  };

  function defineCommentSchema(){
    var comment = schema.defineSchema('Comment', {
      message: {type: 'string', nullable: false},
      user_id: {mustExist: 'users', type: 'string', nullable: false},
      dataset_id: {mustExist: 'datasets', type: 'string', nullable: false}
    });
    comment.setDefaults({
      message: ''
    });
    comment.validateAsync = promise.promisify(comment.validate);
    return comment;
  }

  function defineRule(){
    schema.defineRule('mustExist', rules.mustExist, true);
  }

};

