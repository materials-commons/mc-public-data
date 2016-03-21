export function routerConfig($stateProvider, $urlRouterProvider) {
  'ngInject';
  $stateProvider
    .state('main', {
      url: '/',
      templateUrl: 'app/main.html',
      controller: 'MainController',
      controllerAs: 'ctrl'
    })
    .state('main.login', {
      url: '/login',
      templateUrl: 'app/components/login/login.html',
      controller: 'LoginController',
      controllerAs: 'ctrl'
    })
    .state('main.home', {
      url: '/home',
      templateUrl: 'app/home/home.html',
      controller: 'HomeController',
      controllerAs: 'ctrl',
      sticky: true,
      dsr: true,
      resolve: {
        datasets: ["releaseService", function (releaseService) {
          return releaseService.getAll();
        }]
      }
    })
    .state('main.home.top', {
      url: '/top',
      controller: 'TopDatasetsController',
      controllerAs: 'ctrl',
      resolve: {
        datasets: ["releaseService", function (releaseService) {
          return releaseService.topViews();
        }]
      },
      templateUrl: 'app/home/datasets/top-datasets.html'
    })
    .state('main.home.recent', {
      url: '/recent',
      controller: 'RecentDatasetsController',
      controllerAs: 'ctrl',
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
      controllerAs: 'search',
      resolve: {
        results: ["searchService", function (searchService) {
          return searchService.searchByDOI();
        }]
      }
    })
    .state('main.details', {
      url: '/details/:id',
      templateUrl: 'app/details/details.html',
      controller: 'DetailsController',
      controllerAs: 'ctrl',
      resolve: {
        dataset: ["releaseService", "$stateParams", function (releaseService, $stateParams) {
          return releaseService.getByID($stateParams.id);
        }],
        datasets: ["searchService", function (searchService) {
          return searchService.searchByDOI();
        }]
      },
      showSearchbar: true
    })
    .state('main.register', {
      url: '/register',
      templateUrl: 'app/components/register/register.html',
      controller: 'RegisterController',
      controllerAs: 'ctrl'
    });
  $urlRouterProvider.otherwise('/');
}
