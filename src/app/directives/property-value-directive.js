export function PropertyValueDirective() {
  'ngInject';

  let directive = {
    restrict: 'E',
    templateUrl: 'app/directives/property-value.html',
    scope: {
      property: "@",
      value: "="
    },
    controller: PropertyValueController,
    controllerAs: 'ctrl',
    bindToController: true
  };
  return directive;
}

class PropertyValueController {
  constructor(userService) {
    'ngInject';

    this.userService = userService;
    this.user = this.userService.isAuthenticated();
  }

  formatAuthor(a) {
    return a.lastname + ", " + a.firstname + " (" + a.affiliation + ")";
  }

  formatAuthorList(authors) {
    return authors.map(this.formatAuthor).join('; ');
  }

  formatDate(date) {
    return
  }

  authorDetails(author) {
    console.log("authorDetails: " + author);
  }

    formatAuthors(authors) {
        return authors.map(a => `${a.lastname}, ${a.firstname} (${a.affiliation})`).join('; ');
    }

    urlForDownload(datasetId) {
        return "api/pub/datasets/download/" + datasetId + "?apikey=" + this.userService.apikey();
    }
}
