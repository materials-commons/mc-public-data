export class releaseService{
    /*@ngInject*/
    constructor(Restangular){
        this.releases = [];
        this.Restangular = Restangular;
    }

    getAll(){
        return this.Restangular.one('datasets').getList().then(function(releases){
            return releases.plain();
        });
    }

    getRecent(){
      return this.Restangular.one('datasets').getList().then(function(releases){
        return releases.plain();
      });
    }

    topList(){
      return this.Restangular.one('datasets').getList().then(function(releases){
        return releases.plain();
      });
    }

    getByID(id){
      return this.Restangular.one('datasets', id).get().then(function(dataset){
        return dataset.plain();
      });
    }
}
