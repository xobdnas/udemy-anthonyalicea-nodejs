/*---------------------------------------------------------------------------------------------------------------------------
* SUMMARY *
This module explores the differences between 'exports' and 'module.exports'

* TERMS *
? Mutate
To change something.
For example, adding a method or property to an object means you've mutated the object.

* SUMMARY *
Just use module.exports -- since exports is just a shorthand of module.exports and using exports causes more problems than benefits...just ignore it. Pretend it doesn't exist. :)

---------------------------------------------------------------------------------------------------------------------------*/

// * Whenever our code is run thruogh Node it is wrapped in the following function expression:
// (function (exports, require, module, __filename, __dirname) {
//   var greet = function() {
//     console.log('hello!');
//   }
//   module.exports = greet;
// });

// * The first function parameter above is 'exports', which is a shorthand to 'module.exports' -- two variables pointing at the same object
// fn(module.exports, require, module, filename, dirname);

// Since require() returns module.exports, what we've done is expose a quirk with JavaScript, since 
var greet = require('./greet');

var greet2 = require('./greet2');