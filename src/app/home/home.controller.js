export class HomeController {
  constructor(datasets, $state) {
    'ngInject';
    this.datasets = datasets;
    this.$state = $state;
    this.dropdown_list  = ["DOI", "Project name", "Authors"];
  }
  //
  //searchResults = function(type){
  //  this.$state.go("main.search", {term: type});
  //}

}

