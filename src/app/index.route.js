export function routerConfig($stateProvider, $urlRouterProvider) {
  'ngInject';
  $stateProvider
    .state('main', {
      url: '/',
      templateUrl: 'app/main/main.html',
      controller: 'MainController',
      controllerAs: 'main'
    })
    .state('main.release', {
      url: '/release',
      templateUrl: 'app/release/release.html',
      controller: 'ReleaseController',
      controllerAs: 'release',
      resolve: {
        releases: ["releaseService", function (releaseService) {
          return releaseService.getAll();
        }]
      }
    })
    .state('main.home', {
      url: '/home',
      templateUrl: 'app/home/home.html',
      controller: 'HomeController',
      controllerAs: 'home',
      sticky: true,
      dsr: true,
      resolve: {
        datasets: ["releaseService", function (releaseService) {
          return releaseService.getAll();
        }]
      }
    })
    .state('main.login', {
      url: '/login',
      templateUrl: 'app/login/login.html',
      controller: 'LoginController',
      controllerAs: 'login'
    })
    .state('main.home.top', {
      url: '/top',
      controller: 'TopDatasetsController',
      controllerAs: 'top',
      resolve: {
        datasets: ["releaseService", function (releaseService) {
          return releaseService.topList();
        }]
      },
      templateUrl: 'app/home/datasets/top-datasets.html'
    })
    .state('main.home.recent', {
      url: '/recent',
      controller: 'RecentDatasetsController',
      controllerAs: 'recent',
      resolve: {
        datasets: ["releaseService", function (releaseService) {
          return releaseService.getRecent();
        }]
      },
      templateUrl: 'app/home/datasets/recent-datasets.html'
    })
    .state('main.search', {
      url: '/search/:selection/:searchTerm',
      templateUrl: 'app/search/search_results.html',
      controller: 'SearchController',
      controllerAs: 'search'
    });
  $urlRouterProvider.otherwise('/');
}
