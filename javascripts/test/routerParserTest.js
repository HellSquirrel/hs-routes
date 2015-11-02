var Parser = require('../modules/routeParser');
var _ = require('lodash');


describe('route parser tests', function() {


    it('can parse path', function() {

        var route = '/some/test/route?hello=true&bye=false';

        var result = Parser.parse(route).path;

        console.log(result);

        var expected = ['some', 'test', 'route'];

        expect(_.isEqual(result, expected)).toBeTruthy();
    });


    it('can parse query', function() {

        var query = 'one=two&three=four';

        var result = Parser.parseQuery(query);
        var expected = {one: 'two', three: 'four'};

        expect(_.isEqual(result, expected)).toBeTruthy();
        expect(_.isEqual(Parser.parseQuery('one=two'),{one: 'two'})).toBeTruthy();
    });

    it('can create parse object', function() {
        var route = '/some/test/route?hello=true&bye=false';

        var result = Parser.parse(route);
        console.log(result);

        var expected = {path: ['some', 'test', 'route'], query: {hello: 'true', bye: 'false'}};

        expect(_.isEqual(result, expected)).toBeTruthy();

    });

    it('can match url and pattern', function() {

        var pattern = '/first/second/:data/last/:id';
        var route = '/first/second/value/last/17';

        var result = Parser.match(route,pattern);
        expect(result).toBeTruthy();
        expect(_.isEqual(result.params,{data:'value', id: '17'})).toBeTruthy();

        route = '/firs/second/last/0';
        expect(Parser.match(route, pattern)).toBeFalsy();

        route = '/firs/second/last/temp/10';
        expect(Parser.match(route, pattern)).toBeFalsy();
    });

    it('can match url and pattern with wildcards', function () {

        var pattern = '/first/second/:data/*';
        var route = '/first/second/value/last/17';

        var result = Parser.match(route, pattern);
        expect(result).toBeTruthy();
        expect(_.isEqual(result.params, {data: 'value'}));


        pattern = '/first/second/:data/*';
        route = '/first/second/value';

        result = Parser.match(route, pattern);
        expect(_.isEqual(result.params, {data:'value'})).toBeTruthy();

    })
});
