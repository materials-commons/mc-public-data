export class DetailsController {
  constructor(dataset, datasets) {
    'ngInject';

    this.dataset = dataset;
    this.datasets = datasets;
    console.dir(this.dataset);
  }
}

