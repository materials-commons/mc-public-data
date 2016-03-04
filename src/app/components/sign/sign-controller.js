export class SignController {
  constructor (userService, $state, $uibModalInstance, toastr) {
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
  }

  setTab(tab) {
    this.tab = tab;
  }

  isSet(tabId) {
    return this.tab === tabId;
  }

  login() {
    this.userService.getUser(this.user).then((result)=> {
      this.user = result[0];
      this.userService.setAuthentication(this.user);
      this.$uibModalInstance.close();
      this.$state.go("main.home");
      toastr.options = {
        "closeButton": true,
        "showDuration": "600"
      };
      toastr.success('Logged in Successfully', this.user.email)
    });
  }

  register(){
    this.user.apikey = "abc123";
    this.userService.create(this.user);
    this.setTab('login');
    toastr.options = {"closeButton": true};
    toastr.success('Please login', 'Registered successfully');
  }
}



