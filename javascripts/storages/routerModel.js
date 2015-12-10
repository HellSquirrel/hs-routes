import {EventEmitter} from 'events';
import Parser from '../helpers/routeParser';

class Model extends EventEmitter{
    constructor() {

        super();
        this.patterns = {};
        this.totalOpenedRoutes = 0;
        this.state = {
            patterns: {},
            activeRoutes: []
        };
        window.addEventListener('hashchange', this.processRoute.bind(this), false);
    }

    //process all callbacks that match route
    processRoute() {

        var route = window.location.hash.slice(1);
        var activeRoutes = [];

        for (var pattern in this.patterns) {
            var match = Parser.match(route, pattern);
            if (match) {
                this.totalOpenedRoutes++;
                match.totalOpenendRoutes = this.totalOpenedRoutes;
                this.onRouteMatch(pattern, match);
                activeRoutes.push[route];
            } else {
                this.onRouteNotMatch(pattern);
            }

            this.state.patterns[pattern] = match;
            this.state.activeRoutes = activeRoutes;
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

        if (!this.isMatcherValid(cb)) throw new Error('invalid matcher, it should looks like {open: fn(), close: fh()}');

        key = this.normalize(key);
        if (this.patterns[key]) throw new Error('pattern exists');
        this.patterns[key] = cb;
        this.emit('pattern.add', key);

        this.processRoute();
    }

    isMatcherValid(cb) {

        return cb.open && cb.close && (typeof cb.open === 'function') && (typeof cb.close === 'function');
    }

    removePattern(key) {

        key = this.normalize(key);
        delete this.patterns[key];
        this.emit('pattern.remove');
    }

    normalize(route) {

        if (route[0] !== '/') {
            return '/' + route;
        } else {
            return route;
        }
    }
}

export default Model;
