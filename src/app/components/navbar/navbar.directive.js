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
  constructor (userService, $uibModal, $log, $state) {
    'ngInject';

    this.userService= userService;
    this.$uibModal= $uibModal;
    this.$log= $log;
    this.$state= $state;
  }

  logout(){
    this.userService.removeAuthentication();
    this.$state.go("main.home");
  }

  sign() {
    this.userService.openModal();
  }
}
