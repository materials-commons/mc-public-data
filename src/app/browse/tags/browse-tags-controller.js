export class BrowseTagsController {
  constructor(tags, $state) {
    'ngInject';
    this.tags = tags;
    this.$state = $state;
  }

  viewTagResults(tag) {
    this.$state.go("tags", {id: tag.id});
  }
}

