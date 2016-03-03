export class LoginController {
  constructor(userService, $state) {
    'ngInject';
    this.user = {
      email: "",
      password: ""
    };
    this.userService = userService;
    this.$state = $state;
  }

  login() {
    this.userService.getUser(this.user).then((result)=> {
      this.user = result[0];
      this.userService.setAuthentication(this.user);
      this.$state.go("main.home");
    });
  }
}

