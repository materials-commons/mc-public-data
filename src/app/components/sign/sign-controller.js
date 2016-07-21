export class SignController {
  constructor(userService, $state, $uibModalInstance, toastr, Restangular, Upload) {
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
    this.Upload = Upload;
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
    this.Upload.upload({
      url: 'http://publicdata.localhost/api/v1/upload?apikey=anonymous',
      data: this.user,
      method: 'POST'
    }).then((user) => {
      this.setTab('login');
      this.toastr.success('Please login', 'Registered successfully', {"closeButton": true});
    }, (err) => {
        this.toastr.error(err.data, this.user.email, {"closeButton": true});
      });
  }

}



