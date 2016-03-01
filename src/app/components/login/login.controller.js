export class LoginController {
  constructor(userService) {
    'ngInject';
    this.user = {
      email: "",
      password: ""
    };
    this.userService = userService;
  }

  login() {
    this.user = this.userService.getUser(this.user);
  }
}

