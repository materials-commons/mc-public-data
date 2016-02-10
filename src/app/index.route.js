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
                releases: ["releaseService", function(releaseService){
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
        dsr: true
      })
      .state('main.login', {
        url: '/login',
        templateUrl: 'app/login/login.html',
        controller: 'LoginController',
        controllerAs: 'login',
      })
      .state('main.home.tab1', {
        url: '/tab1',
        template: "<h3>Tab1:</h3><div class='well tab1'><ul><li>First....</li><li>Second...</li><li>Third...</li></ul></div>"
      })
      .state('main.home.tab2', {
        url: '/tab2',
        template: "<h3>Tab2:</h3><div class='well tab2'><ul><li>stuff 1</li><li>stuff 2</li><li>stuff 3</li></ul></div>"
      })
      .state('main.home.tab3', {
        url: '/tab3',
        template: "<h3>Tab3:</h3><div class='well tab3'><ul><li>stuff 1</li><li>stuff 2</li><li>stuff 3</li></ul></div>"
      });

    $urlRouterProvider.otherwise('/');
}
