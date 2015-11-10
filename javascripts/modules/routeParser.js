//wildcards doesnt work with query

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

        var parsedPatternPath = Parser.parse(pattern).path;

        var parsedPattern = Parser.parse(route);
        var parsedRoutePath = Parser.parse(route).path;
        var params = {};
        var matcher = {...parsedPattern};

        var parsedRouteLength  = parsedRoutePath.length;
        var parsedPatternLength = parsedPatternPath.length;

        if(parsedRouteLength === parsedPatternLength) {

            for(var i = 0; i < parsedRouteLength; i++) {

                if(parsedPatternPath[i][0] == ':') {
                    params[parsedPatternPath[i].slice(1)] = parsedRoutePath[i];
                }

                else {
                    if(parsedPatternPath[i] !== parsedRoutePath[i]) {
                        return null;
                    }
                }
            }

            matcher.params = params;
            return matcher;
        }

        else {

            if(parsedPatternPath.slice(-1)[0] === '*') {

                var newPattern = parsedPatternPath.slice(0, -1);
                var newRoute = parsedRoutePath.slice(0, newPattern.length);

                return Parser.match(newRoute.join('/'), newPattern.join('/'));
            };

            return null
        }

    }
}

export default Parser;
