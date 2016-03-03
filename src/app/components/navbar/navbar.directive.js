export function NavbarDirective() {
  'ngInject';

  let directive = {
    restrict: 'E',
    templateUrl: 'app/components/navbar/navbar.html',
    //scope: {
    //    //creationDate: '='
    //},
    controller: NavbarController,
    controllerAs: 'ctrl',
    bindToController: true
  };

  return directive;
}

class NavbarController {
  constructor (userService) {
    'ngInject';

    this.userService= userService;
  }

  logout(){
    this.userService.removeAuthentication();
  }
}
