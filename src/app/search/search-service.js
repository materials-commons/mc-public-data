export class searchService{
  /*@ngInject*/
  constructor(Restangular){
    this.Restangular = Restangular;
  }

  searchByDOI(){
    return this.Restangular.one('releases').getList().then(function(releases){
      return releases.plain();
    });
  }

  searchByProjectName(){
    return this.Restangular.one('releases').getList().then(function(releases){
      return releases.plain();
    });
  }

  searchByAuthors(){
    return this.Restangular.one('releases').getList().then(function(releases){
      return releases.plain();
    });
  }
}
