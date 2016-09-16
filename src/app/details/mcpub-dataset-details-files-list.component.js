export class MCPubDatasetDetailsFilesListComponentController {
    constructor() {
        'ngInject';

        this.view = "list";
    }

    setView(view) {
        this.view = view;
    }

    isActive(what) {
        return this.view === what;
    }
}
