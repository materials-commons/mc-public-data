export function config ($logProvider, toastrConfig, RestangularProvider, $windowProvider) {
  'ngInject';
  // Enable log
  $logProvider.debugEnabled(true);
  var $window = $windowProvider.$get();

  // Set options third-party lib
  toastrConfig.allowHtml = true;
  toastrConfig.timeOut = 3000;
  toastrConfig.positionClass = 'toast-top-right';
  toastrConfig.preventDuplicates = true;
  toastrConfig.progressBar = true;

  //set the base url for api calls on RESTful services

  var newBaseUrl = $window.location.protocol + "//" +
    $window.location.hostname + ':5000' + '/api/v1';

  RestangularProvider.setBaseUrl(newBaseUrl);
}
