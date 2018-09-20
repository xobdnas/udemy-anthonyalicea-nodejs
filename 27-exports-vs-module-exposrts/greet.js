// Originally, exports and module.exports referenced the same value via pass-by-reference -- however, by ecplicitly assigning a value to exports it no longer points to the same memory location, and is now different than module.exports
exports = function() {
  console.log('Hello');
};

// returns '[Function: exports]' -- now a different value with the name of 'exports', and no longer associated with module.exports
console.log(exports);

// Returns an empty object
console.log(module.exports);