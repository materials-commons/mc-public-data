export class MCPubProcessDetailsSetupComponentController {
    /*@ngInject*/
    constructor() {

    }

    removeEmpty() {
        return function(prop) {
            console.log('prop');
            return prop.value !== '';
        }
    }
}
