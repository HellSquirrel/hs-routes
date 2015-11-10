import * as utils from '../modules/utils';

describe(
    'route creation test', function() {
        beforeEach(function() {

        });

        it('should create appropriate route string', function() {

            var obj = {
                path: ['one', 'two', 'three'],
                query: {value: '5', string: 'hello'}
            };

            expect(utils.createRoute(obj)).toEqual('/one/two/three?value=5&string=hello');
        })
    }
);