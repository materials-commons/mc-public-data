export class searchService{
  /*@ngInject*/
  constructor(Restangular){
    this.Restangular = Restangular;
  }

  searchByDOI(){
    return this.Restangular.one('datasets').getList().then(function(releases){
      return releases.plain();
    });
  }
}
