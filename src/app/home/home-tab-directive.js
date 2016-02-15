export function HomeTabDirective(){
  'ngInject';

  let directive ={
    restrict: 'A',
    templateUrl: 'app/home/home-tabs.html'
    //bindToController: true
  };
  return directive;
}
