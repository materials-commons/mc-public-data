export class ReleaseController {
    constructor(releaseService, releases) {
      console.log('inside my controller');
        'ngInject';
        this.releaseService = releaseService;
        this.releases = releases;
      console.dir(this.releases);
    }
}
