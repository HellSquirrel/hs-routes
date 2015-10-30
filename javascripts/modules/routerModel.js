import EventEmitter from 'events';

class Model extends EventEmitter{
    constructor() {

        super();
        this.routes = {}
    }

    addRoute(key, cb) {

        key = this.normalize(key);
        if(this.routes[key]) throw new Error('route exists');
        this.routes[key] = cb;
        this.emit('route.add');
    }

    removeRoute(key) {

        key = this.normalize(key);
        this.routes[key] = undefined;
    }

    getRoute(string) {

        for(var route in this.routes) {
            if(this.match(route, string)) {
                return this.routes[route];
            }
        }
    }

    normalize(route) {

        if(route[0] !== '/') {
            return '/' + route;
        }

        else {
            return route
        }
    }

    match(string, pattern) {

        pattern = pattern.replace(/:\w+/ig, '(\w+)');
    }
}

module.exports = Model;
