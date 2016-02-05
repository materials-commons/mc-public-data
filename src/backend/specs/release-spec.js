'use strict';

var mockReleases = require('../mocks/release');
var co = require('co');

describe('Releases', function(){
  it('should get all the releases', function(){
    var releases = yield mockReleases.getReleases();
    expect(releases.length).toBe(3);
  });
});
