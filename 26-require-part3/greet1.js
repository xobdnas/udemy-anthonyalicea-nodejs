// module.exports is an empty OBJECT by default -- overwriting .exports with a function() is our first Node pattern
module.exports = function() {
  console.log('Hello world!');
};