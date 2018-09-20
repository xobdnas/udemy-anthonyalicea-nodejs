var greeting = 'Hello world!!!!!';

// This function centralizes the code created in this 
function greet() {
  console.log(greeting);
}

// This pattern gives module.exports access ONLY to the greet() function, and prevents it from accessing anything else. In other words...it will not have access to the 'greeting' variable or any other code outside of greet(). This is very useful in protecting your code from accidental manipulation.
// This is known as the 'Revealing Module Pattern'
module.exports = {
  greet: greet
}