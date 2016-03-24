export class browseService {
  /*@ngInject*/
  constructor() {
    this.results = [];
    console.log('constructor browse service');
  }

  setResults(browse_data) {
    console.log(browse_data);
    this.results = browse_data;
  }

  getResults(group) {
    var i = _.findIndex(this.results, function (row) {
      return row.group == group;
    });
    if(i > -1){
      return this.results[i];
    }
  }
}
