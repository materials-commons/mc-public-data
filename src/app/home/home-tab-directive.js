export function HomeTabDirective(){
  'ngInject';

  let directive ={
    restrict: 'A',
    templateUrl: 'app/home/home-tabs.html'
  };
  return directive;
}
