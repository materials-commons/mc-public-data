export class userService {
  constructor($log, Restangular, $window, $state, $rootScope, $uibModal) {
    'ngInject';

    this.$log = $log;
    this.Restangular = Restangular;
    this.$window = $window;
    this.$state = $state;
    this.$rootScope = $rootScope;
    this.$uibModal = $uibModal;

    if (this.$window.sessionStorage.mcuser) {
      try {
        console.log('does  mcuser exists');
        this.mcuser = JSON.parse($window.sessionStorage.mcuser);
      } catch (err) {
        console.log("Error parse mcuser in sessionStorage");
        this.mcuser = null;
      }
    }
  }

  create(user) {
    return this.Restangular.one('users').customPOST(user).then(function (result) {
      return result;
    });
  }

  getUser(email) {
    return this.Restangular.one('user', email).get()
  }


  setAuthentication(user) {
    this.$window.sessionStorage.mcuser = JSON.stringify(user);
    this.mcuser = user;
  }

  removeAuthentication() {
    this.$window.sessionStorage.removeItem('mcuser');
    this.$window.sessionStorage.mcuser = null;
    this.mcuser = undefined;
    this.$state.go("main.login");
    this.$rootScope.email_address = "";
  }

  isAuthenticated() {
    return this.mcuser ? true : false;
  }

  email() {
    return this.mcuser ? this.mcuser.email : undefined;
  }

  u() {
    return this.mcuser;
  }

  openModal() {
    var modalInstance = this.$uibModal.open({
      animation: true,
      templateUrl: '/app/components/sign/sign.html',
      controller: 'SignController',
      controllerAs: 'ctrl',
      size: 'lg'
    });

    modalInstance.result.then((selectedItem)=> {
    }, function () {
      this.$log.info('Modal dismissed at : ' + new Date());
    });
  };


  apikey() {
    return this.mcuser ? this.mcuser.apikey : 'anonymous';
  }

}
