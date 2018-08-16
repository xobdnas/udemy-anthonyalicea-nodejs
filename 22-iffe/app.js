/*---------------------------------------------------------------------------------------------------------------------------
* SUMMARY *
This module is a JavaScript Aside that covers Immediately Invoked Functions (or IFFEs)

* TERMS *
? Scope
Where in code you have access to a particular variable or function

? Immediately Invoked Function
An Immedaitely Invoked Function (or IFFE) is a function that acts like an expression by immediately running after it parses.
It basically tells the JavaScript engine that this code is to run like an 'expression' and not like a regular function statement.
IFFEs are also used to protect variables from scope related issues, and was how developers created their own modules for the longest time.
---------------------------------------------------------------------------------------------------------------------------*/

// This is the most common way to write an IFFE
(function () {
  var firstname = 'John';
  console.log(firstname);
}());

// IFFEs enforce scope protection. This variable is outside of the IFFE scope, and doesn't get affected.
var firstname = 'Jane';
console.log(firstname);