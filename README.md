### Usage
``` javascript

var RouterClass = require('hs-routes');

var router = new RouterClass.Router();

var config = {
    open(match) {
        //do something on route match
    }
    
    close(match) {
        //do something on route unmatch
    }
}

router.addPattern('/some/path/:id', config)