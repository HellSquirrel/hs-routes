var Model = require('../modules/routerModel');

describe('router model test', function() {

    var model;
    beforeEach(function() {

        model = new Model();
    });

    afterEach(function() {
       window.location.hash = '';
    });

    it('should pass', function() {
        expect(model).toBeDefined();
    });

    it('can add route', function() {

        var cb = function() {
            console.log(hello);
        };

        model.addPattern('hello', cb);

        expect(model.patterns['/hello']).toBeDefined();
        expect(model.patterns['hello']).toBeUndefined();


        model.removePattern('hello');
        expect(model.patterns['hello']).toBeUndefined();
        expect(model.patterns['/hello']).toBeUndefined();
    });

    it('calls appropriate callback on hashchange', function() {

        var cb = jasmine.createSpy('fake callback');
        var pattern = '/hello/world';
        model.addPattern(pattern, cb);
        expect(cb).not.toHaveBeenCalled();

        window.location.hash = '#/hello/world';
        expect(cb).toHaveBeenCalled();

    });

    it('calls approoriate callback and transfer object', function() {

    });

});
