class Parser {

    static parse(route) {

        var routeString = route.match(/^\/([^?]*)/);
        var path = routeString[1].split('/');
        var query = null;

        var queryString = (route.match(/\?(.*)$/) || [,''])[1];
        if(queryString.length) {
            query = Parser.parseQuery(queryString);
        }

        return {
            path, query
        }
    }

    static parseQuery(queryString) {

        return queryString.split('&').reduce(function(result, el) {
            var [key, value] = el.split('=');

            result[key] = value;
            return result;

        }, {})
    }

    static match(route, pattern) {

        var params = {};
        var parsedPattern = Parser.parse(pattern).path;
        var parsedRoute = Parser.parse(route).path;

        var l = parsedRoute.length;

        if(l === parsedPattern.length) {

            for(var i = 0; i < l; i++) {

                if(parsedPattern[i][0] == ':') {
                    params[parsedPattern.slice(1, -1)] = parsedRoute[i];
                }

                else {
                    if(parsedPattern[i] !== parsedRoute[i]) {
                        return null;
                    }
                }
            }

            return params;
        }

        else {
            return null
        }

    }
}

module.exports = Parser;