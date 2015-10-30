var Model = require('../modules/routerModel');

describe('router model test', function() {

    var model;
    beforeEach(function() {

        model = new Model();
    });

    it('should pass', function() {
        expect(model).toBeDefined();
    });

    it('can add route', function() {

        var cb = function() {
            console.log(hello);
        };

        model.addRoute('hello', cb);

        expect(model.routes['/hello']).toBeDefined();
        expect(model.routes['hello']).toBeUndefined();


        model.removeRoute('hello');
        expect(model.routes['hello']).toBeUndefined();
        expect(model.routes['/hello']).toBeUndefined();
    });

    it('match pattern', function() {

        var testRoute1 = '/hello';
        var testRoute3 = '/first/:param1/second/:param2';

        model.addRoute(testRoute1);
        model.addRoute(testRoute3);

        expect(model.getRoute(testRoute1).pattern).toEqual(testRoute1);
        expect(model.getRoute(testRoute1).pattern).toEqual(testRoute1);
        expect(model.getRoute('first/el/second/el').pattern).toEqual(testRoute3);
        expect(model.getRoute('first/el/second1/el')).toBeUndefined();
    })

});
