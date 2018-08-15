/*---------------------------------------------------------------------------------------------------------------------------
* SUMMARY *
This module covers protypal inheritance and function constructors

* TERMS *
? Inheritance
One object gets access to the properties and methods of another object

? Function Constructors
A normal function that is used to construct objects.
The "this" variable poitns a new empty object, and that object is returend from the function automatically
We use a 'Capital' letter (Pascal Case) to indicate that the function is a constructor.
---------------------------------------------------------------------------------------------------------------------------*/

// Object Constructor
function Person(firstname, lastname) {
  this.firstname = firstname;
  this.lastname = lastname;
}

// The 'Person.prototype' assigns the greet() function to the prototype of any objects created under "Person" constructor
Person.prototype.greet = function() {
  console.log (`Hello ${this.firstname} ${this.lastname}`);
};

// Create some objects
var john = new Person('John', 'Doe');
var jane = new Person('Jane', 'Doe');

// calls the greet() function via the prototype for each object
john.greet();
jane.greet();