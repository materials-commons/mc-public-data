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
  constructor (userService, $uibModal, $log) {
    'ngInject';

    this.userService= userService;
    this.$uibModal= $uibModal;
    this.$log= $log;
  }

  logout(){
    this.userService.removeAuthentication();
  }

  login(size){
    var modalInstance = this.$uibModal.open({
      animation: true,
      templateUrl: '/app/components/login/login.html',
      controller: 'LoginController',
      controllerAs: 'ctrl',
      size: size
    });

    modalInstance.result.then((selectedItem)=> {
    }, function () {
      this.$log.info('Modal dismissed at : ' + new Date());
    });
  };

}
