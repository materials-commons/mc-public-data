export function homeTab() {
  'ngInject';

  let directive = {
    restrict: 'A',
    templateUrl: 'app/home/home-tabs.html',
    scope: {},
    controller: homeTabController.js,
    controllerAs: 'vm',
    bindToController: true
  };
  return directive;
}
class homeTabController {
  constructor() {}
}

//# sourceMappingURL=home-tab-directive-compiled.js.map