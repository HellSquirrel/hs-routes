import * as utils from '../helpers/utils';

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
        });

        it('should serialize and deserialize string', function() {
            var obj = {
                foo: [1,2,4],
                bar: {min:3, max: 4}
            };

            expect(utils.deserialize(utils.serialize(obj))).toEqual(jasmine.objectContaining(obj));
        })
    }

);
window.utils = utils;
