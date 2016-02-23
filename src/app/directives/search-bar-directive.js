export function SearchBarDirective() {
  'ngInject';

  let directive = {
    restrict: 'E',
    templateUrl: 'app/directives/search-bar.html',
    controller: SearchBarController,
    controllerAs: 'searchBar',
    bindToController: true
  };

  return directive;
}

class SearchBarController {

  constructor ($state) {
    'ngInject';
    this.dropdown_list  = ["DOI", "Project name", "Authors"];
    this.$state = $state;
    if (Object.keys($state.params).length > 0){
      this.selection = $state.params.selection;
      this.searchTerm = $state.params.searchTerm;
    }
    else{
      this.selection = "DOI" ;
      this.searchTerm = "";
    }
  }

  searchResults(){
    this.$state.go("main.search", {selection: this.selection, searchTerm: this.searchTerm});
  }

}