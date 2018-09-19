// Stores the returned value from each individual file
var english = require('./english.js');
var spanish = require('./spanish.js');

// Returns an object with all of the values we wanted to expose to the app.js
module.exports = {
  english: english,
  spanish: spanish
};