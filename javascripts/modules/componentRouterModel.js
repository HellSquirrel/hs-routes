var RouterModel = require('./routerModel');

class ComponentRouterModel extends RouterModel {

    constructor() {
        super();
    }

    registerView(pattern, view) {

        super.addPattern(pattern, view);
        this.emit('view.add');
    }

    unregisterView(pattern, view) {
        super.removePattern(pattern, view);
        this.emit('view.remove');
    }

    onRouteMatch(pattern, match) {

        var view = this.patterns[pattern];
        view.willOpen && view.willOpen(pattern, match);
        view.open && view.open(pattern, match);
        view.didOpen && view.didOpen(pattern, match);
        this.emit('route.match', match);
    }

    onRouteNotMatch(pattern) {
        var view = this.patterns[pattern];
        view.willClose && view.willClose(pattern);
        view.close && view.close(pattern);
        view.didClose && view.didClose(pattern);
    }
}

export default ComponentRouterModel;
