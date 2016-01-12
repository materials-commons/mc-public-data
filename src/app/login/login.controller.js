export class LoginController {
  constructor (loginService) {
    'ngInject';
    this.help = "test";
    this.loginService = loginService;
  }

  submit(){
    this.loginService.authenticate();
  }
}

