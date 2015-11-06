### Usage
``` javascript

var RouterClass = require('hs-routes');

var router = new RouterClass.Router();

router.addPattern('/some/path/:id', function() {

    //do something on route match
})