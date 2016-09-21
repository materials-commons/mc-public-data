export function MCPubSearchbarDirective() {
    'ngInject';

    let directive = {
        restrict: 'E',
        templateUrl: 'app/directives/mcpub-searchbar.html',
        controller: MCPubSearchBarController,
        controllerAs: 'ctrl',
        bindToController: true
    };

    return directive;
}

class MCPubSearchBarController {

    constructor($state) {
        'ngInject';
        this.dropdown_list = ["All", "DOI", "Authors", "Institution", "Process Type", "Sample"];
        this.$state = $state;
        if (Object.keys($state.params).length > 0) {
            this.selection = $state.params.selection;
            this.searchTerm = $state.params.searchTerm;
        }
        else {
            this.selection = "All";
            this.searchTerm = "";
        }
    }

    searchResults() {
        this.$state.go("search", {selection: this.selection, searchTerm: this.searchTerm});
    }

}
