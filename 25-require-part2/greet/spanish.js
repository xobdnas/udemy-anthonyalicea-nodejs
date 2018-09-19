// Retrieve the JSON values
var greetings = require('./greetings.json');

// Capture the correct greeting from JSON
var greet = function() {
  console.log(greetings.es);
};

// Set the module.exports value to the value of the greet function -- which is 'hola'
module.exports = greet;