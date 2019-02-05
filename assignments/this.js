/* The for principles of "this";
* in your own words. explain the four principle for the "this" keyword below.
*
* 1. Window/Global Object Binding
* 2. Implicit Binding
* 3. New binding
* 4. Explicit binding
*
* write out a code example of each explanation above
*/

// Principle 1

// code example for Window Binding

const polarBear = {
    name: 'Chuck',
    food: 'fish',
    cook: function() {
      
     console.log(`${name} loves to eat ${food}`) 
    }
  }
  
   polarBear.cook();

//Principle 2

//code example for Implicit Binding

 const polarBear = {
    name: 'Chuck',
    food: 'fish',
    cook: function() {
     console.log(`${this.name} loves to eat ${this.food}`) 
    }
  }
  
   polarBear.cook();  

//Principle 3

//code example for New Binding

function GrizzlyBear(name, age) {
  
    this.name = name
    this.age = age
  }
  
  const friend = new GrizzlyBear('Bubba', 67);
  console.log(friend);

//Principle 4


//code example for Explicit Binding

const skills = ["igloo\'s'", "drink martini\'s'", "sleep"];

function greet (skills1, skills2, skills3) {
     console.log(`Hello Grizzly Bear my name is ${this.name} and I love to eat ${this.food} and make ${skills1}, ${skills2} and ${skills3}.`) 
    };

 const polarBear = {
    name: 'Chuck',
    food: 'fish' 
};
  
  
  greet.call(polarBear, skills); // .call does not separate the commas either
  greet.apply(polarBear, skills);