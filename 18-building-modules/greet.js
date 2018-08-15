var greet = function() {
  console.log('hello');
};

module.exports = greet; // this adds the greet function to node's module.exports object -- this what makes it accessible across node apps.