export class MainController {
  constructor ($state) {
    'ngInject';

    $state.go('main.home');
  }
}
