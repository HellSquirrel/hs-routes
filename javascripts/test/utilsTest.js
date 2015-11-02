var createRoute = require('../modules/utils').createRoute;

describe(
    'route creation test', function() {
        beforeEach(function() {

        });

        it('should create appropriate route string', function() {

            var obj = {
                path: ['one', 'two', 'three'],
                query: {value: '5', string: 'hello'}
            };

            expect(createRoute(obj)).toEqual('/one/two/three?value=5&string=hello');
        })
    }
);