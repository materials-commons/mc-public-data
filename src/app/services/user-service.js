export class userService {
  constructor($log, Restangular, $window, $state, $rootScope) {
    'ngInject';

    this.$log = $log;
    this.Restangular = Restangular;
    this.$window = $window;
    this.$state = $state;
    this.$rootScope = $rootScope;


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

  getUser(user) {
    return this.Restangular.one('user', user.email).get()
  }


  setAuthentication(user){
    this.$window.sessionStorage.mcuser = JSON.stringify(user);
    this.mcuser = user;
  }

  removeAuthentication(){
    this.$window.sessionStorage.removeItem('mcuser');
    this.$window.sessionStorage.mcuser = null;
    this.mcuser = undefined;
    this.$state.go("main.login");
    this.$rootScope.email_address = "";
  }

  isAuthenticated(){
    return this.mcuser;
  }

  email(){
    return this.mcuser ? this.mcuser.email: 'Login';
  }
}
