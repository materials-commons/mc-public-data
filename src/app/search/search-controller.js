export class SearchController {
  constructor($state, searchService) {
    'ngInject';

    this.searchService = searchService;
    this.dropdown_list  = ["DOI", "Project name", "Authors"];
    this.selection = $state.params.selection;
    this.searchTerm = $state.params.searchTerm;
    //search(this.searchTerm, this.selection);
  }

  search(query, by){
    //query searchservice

  }
}

