export class HomeController {
  constructor(tags, process_types) {
    'ngInject';

    this.tags = tags;
    this.process_types =  process_types;
    console.log( process_types);
  }

}

