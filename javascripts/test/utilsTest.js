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

            expect(utils.createRoute(obj)).toEqual('/one/two/three?%7B%22value%22%3A%225%22%2C%22string%22%3A%22hello%22%7D');
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
