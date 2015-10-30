import EventEmitter from 'events';

class Model extends EventEmitter{
    constructor() {

        super();
        this.routes = {}
    }

    addRoute(key, cb) {

        if(this.routes[key]) throw new Error('route exists');
        this.routes[key] = cb;
        this.emit('route.add');
    }

    removeRoute(key) {
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
            return '/'
        }

        else {

        }
    }
}

module.exports = Model;
