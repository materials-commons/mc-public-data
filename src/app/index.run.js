export function runBlock ($log, userService, $state, $rootScope) {
  'ngInject';
  $log.debug('runBlock end');

  $rootScope.$on('$stateChangeStart', function () {
    //if (userService.isAuthenticated()) {
      $rootScope.email_address = userService.email();
    //}
  });
  $rootScope.$on('$stateChangeError', function () {
    $state.go("main.login");
  });
}
