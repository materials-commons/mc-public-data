export class RegisterController {
  constructor (userService, $state) {
    'ngInject';
    this.userService = userService;
    this.$state = $state;
    this.user="";
  }

  register(){
    this.dataLoading = true;
    this.user.apikey = "abc123";
    this.userService.create(this.user);
    this.$state.go("main.login");
  }
}

