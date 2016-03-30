import {config} from './index.config';
import {routerConfig} from './index.route';
import {runBlock} from './index.run';
import {MainController} from './main.controller.js';
import {HomeController} from './home/home.controller';
import {SignController} from '../app/components/sign/sign-controller';
import {LoginDirective} from '../app/components/sign/login/login.directive';
import {RegisterDirective} from '../app/components/sign/register/register-directive';
import {SearchController} from './search/search-controller';
import {RecentDatasetsController} from './home/datasets/recent-datasets-controller';
import {TopDatasetsController} from './home/datasets/top-datasets-controller';
import {PopUpController} from './details/pop-up-controller';
import {DetailsController} from './details/details-controller';
import {BrowseController} from './browse/browse-controller';
import {TagController} from './tags/tags-controller';
import {CommentDirective} from './details/comment-directive';
import {NavbarDirective} from '../app/components/navbar/navbar.directive';
import {HomeTabDirective} from '../app/home/home-tab-directive';
import {SearchBarDirective} from '../app/directives/search-bar-directive';
import {PropertyValueDirective} from '../app/directives/property-value-directive';
import {DisplayImageDirective} from '../app/directives/display-image-directive';
import {releaseService} from './services/release-service';
import {searchService} from './search/search-service';
import {userService} from './services/user-service';
import {actionsService} from './services/actions-service';
import {browseService} from '../app/browse/browse-service';


angular.module('mcPublicData', ['ngAnimate', 'ngCookies', 'ngTouch', 'ngSanitize', 'ngMessages', 'ngAria',
    'restangular', 'ui.router', 'ui.bootstrap', 'toastr', 'ct.ui.router.extras', 'angularUtils.directives.dirPagination',
    'ngTagsInput'])
  .config(config)
  .config(routerConfig)
  .run(runBlock)
  .controller('MainController', MainController)
  .controller('HomeController', HomeController)
  .controller('SignController', SignController)
  .controller('SearchController', SearchController)
  .controller('RecentDatasetsController', RecentDatasetsController)
  .controller('TopDatasetsController', TopDatasetsController)
  .controller('PopUpController', PopUpController)
  .controller('DetailsController', DetailsController)
  .controller('BrowseController', BrowseController)
  .controller('TagController', TagController)
  .directive('acmeNavbar', NavbarDirective)
  .directive('homeTabDirective', HomeTabDirective)
  .directive('searchBarDirective', SearchBarDirective)
  .directive('propertyValue', PropertyValueDirective)
  .directive('displayImage', DisplayImageDirective)
  .directive('loginDirective', LoginDirective)
  .directive('registerDirective', RegisterDirective)
  .directive('commentDirective', CommentDirective)
  .service('releaseService', releaseService)
  .service('searchService', searchService)
  .service('userService', userService)
  .service('actionsService', actionsService)
  .service('browseService', browseService);

