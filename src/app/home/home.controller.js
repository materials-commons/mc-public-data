export class HomeController {
  constructor(tags, process_types, samples, browseService, $state, userService) {
    'ngInject';
    this.browseService = browseService;
    this.userService = userService;
    this.$state = $state;
    this.browseService.setProcessResults(process_types);
    this.browseService.setSampleResults(samples);
    this.tags = tags;
    this.process_types = process_types;
    this.samples = samples;
    this.samples = this.orderByDatasetCount(this.samples);
    this.placeholder_tag = "";
    if (this.tags.length === 0) {
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

