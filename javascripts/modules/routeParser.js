class Parser {

    static parse(route) {
        var query = null;
        var path = [];

        var routeString = route.match(/^\/?([^?]*)/);

        if(routeString.length) {

            path = routeString[1].split('/');

            var queryString = (route.match(/\?(.*)$/) || [,''])[1];
            if(queryString.length) {
                query = Parser.parseQuery(queryString);
            }
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

        var parsedRouteLength  = parsedRoute.length;
        var parsedPatternLength = parsedPattern.length;

        if(parsedRouteLength === parsedPatternLength) {

            for(var i = 0; i < parsedRouteLength; i++) {

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

            if(parsedPattern.slice(-1)[0] === '*' && parsedRouteLength > parsedPatternLength) {

                var newPattern = parsedPattern.slice(0, -1);
                var newRoute = parsedRoute.slice(0, newPattern.length);

                return Parser.match(newRoute.join('/'), newPattern.join('/'));
            };

            return null
        }

    }
}

module.exports = Parser;