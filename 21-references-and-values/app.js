/*---------------------------------------------------------------------------------------------------------------------------
* SUMMARY *
This module is a JavaScript Aside that covers 'passing by reference' and 'passing by value'

* TERMS *
? Primitive
A type of data that represents a single value
This can be like a number or a string. In other words...NOT an object.
---------------------------------------------------------------------------------------------------------------------------*/

// pass by value
function change(b) {
  b = 2;
}
var a = 1;
change(a);
console.log(a);

// pass by reference
function changeObj(d) {
  d.prop1 = function() {};
  d.prop2 = {};
}
var c = {};
c.prop1 = {};
changeObj(c);
console.log(c);