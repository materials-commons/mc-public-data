/* global malarkey:false, moment:false */

import { config } from './index.config';
import { routerConfig } from './index.route';
import { runBlock } from './index.run';
import { MainController } from './main/main.controller';
import { HomeController } from './home/home.controller';
import { LoginController } from './login/login.controller';
import { GithubContributorService } from '../app/components/githubContributor/githubContributor.service';
import { WebDevTecService } from '../app/components/webDevTec/webDevTec.service';
import { NavbarDirective } from '../app/components/navbar/navbar.directive';
import { MalarkeyDirective } from '../app/components/malarkey/malarkey.directive';
import { HomeTabDirective } from '../app/home/home-tab-directive';
import { loginService } from './login/login.service';
//import { homeService } from './home/home.service';

angular.module('mcPublicData', ['ngAnimate', 'ngCookies', 'ngTouch', 'ngSanitize', 'ngMessages', 'ngAria', 'restangular', 'ui.router', 'ui.bootstrap', 'toastr', 'ct.ui.router.extras']).constant('malarkey', malarkey).constant('moment', moment).config(config).config(routerConfig).run(runBlock).service('githubContributor', GithubContributorService).service('webDevTec', WebDevTecService).service('loginService', loginService).controller('MainController', MainController).controller('HomeController', HomeController).controller('LoginController', LoginController).directive('acmeNavbar', NavbarDirective).directive('acmeMalarkey', MalarkeyDirective).directive('homeTabDirective', HomeTabDirective);
//.factory('homeService', homeService);

//# sourceMappingURL=index.module-compiled.js.map