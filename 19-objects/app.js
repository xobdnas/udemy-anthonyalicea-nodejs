var person = { 
  // object properties
  firstname: 'John',
  lastname: 'Doe',

  // object primitives
  age: 28,

  // object functions
  greet: function() {
    console.log(`Hello ${this.firstname} ${this.lastname}. You are ${this.age} years old today.`);
  }
};

person.greet();

// this is an alternate way of referencing an object property -- it can be useful if you want to call the object property by passing a string (e.g. a keyword query)
console.log(person['firstname']);