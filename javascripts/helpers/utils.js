export function createRoute(obj) {

    var path = '/' + obj.path.join('/');

    if(obj.query && Object.keys(obj.query).length) {

        path += '?' + serialize(obj.query)
    }

    return path;
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


export function serialize(obj) {
    return encodeURIComponent(JSON.stringify(obj));
}


export function deserialize(string) {
    return JSON.parse(decodeURIComponent(string));
}

