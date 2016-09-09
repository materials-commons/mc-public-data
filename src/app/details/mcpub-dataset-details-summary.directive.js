export function DatasetDetailsSummaryDirective() {
  'ngInject';

  let directive = {
    restrict: 'E',
    templateUrl: 'app/details/mcpub-dataset-details-summary.html',
    scope: {
      dataset: "=",
    },
    controller: DatasetDetailsSummaryController,
    controllerAs: 'ctrl',
    bindToController: true
  };
  return directive;
}

class DatasetDetailsSummaryController {

  constructor(userService) {
    'ngInject';
    this.user = userService.u();
  }

  authorDetails(author) {
    console.log("authorDetails: " + author);
  }
}
