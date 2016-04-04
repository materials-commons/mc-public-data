export class SignController {
  constructor(userService, $state, $uibModalInstance, toastr, Restangular) {
    'ngInject';

    this.user = {
      email: "",
      password: ""
    };
    this.tab = "login";
    this.userService = userService;
    this.$state = $state;
    this.$uibModalInstance = $uibModalInstance;
    this.toastr = toastr;
    this.Restangular = Restangular;
  }

  setTab(tab) {
    this.tab = tab;
  }

  isSet(tabId) {
    return this.tab === tabId;
  }

  login() {
    this.userService.getUser(this.user.email).then((result)=> {
      this.user = result;
      this.userService.setAuthentication(this.user);
      this.Restangular.setDefaultRequestParams(['post', 'get', 'put', 'remove'], {apikey: this.userService.apikey()});
      this.$uibModalInstance.close();
      this.$state.go("main.home");
      this.toastr.options = {"closeButton": true};
      this.toastr.success('Logged in Successfully', this.user.email)
    }, (err) => {
      this.toastr.options = {"closeButton": true};
      this.toastr.error(err.data, this.user.email);
    });
  }

  register() {
    this.user.apikey = "abc123";
    this.userService.create(this.user).then((res) => {
      this.setTab('login');
      this.toastr.options = {"closeButton": true};
      this.this.toastr.success('Please login', 'Registered successfully');
    }, (err) => {
      this.toastr.options = {"closeButton": true};
      this.toastr.error(err.data, this.user.email);
    });
  }
}



