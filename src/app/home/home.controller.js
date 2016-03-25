export class HomeController {
  constructor(tags, process_types, samples, browseService) {
    'ngInject';

    this.browseService = browseService;
    this.browseService.setProcessResults(process_types);
    this.browseService.setSampleResults(samples);
    this.tags = tags;
    this.process_types =  process_types;
    this.samples =  samples;
    this.samples = this.orderByDatasetCount(this.samples);
  }

  browse(type){

  }

  orderByDatasetCount(samples){
    return  _.sortBy(samples, 'dataset_count').reverse();
  }
}

