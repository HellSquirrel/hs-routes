var ComponentRouterModel = require('../modules/componentRouterModel');

describe('component router model tests', function() {

    var model;

    beforeEach(function() {
        window.location.hash = '';
        model = new ComponentRouterModel();
    });

    afterEach(function() {
        model = null;
        window.location.hash = '';
    });

    it('should create component router model', function() {
        expect(model).toBeDefined();
    });


    it('call appropriate methods on route match', function(done) {

        var calls = [];
        var mock =  {

            willOpen: function() {
                calls.push('willOpen')
            },

            open: function() {
                calls.push('open');
            },

            didOpen: function() {
                calls.push('didOpen');
            }

        };
        model.registerView('/hello', mock);

        window.location.hash = '/hello';

        window.setTimeout(function() {
            expect(calls).toEqual(['willOpen', 'open', 'didOpen']);
            done();
        }, 150);
    })
});
