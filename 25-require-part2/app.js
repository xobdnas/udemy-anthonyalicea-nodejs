/*---------------------------------------------------------------------------------------------------------------------------
* SUMMARY *
This module is a JavaScript Aside that extends the previous discussion on Node's Require function

* CONCEPTS *
? How to add multiple module.export values using a single require() statement
Whenever you use the require() function you don't have to specify the file extension (e.g. require('app') will find 'app.js').
However, you can also use this to pass a folder that contains an index.js file to add multiple files simultaneously (e.g. require('./greet')).
You must use index.js if you are only going to specify the folder path (and not the filename), as this is how the require() function is configured.

---------------------------------------------------------------------------------------------------------------------------*/

// Initial require call
var greet = require('./greet');

// The return value is a single object with access to all of the objects we wanted to expose
greet.english();
greet.spanish();