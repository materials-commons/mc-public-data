export class userService {
  constructor($log, Restangular) {
    'ngInject';

    this.$log = $log;
    this.Restangular = Restangular;
  }

  create(user) {
    return this.Restangular.one('users').customPOST(user).then(function (result) {
      return result;
    });
  }

  getUser(user) {
    return this.Restangular.one('user', user.email).get()
      .then(function (result) {
        return result[0];
      });
  }
}
