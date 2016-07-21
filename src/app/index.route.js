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
      controllerAs: 'home',
      // sticky: true,
      // dsr: true,
      resolve: {
        tags: ["actionsService", function (actionsService) {
          return actionsService.getAllTags();
        }],
        count_datasets: ["releaseService", function (releaseService) {
          return releaseService.getAllCount();
        }],
        count_authors: ["actionsService", function (actionsService) {
          return actionsService.getAllAuthorsCount();
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
        }]
      },
      showSearchBar: true
    })
    .state('main.register', {
      url: '/register',
      templateUrl: 'app/components/register/register.html',
      controller: 'RegisterController',
      controllerAs: 'ctrl'
    })
    .state('main.browse', {
      url: '/browse/:group/:type',
      templateUrl: 'app/browse/browse.html',
      controller: 'BrowseController',
      controllerAs: 'ctrl',
      resolve: {
        count_tags: ["actionsService", function (actionsService) {
          return actionsService.getAllTagsCount();
        }],
        count_datasets: ["releaseService", function (releaseService) {
          return releaseService.getAllCount();
        }],
        count_authors: ["actionsService", function (actionsService) {
          return actionsService.getAllAuthorsCount();
        }]
      },
      showSearchBar: true
    })
    .state('main.browse.datasets', {
      url: '/datasets',
      templateUrl: 'app/browse/datasets/browse-datasets.html',
      controller: 'BrowseDatasetsController',
      controllerAs: 'ctrl',
      resolve: {
        datasets: ["releaseService", function (releaseService) {
          return releaseService.getAll();
        }]
      },
      showSearchBar: true
    })
    .state('main.browse.tags', {
      url: '/tags',
      templateUrl: 'app/browse/tags/browse-tags.html',
      controller: 'BrowseTagsController',
      controllerAs: 'ctrl',
      resolve: {
        tags: ["actionsService", function (actionsService) {
          return actionsService.getAllTags();
        }]
      },
      showSearchBar: true
    })
    .state('main.browse.authors', {
      url: '/authors',
      templateUrl: 'app/browse/authors/authors.html',
      controller: 'BrowseAuthorsController',
      controllerAs: 'ctrl',
      resolve: {
        authors: ["actionsService", function (actionsService) {
          return actionsService.getAllAuthors();
        }]
      },
      showSearchBar: true
    })
    .state('main.tags', {
      url: '/tag/:id',
      templateUrl: 'app/tags/tag-results.html',
      controller: 'TagController',
      controllerAs: 'ctrl',
      resolve: {
        results: ["actionsService", "$stateParams", function (actionsService, $stateParams) {
          return actionsService.getDatasetsByTag($stateParams.id);
        }]
      },
      showSearchBar: true
    });
  $urlRouterProvider.otherwise('/');
}
