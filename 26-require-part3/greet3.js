// This time we'll use an object constructor to pass our greeting
function Greetr() {
  this.greeting = 'Hello world!!!';
  this.greet = function() {
    console.log(this.greeting);
  };
}

// We replace module.exports with our own object constructor
module.exports = new Greetr();