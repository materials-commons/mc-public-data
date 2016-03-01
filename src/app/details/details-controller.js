export class DetailsController {
  constructor(dataset, datasets, user) {
    'ngInject';

    this.dataset = dataset;
    console.dir(this.dataset);
    this.other_datasets = datasets;
    this.user = user;
  }

}

