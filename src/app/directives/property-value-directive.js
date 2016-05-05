export function PropertyValueDirective() {
  'ngInject';

  let directive = {
    restrict: 'E',
    templateUrl: 'app/directives/property-value.html',
    scope:{
      property: "@",
      value: "="
    },
    controller: PropertyValueController,
    controllerAs: 'ctrl',
    bindToController: true
  };
  return directive;
}

class PropertyValueController {

  constructor (userService) {
    'ngInject';

    this.userService= userService;
    this.user = this.userService.isAuthenticated();
  }

}
