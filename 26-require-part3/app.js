/*---------------------------------------------------------------------------------------------------------------------------
* SUMMARY *
This module is a JavaScript Aside that extends the previous discussion on Node's Require function

* CONCEPTS *
? Node Patterns -- Best practices for using module.exports and require()

? Revealing Module Pattern
Exposes only the properties and methods you want via a returned object (example greet5.js)
This is very common and a clean way to structure and protect code within modules

---------------------------------------------------------------------------------------------------------------------------*/

// This sets a variable to the results of the require() function -- which will retrieve the results from module.exports from that file location 
var greet = require('./greet1');
greet();

// If you want to call a specific property or method attached to module.exports, then you can specify this by appending it to the end of the require() statement -- this is a best practice
var greet2 = require('./greet2').greet;
greet2();

// We call module.exports using require() from the file location, which returns the 'greet3' object -- now simply append the .greet() method to the 'greet3' object to load the greeting.
var greet3 = require('./greet3');
greet3.greet();
greet3.greeting = 'Changed hello world!';

// If we call the same file over again, it will load the SAME object as 'greet3' -- this is because module.exports uses 'cachedModule.exports' for each filename -- so they both point to the same object -- this turns out to be highly efficient and highly useful.
var greet3b = require('./greet3');
greet3b.greet();

// In this example we're creating the new objects ourselves, and we can keep creating new 'grtr' objects because they won't conflict like above. This is because we're using the object constructor functino directly vs. calling module.exports directly.
// var Greet4 = require('./greet4');
// var grtr = new Greet4();
// grtr.greet();

// This is a Revaeling Module Pattern example
var greet5 = require('./greet5').greet;
greet5();