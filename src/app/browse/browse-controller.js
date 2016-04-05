export class BrowseController {
  constructor(browseService) {
    'ngInject';
    this.browseService = browseService;
  }

  isRouteActive(route){
    return this.browseService.isRouteActive(route);
  }
}

