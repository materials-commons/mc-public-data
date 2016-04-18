export class HomeController {
  constructor(tags, count_authors, count_datasets, browseService, $state, userService) {
    'ngInject';

    this.browseService = browseService;
    this.userService = userService;
    this.$state = $state;

    this.tags = tags;
    this.count_tags = tags.length;
    this.count_authors = count_authors;
    this.count_datasets = count_datasets;
    this.placeholder_tag = "";
    if (this.count_tags === 0) {
      this.placeholder_tag = 'No Tags';
    } else {
      this.placeholder_tag = '';
    }
  }

  orderByDatasetCount(samples) {
    return _.sortBy(samples, 'dataset_count').reverse();
  }

  viewTagResults(tag) {
    this.$state.go("main.tags", {id: tag.id});
  }

  isUserLoggedIn() {
    return this.userService.isAuthenticated();
  }
}

