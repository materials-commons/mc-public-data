export class SearchController {
  constructor($state, searchService, results) {
    'ngInject';

    this.searchService = searchService;
    this.dropdown_list  = ["DOI", "Project name", "Authors"];
    this.selection = $state.params.selection;
    this.searchTerm = $state.params.searchTerm;
    this.results = results;
    this.pageSize = 2;
  }

}

