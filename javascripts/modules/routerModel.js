import EventEmitter from 'events';
var Parser = require('./routeParser');


class Model extends EventEmitter{
    constructor() {

        super();
        this.patterns = {};
        window.addEventListener('hashchange', this.processRoute.bind(this), false);
    }

    //process all callbacks that match route
    processRoute() {

        var route = window.location.hash.slice(1);

        for(var pattern in this.patterns) {
            var match = Parser.match(route, pattern);
            if (match) {
               this.onRouteMatch(pattern, match);
            }

            else {
                this.onRouteNotMatch(pattern);
            }
        }
    }

    onRouteMatch(pattern, match) {
        //call cb
        this.patterns[pattern].open(match);
        this.emit('route.match', match);
    }

    onRouteNotMatch(pattern) {

        this.patterns[pattern].close(pattern);
        this.emit('route.not.match', pattern);
    }

    addPattern(key, cb) {

        key = this.normalize(key);
        if(this.patterns[key]) throw new Error('pattern exists');
        this.patterns[key] = cb;
        this.emit('pattern.add');
    }

    removePattern(key) {

        key = this.normalize(key);
        delete this.patterns[key];
        this.emit('pattern.remove');
    }

    normalize(route) {

        if(route[0] !== '/') {
            return '/' + route;
        }

        else {
            return route
        }
    }
}

module.exports = Model;
