(function () {
  'use strict';

  angular.module('mcPublicData').controller('loginController', loginController);

  /** @ngInject */
  function loginController() {
    var vm = this;

    vm.submit = submit;

    function submit() {
      console.log('clicked submit');
      //Restangular.one('users', '123').get().then(function(){
      //  console.log('Posted into database');
      //});
    }
  }
})();

//# sourceMappingURL=login.controller-compiled.js.map