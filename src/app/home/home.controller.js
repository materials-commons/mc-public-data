export class HomeController {
  constructor(tags, process_types, samples, browseService) {
    'ngInject';

    this.browseService = browseService;
    console.dir(samples);
    this.browseService.setResults(process_types);
    this.tags = tags;
    this.process_types =  process_types;
    this.samples =  samples;
    // this.datasets =  datasets;
    this.samples = this.orderByDatasetCount(this.samples);
  }

  browse(type){

  }

  orderByDatasetCount(samples){
    return  _.sortBy(samples, 'dataset_count').reverse();
  }

}

