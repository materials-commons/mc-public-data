export class DetailsController {
  constructor(dataset, datasets, user, userActionsService) {
    'ngInject';

    this.dataset = dataset;
    this.other_datasets = datasets;
    this.user = user;
    this.userActionsService = userActionsService;
    this.user_actions = this.userActionsService.getAllActions();
  }

  appreciate(){
    this.userActionsService.appreciate();
  }
}

