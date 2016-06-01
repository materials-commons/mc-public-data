export class releaseService {
  /*@ngInject*/
  constructor(Restangular, userService) {
    this.releases = [];
    this.Restangular = Restangular;
    this.userService = userService;
    this.user = userService.u();
  }

  getAll() {
    return this.Restangular.one('datasets').getList().then(function (releases) {
      return releases.plain();
    });
  }

  getAllCount(){
    return this.Restangular.one('datasets').one('count').get().then(function (releases) {
      return releases
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
