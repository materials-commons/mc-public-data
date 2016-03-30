export class TagController {
  constructor(results, $stateParams) {
    'ngInject';
    this.results = results;
    this.tag = $stateParams.id;
    this.pageSize = 2;
  }
}

