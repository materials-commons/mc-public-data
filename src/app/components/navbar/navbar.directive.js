export function NavbarDirective() {
  'ngInject';

  let directive = {
    restrict: 'E',
    templateUrl: 'app/components/navbar/navbar.html',
    controller: NavbarController,
    controllerAs: 'ctrl',
    bindToController: true
  };

  return directive;
}

class NavbarController {
  constructor (userService, $uibModal, $log, $state, $rootScope) {
    'ngInject';

    this.userService= userService;
    this.$uibModal= $uibModal;
    this.$log= $log;
    this.$state= $state;
    this.$rootScope= $rootScope;
  }

  logout(){
    this.userService.removeAuthentication();
    this.$state.go("main.home");
  }

  sign() {
    this.userService.openModal();
  }
}
