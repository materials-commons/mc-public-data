export function SearchbBarDirective() {
  'ngInject';

  let directive = {
    restrict: 'E',
    templateUrl: 'app/directives/search-bar.html',
    controller: SearchBarController,
    controllerAs: 'search',
    bindToController: true
  };

  return directive;
}

class SearchBarController {
  constructor ($state) {
    'ngInject';
    this.dropdown_list  = ["DOI", "Project name", "Authors"];
    this.$state = $state;
    this.selection = "DOI";
    this.searchTerm = "";
  }
}
