export function DatasetDetailsOutlineDirective() {
  'ngInject';

  let directive = {
    restrict: 'E',
    templateUrl: 'app/details/mcpub-dataset-details-outline.html',
    scope: {
      dataset: "=",
    },
    controller: DatasetDetailsOutlineController,
    controllerAs: 'ctrl',
    bindToController: true
  };
  return directive;
}

class DatasetDetailsOutlineController {

  constructor(userService, actionsService, toastr) {
    'ngInject';
    this.user = userService.u();
    this.toastr = toastr;
    this.userService = userService;
    this.actionsService = actionsService;
    this.getActions();
  }

  getActions() {
    this.actionsService.getAllActions(this.dataset.id).then((result) => {
      this.all_actions = result;
    });
  }

}
