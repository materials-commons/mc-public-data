export function runBlock ($log, userService, $state, $rootScope) {
  'ngInject';
  $log.debug('runBlock end');

  $rootScope.$on('$stateChangeStart', function (event, toState) {
     $rootScope.email_address = userService.email();
     if(toState.name === "main.details"){
       $rootScope.showSearchBar = true;
     }else{
       $rootScope.showSearchBar = false;
     }
  });
  $rootScope.$on('$stateChangeError', function () {
    $state.go("main.login");
  });
}
