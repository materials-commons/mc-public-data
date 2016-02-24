
import { config } from './index.config';
import { routerConfig } from './index.route';
import { runBlock } from './index.run';
import { MainController } from './main/main.controller';
import { HomeController } from './home/home.controller';
import { LoginController } from './login/login.controller';
import { ReleaseController } from './release/release-controller';
import { SearchController } from './search/search-controller';
import { RecentDatasetsController } from './home/datasets/recent-datasets-controller';
import { TopDatasetsController } from './home/datasets/top-datasets-controller';
import { NavbarDirective } from '../app/components/navbar/navbar.directive';
import { HomeTabDirective } from '../app/home/home-tab-directive';
import { loginService } from './login/login.service';
import { releaseService } from './release/release-service';
import { searchService } from './search/search-service';
import { SearchBarDirective } from '../app/directives/search-bar-directive';
import { PopUpController } from './search/pop-up-controller';
import { DetailsController } from './details/details-controller';


angular.module('mcPublicData', ['ngAnimate', 'ngCookies', 'ngTouch', 'ngSanitize', 'ngMessages', 'ngAria', 'restangular', 'ui.router', 'ui.bootstrap', 'toastr',  'ct.ui.router.extras', 'angularUtils.directives.dirPagination'])
  .config(config)
  .config(routerConfig)
  .run(runBlock)
  .service('loginService', loginService)
  .controller('MainController', MainController)
  .controller('HomeController', HomeController)
  .controller('LoginController', LoginController)
  .controller('ReleaseController', ReleaseController)
  .controller('SearchController', SearchController)
  .controller('RecentDatasetsController', RecentDatasetsController)
  .controller('TopDatasetsController', TopDatasetsController)
  .directive('acmeNavbar', NavbarDirective)
  .directive('homeTabDirective', HomeTabDirective)
  .service('releaseService', releaseService)
  .service('searchService', searchService)
  .directive('searchBarDirective', SearchBarDirective)
  .controller('PopUpController', PopUpController)
  .controller('DetailsController', DetailsController);

