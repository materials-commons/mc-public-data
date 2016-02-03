export class LoginController {
  constructor (loginService) {
    'ngInject';
    this.email = "test@gmail.com";
    this.password = "123";
    this.loginService = loginService;
  }

  submit(){
    this.loginService.authenticate();
  }
}

