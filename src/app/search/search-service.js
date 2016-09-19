export class searchService {
    /*@ngInject*/
    constructor(Restangular, $filter) {
        this.Restangular = Restangular;
        this.$filter = $filter;
    }

    search(searchTerm) {
        return this.Restangular.one('pub').one('datasets').getList().then((ds) => {
            let datasets = ds.plain();
            let results = this.$filter('filter')(datasets, searchTerm);
            return results;
        });
    }
}
