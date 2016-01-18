export function HomeTabDirective(){
  'ngInject';

  let directive ={
    restrict: 'A',
    templateUrl: 'app/home/home-tabs.html',
    scope:{

    },
    controller: HomeTabController,
    controllerAs: 'vm',
    bindToController: true
  };
  return directive;
}
class HomeTabController{
  constructor(){

  }
}
