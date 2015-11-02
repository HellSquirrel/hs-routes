function createRoute(obj) {

    var path = obj.path.join('/');
    var query = [];

    if(obj.query) {

        for(var key in obj.query) {
            query.push(`${key}=${obj.query[key]}`);
        }
    }

    return '/' + path + '?' + query.join('&');

};

module.exports = {createRoute};