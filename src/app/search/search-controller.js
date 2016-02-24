export class SearchController {
  constructor($state, searchService, results, $uibModal) {
    'ngInject';

    this.searchService = searchService;
    this.selection = $state.params.selection;
    this.searchTerm = $state.params.searchTerm;
    this.results = results;
    this.pageSize = 2;
    this.$uibModal = $uibModal;
  }

  open(size, dataset){
    var modalInstance = this.$uibModal.open({
      animation: true,
      templateUrl: 'app/search/pop-up.html',
      controller: 'PopUpController',
      controllerAs: 'ctrl',
      bindToController: true,
      size: size,
      keyboard: true,
      resolve: {
        files: function () {
          return dataset.files;
        }
      }
    });

    modalInstance.result.then(function (selectedItem) {
      this.selected = selectedItem;
    });
  }
}

