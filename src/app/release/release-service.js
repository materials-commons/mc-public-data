export class releaseService{
    /*@ngInject*/
    constructor(Restangular){
        this.releases = [];
        this.Restangular = Restangular;
    }

    getAll(){
        return this.Restangular.one('releases').getList().then(function(releases){
            return releases.plain();
        });
    }
}
