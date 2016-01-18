export class loginService {
  constructor($log, Restangular) {
    'ngInject';

    this.$log = $log;
    this.Restangular = Restangular;
  }

  authenticate() {
    return this.Restangular.get('/users/:id').then(response => {
      return response.data;
    }).catch(error => {
      this.$log.error('Failed authentication.\n' + angular.toJson(error.data, true));
    });
  }
}

//# sourceMappingURL=login.service-compiled.js.map