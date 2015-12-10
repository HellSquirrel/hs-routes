import Model from '../storages/routerModel';

describe('router model test', function() {

    beforeEach(function() {

        window.location.hash = '';

    });

    afterEach(function() {
       window.location.hash = '';
    });

    it('should pass', function() {
        var model = new Model();
        expect(model).toBeDefined();
    });

    it('can add route', function() {
        var model = new Model();

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

    it('raise error when try to add invalid matcher', function() {

        var cb = {};
        var model = new Model();

        expect(model.addPattern.bind(null, '/hello', cb)).toThrowError();

        cb = {open: function() {}};
        expect(model.addPattern.bind(null, '/hello', cb)).toThrowError();

        cb = {close: function() {}};
        expect(model.addPattern.bind(null, '/hello', cb)).toThrowError();

        cb = {close : 'hello', open: function() {}};
        expect(model.addPattern.bind(null, '/hello', cb)).toThrowError();

        cb = {open: 'hello', close: function() {}};
        expect(model.addPattern.bind(null, '/hello', cb)).toThrowError();

    });

    it('can process route that changed before creating router instance', function() {

        window.location.hash = '/hello';
        var model = new Model();
        var matcher = jasmine.createSpyObj('matcher', ['open', 'close']);
        model.addPattern('/hello', matcher);

        expect(matcher.open).toHaveBeenCalled();
        expect(matcher.open.calls.count()).toEqual(1);
    });

    it('calls appropriate open callback on hashchange', function(done) {
        var model = new Model();

        var cb = jasmine.createSpyObj('cb', ['open', 'close']);
        var pattern = '/hello1/world';
        model.addPattern(pattern, cb);
        expect(cb.open).not.toHaveBeenCalled();

        window.location.hash = '#/hello1/world';

        process.nextTick(function() {
            expect(cb.open).toHaveBeenCalledWith({
                path: ['hello1', 'world'],
                query: null,
                params: {}
            });

            expect(cb.close).not.toHaveBeenCalled();
            done();
        });
    });

    it('calls appropriate close callback on hashchange', function(done) {
        var model = new Model();


        var cb = {

            open: function() {
            },
            close: function() {
            }
        };
        var open = spyOn(cb, 'open').and.callThrough();
        var close = spyOn(cb, 'close').and.callThrough();


        var pattern = '/hello2/world';
        model.addPattern(pattern, cb);
        expect(open).not.toHaveBeenCalled();

        window.location.hash = '#/hello2/world';

        window.setTimeout(function() {
            expect(cb.open).toHaveBeenCalled();
        }, 500);


        window.setTimeout(function() {
            window.location.hash = '/bb';
        }, 500);


        window.setTimeout(function() {
            expect(cb.open.calls.count()).toEqual(1);
            expect(cb.close).toHaveBeenCalled();
            done();

        }, 1500);
    });
});
