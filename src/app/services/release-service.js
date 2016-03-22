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
    return this.Restangular.one('datasets').one('recent').getList().then(function (releases) {
      return releases.plain();
    });
  }

  topViews() {
    return this.Restangular.one('datasets').one('views').getList().then(function (releases) {
      return releases.plain();
    });
  }

  getByID(id) {
    if(this.user){
      return this.Restangular.one('datasets', id).one('user', this.user.email).get().then(function (dataset) {
        return dataset.plain();
      });
    } else{
      return this.Restangular.one('datasets', id).one('user', "anonymous").get().then(function (dataset) {
        return dataset.plain();
      });
    }
  }


}
