var Model = require('./modules/componentRouterModel');

$(function() {

    var model = new Model();
    var mock =  {

        willOpen: function() {
            console.log('will open');
        },

        open: function() {
            console.log('open')
        },

        didOpen: function() {
            console.log('did open');
        }

    };
    model.addPattern('/hello/:param/*', mock);
});
