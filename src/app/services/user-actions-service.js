export class userActionsService{
  /*@ngInject*/
  constructor(Restangular){
    this.Restangular = Restangular;
    this.user_actions = {
      appreciations: 1,
      views: 0,
      downloads: 0,
      comments: [],
      bookmark: 0
    }
  }

  appreciate(){
    this.user_actions.appreciations++;
  }

  view(){
    this.user_actions.views++;
  }

  getAllActions(){
    return this.user_actions;
  }
}
