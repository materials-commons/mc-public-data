export class releaseService {
  /*@ngInject*/
  constructor(Restangular, userService) {
    this.releases = [];
    this.Restangular = Restangular;
    this.email = userService.email();
  }

  getAll() {
    return this.Restangular.one('datasets').getList().then(function (releases) {
      return releases.plain();
    });
  }

  getRecent() {
    return this.Restangular.one('datasets').getList().then(function (releases) {
      return releases.plain();
    });
  }

  topList() {
    return this.Restangular.one('datasets').getList().then(function (releases) {
      return releases.plain();
    });
  }

  getByID(id) {
    return this.Restangular.one('datasets', id).one('user', this.email).get().then(function (dataset) {
      return dataset.plain();
    });
  }
}
