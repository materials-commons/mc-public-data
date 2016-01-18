export class HomeController {

  constructor() {
    'ngInject';
    var vm = this;
    vm.query = '';
    vm.results = [];
    //this.homeService = homeService;
    //search();
  }

  search() {
    var hits = this.homeService.search(vm.query || '*');
    hits.then(function(resp){
      vm.results = resp.hits.hits;
    });
  };

}

