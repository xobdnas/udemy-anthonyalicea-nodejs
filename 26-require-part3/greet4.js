// The same object constructor as in greet3.js
function Greetr() {
  this.greeting = 'Hello world!!!!';
  this.greet = function() {
    console.log(this.greeting);
  };
}

// We replace module.exports with our own object constructor
module.exports = Greetr();