export class LoginController {
  constructor(userService, $state, $uibModalInstance) {
    'ngInject';

    this.user = {
      email: "",
      password: ""
    };
    this.tab = "login";
    this.userService = userService;
    this.$uibModalInstance = $uibModalInstance;
    this.$state = $state;
  }

  login() {
    this.userService.getUser(this.user).then((result)=> {
      this.user = result[0];
      this.userService.setAuthentication(this.user);
      this.$state.go("main.home");
    });
  }

  setTab(tab) {
    this.tab = tab;
  }

  isSet(tabId) {
    return this.tab === tabId;
  }

  //ok() {
  //  this.$uibModalInstance.close($scope.selected.item);
  //}
}

