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

  addTag(dataset_id, user_id, tag) {
    return this.Restangular.one('tags').customPOST({user_id: user_id, dataset_id: dataset_id, tag: tag}).then((result)=> {
      this.toastr.success("Tagged Successfully! ");
    });
  }

  removeTag(id, user_id) {
    return this.Restangular.one('tags').customPUT({id: id, user_id: user_id}).then((result)=> {
      this.toastr.success("Removed Tag! ");
    });
  }


  getAllTags(){
    return this.Restangular.one('tags').getList().then(function (tags) {
      return tags.plain();
    });
  }

  getProcessTypes(){
    return this.Restangular.one('processes').one('types').getList().then(function (process_types) {
      return process_types.plain();
    });
  }

  getSamples(){
    return this.Restangular.one('samples').getList().then(function (samples) {
      return samples.plain();
    });
  }

}
