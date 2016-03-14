export class DetailsController {
  constructor(dataset, datasets, actionsService, toastr, userService) {
    'ngInject';
    this.dataset = dataset;
    this.other_datasets = datasets;
    this.toastr = toastr;
    this.userService = userService;
    this.actionsService =actionsService;
    this.user = this.userService.u();
    this.getActions();
    this.viewDataset();
  }

  appreciate() {
    if (this.user) {
      this.dataset.appreciate =  !this.dataset.appreciate;
      this.actionsService.appreciate(this.dataset.id, this.user.id).then((res) => {
        this.getActions();
      });
    }else{
      toastr.warning("Please sign in to appreciate the work");
    }
  }

  removeAppreciate() {
    if (this.user) {
      this.actionsService.removeAppreciation(this.dataset.id, this.user.id).then((res) => {
        this.dataset.appreciate = false;
        this.getActions();
      });
    }else{
      toastr.warning("Please sign in to appreciate the work");
    }
  }

  getActions(){
    this.actionsService.getAllActions(this.dataset.id).then((result) =>{
      this.all_actions = result;
    });
  }

  viewDataset(){
    if (this.user) {
      this.actionsService.viewDataset( this.dataset.id, this.user.id);
    }else{
      this.actionsService.viewDataset( this.dataset.id,"anonymous");
    }
  }

  downloadSrc(){
    //var apikey = this.user.apikey;
    //var url = "datafiles/static/" + fileID + "?apikey=" + apikey + "&original=true";
    //return url;
  }
}

