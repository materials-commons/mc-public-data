export class PopUpController {
  constructor(files, $uibModalInstance) {
    'ngInject';
    this.files = files;
    this.$uibModalInstance = $uibModalInstance;
  }

  ok() {
    this.$uibModalInstance.close();
  }

  cancel() {
    this.$uibModalInstance.dismiss('cancel');
  }
}

