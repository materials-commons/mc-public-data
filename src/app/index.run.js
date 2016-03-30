export function runBlock ($log, userService, $state, $rootScope) {
  'ngInject';
  $log.debug('runBlock end');

  $rootScope.$on('$stateChangeStart', function (event, toState) {
     $rootScope.email_address = userService.email();
     if(toState.name.match(/(home)/g) || toState.name.match(/(search)/g)){
       $rootScope.showSearchBar = false;
     }else{
       $rootScope.showSearchBar = true;
     }
  });
  $rootScope.$on('$stateChangeError', function () {
    $state.go("main.login");
  });
}
