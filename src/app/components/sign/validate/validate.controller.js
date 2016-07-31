export class ValidateController {
    /*@ngInject*/
    constructor($stateParams, accountsService, userService, $state, Restangular, toastr) {
        this.$stateParams = $stateParams;
        this.validationId = $stateParams.validation_id;
        this.accountsService = accountsService;
        this.userService = userService;
        this.$state = $state;
        this.Restangular = Restangular;
        this.toastr = toastr;
        this.password1 = '';
        this.password2 = '';
        this.accountsService.getUserRegistrationAccount(this.validationId)
            .then(
                (registration) => this.registration = registration,
                (e) => this.message = e.data.error
            );
    }

    validateAndLogin() {
        if (!this.allFieldsValid()) {
            return;
        }

        this.accountsService.setUserFromRegistrationData(this.validationId, this.password1)
            .then(
                () => {
                    this.userService.login(this.registration.email, this.password1)
                        .then(
                            (user)=> {
                                this.userService.setAuthenticated(true, user.plain());
                                this.Restangular.setDefaultRequestParams(['post', 'get', 'put', 'remove'], {apikey: this.userService.apikey()});
                                this.$state.go('home.top');
                            },
                            (err) => {
                                this.toastr.options = {"closeButton": true};
                                this.toastr.error(err.data, this.user.email);
                            }
                        );
                },
                (e) => this.message = e.data.error
            );
    }


    allFieldsValid() {
        if (this.password1 === '' || this.password2 === '') {
            this.message = 'Both fields are required';
            return false;
        }
        if (this.password1 !== this.password2) {
            this.message = "Password entries do not match";
            return false;
        }
        if (this.password1.length < 6) {
            this.message = "Password must be at least 6 character in length";
            return false;
        }
        this.message = null;
        return true;
    }
}
