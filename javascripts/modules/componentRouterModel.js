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

    onMatch(pattern, match) {

        var view = this.patterns[pattern];
        view.willOpen && view.willOpen(pattern, match);
        view.open && view.open(pattern, match);
        view.didOpen && view.didOpen(pattern, match);
        this.emit('route.match', match);
    }
}

module.exports = ComponentRouterModel;
