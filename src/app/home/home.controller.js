export class HomeController {
  constructor(datasets, $state) {
    'ngInject';
    this.datasets = datasets;
    this.$state = $state;
    this.dropdown_list  = ["DOI", "Project name", "Authors"];
    this.selection = "DOI";
    this.searchTerm = "";
  }

}

