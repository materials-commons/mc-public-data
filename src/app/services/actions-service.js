export class actionsService {
  /*@ngInject*/
  constructor(Restangular, toastr, userService) {
    this.Restangular = Restangular;
    this.userService = userService;
    this.toastr = toastr;
  }

  appreciate(dataset_id, user_id) {
    return this.Restangular.one('appreciate').customPOST({user_id: user_id, dataset_id: dataset_id}).then((result)=> {
      this.toastr.success("Appreciated! ");
    });
  }

  removeAppreciation(dataset_id, user_id) {
    return this.Restangular.one('appreciate').one('user', user_id).one('dataset', dataset_id).remove().then((result)=> {
      this.toastr.success("Removed Appreciation! ");
    });
  }

  viewDataset(dataset_id, user_id) {
    return this.Restangular.one('views').customPOST({user_id: user_id, dataset_id: dataset_id});
  }

  getActionsByUser(user_id, dataset_id) {
    return this.Restangular.one('actions').one('user', user_id).customGET(dataset_id).then(function (result) {
      return result.plain();
    });
  }

  getAllActions(dataset_id) {
    return this.Restangular.one('actions').customGET(dataset_id).then(function (result) {
      return result.plain();
    });
  }

  addComment(msg, dataset_id, user_id) {
    return this.Restangular.one('comments').customPOST({
      message: msg,
      user_id: user_id,
      dataset_id: dataset_id
    }).then((result)=> {
      this.toastr.success("Your comment has been registered");
    });
  }
}
