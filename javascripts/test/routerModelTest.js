var Model = require('../modules/routerModel');

describe('router model test', function() {

    var model;
    beforeEach(function() {

        window.location.hash = '';

        model = new Model();
    });

    afterEach(function() {
        model = null;
       window.location.hash = '';
    });

    it('should pass', function() {
        expect(model).toBeDefined();
    });

    it('can add route', function() {

        var cb = function() {
            console.log(hello);
        };

        model.addPattern('hello', {open: cb, close: function() {}});

        expect(model.patterns['/hello']).toBeDefined();
        expect(model.patterns['hello']).toBeUndefined();


        model.removePattern('hello');
        expect(model.patterns['hello']).toBeUndefined();
        expect(model.patterns['/hello']).toBeUndefined();
    });


    it('calls appropriate open callback on hashchange', function(done) {

        var cb = jasmine.createSpyObj('cb', ['open', 'close']);
        var pattern = '/hello/world';
        model.addPattern(pattern, cb);
        expect(cb.open).not.toHaveBeenCalled();

        window.location.hash = '#/hello/world';

        process.nextTick(function() {
            expect(cb.open).toHaveBeenCalledWith({
                path: ['hello', 'world'],
                query: null,
                params: {}
            });

            expect(cb.close).not.toHaveBeenCalled();
            done();
        });
    });

    it('calls appropriate close callback on hashchange', function(done) {

        var cb = jasmine.createSpyObj('cb', ['open', 'close']);
        var pattern = '/hello/world';
        model.addPattern(pattern, cb);
        expect(cb.open).not.toHaveBeenCalled();

        window.location.hash = '#/hello/world';


        window.setTimeout(function() {
            window.location.hash = '/bb';
        });

        process.nextTick(function() {
            expect(cb.open.calls.count()).toEqual(1);
            expect(cb.close).toHaveBeenCalled();
            done();
        });
    });

});
