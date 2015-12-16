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

//utils
import {utils} from 'hs-router'
    utils.serialize({foo: 'bar'}) - serialize string to query
    utils.deserialize(stirng) - deserialize querystring to object

//parser
import { Parser } from 'hs-router'
 var match = Parser.parse(path)
  
 match is object with params (path, query - object etc...)

