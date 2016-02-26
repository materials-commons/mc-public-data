export class loginService {
  constructor ($log, Restangular) {
    'ngInject';

    this.$log = $log;
    this.Restangular = Restangular;
  }

  authenticate() {
    return this.Restangular.one('users').get()
      .then((response) => {
        this.$log("response is "+ response.data);
        return response.data;
      })
      .catch((error) => {
        this.$log.error('Failed authentication.\n' + angular.toJson(error.data, true));
      });
  }
}
