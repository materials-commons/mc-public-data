export function runBlock($log, userService, $state, $rootScope, Restangular) {
  'ngInject';
  $log.debug('runBlock end');

  if (userService.isAuthenticated()) {
    Restangular.setDefaultRequestParams({apikey: userService.apikey()});
  }

  $rootScope.$on('$stateChangeStart', function (event, toState) {
    $rootScope.email_address = userService.email();
    // search bar under the top navigation will show up only for certain routes
    checkNavigationSearchBar(toState)
  });

  $rootScope.$on('$stateChangeError', function () {
    $state.go("main.login");
  });

  function checkNavigationSearchBar(toState) {
    if (toState.name.match(/(home)/g) || toState.name.match(/(search)/g)) {
      $rootScope.showSearchBar = false;
    } else {
      $rootScope.showSearchBar = true;
    }
  }
}
