export class DatasetDetailsFilelistController {

    constructor(userService, actionsService, toastr, $uibModal, $previousState) {
        'ngInject';
        console.log("at start of constructor");
        this.user = userService.u();
        this.toastr = toastr;
        this.userService = userService;
        this.actionsService = actionsService;
        this.getActions();
        this.viewDataset();
        this.view = "list";
        this.$uibModal = $uibModal;
        this.$previousState = $previousState;
        console.log(this.dataset.authors.length);
        this.zipFilePath = "api/pub/datasets/download/" + this.dataset.id + "?apikey=" + this.userService.apikey();
        this.dataset.author = this.dataset.authors[0];
        this.dataset.other_authors = this.dataset.authors.slice(1);
        console.log("at end of constructor: " + this.dataset.id);
    }

    getActions() {
        this.actionsService.getAllActions(this.dataset.id).then((result) => {
            this.all_actions = result;
        });
    }

    viewDataset() {
      if (this.user) {
        this.actionsService.viewDataset(this.dataset.id, this.user.id);
      } else {
        this.actionsService.viewDataset(this.dataset.id, "anonymous");
      }
    }

    setView(view) {
      this.view = view;
    }

    isActive(what) {
      return this.view === what;
    }

    openImage(file) {
      var modalInstance = this.$uibModal.open({
        animation: true,
        templateUrl: 'app/details/pop-up.html',
        controller: 'PopUpController',
        controllerAs: 'ctrl',
        bindToController: true,
        size: 'lg',
        keyboard: true,
        resolve: {
          file: function () {
            return file;
          }
        }
      });
    }

}

