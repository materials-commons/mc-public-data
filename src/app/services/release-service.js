export class releaseService {
  /*@ngInject*/
  constructor(Restangular, userService) {
    this.releases = [];
    this.Restangular = Restangular;
    this.user = userService.u();
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
    if(this.user){
      return this.Restangular.one('datasets', id).get('user', this.user.email).then(function (dataset) {
        return dataset.plain();
      });
    } else{
      return this.Restangular.one('datasets', id).one('user', "anonymous").get().then(function (dataset) {
        return dataset.plain();
      });
    }

  }
}
