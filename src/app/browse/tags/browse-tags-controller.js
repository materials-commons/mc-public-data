export class BrowseTagsController {
  constructor(tags, $state) {
    'ngInject';
    this.tags = tags;
    this.$state = $state;
  }

  viewTagResults(tag) {
    this.$state.go("main.tags", {id: tag.id});
  }
}

