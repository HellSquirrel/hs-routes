export function createRoute(obj) {

    var path = obj.path.join('/');
    var query = [];

    if(obj.query) {

        for(var key in obj.query) {
            query.push(`${key}=${obj.query[key]}`);
        }
    }

    return '/' + path + '?' + query.join('&');

};

export function goTo(path, query) {
    var route = createRoute({path: path.split('/'), query});
    if(path[0] === '/') {
        window.location.hash = route.replace(/[^:]?\/\//,'/');
    }

    else {
        window.location.hash = (window.location.hash + route).replace(/[^:]\/\//,'/');
    }
}


