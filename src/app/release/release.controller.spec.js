
describe('controller', function () {

  let vm;

  beforeEach(angular.mock.module('mcPublicData'));

  beforeEach(angular.mock.module('mock.releases'));

  beforeEach(inject(function($controller, _releaseService_) {

    vm = $controller('ReleaseController', {
      releases: [{}, {}],
      releaseService: _releaseService_
    });

  }));

  it('should have list of releases', function() {
    //expect(vm.releases.length).toBe(2);
    expect(vm.releaseService.getAll().length).toBe(3);
  });
});
