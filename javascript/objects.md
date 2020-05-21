# JavaScript Objects

[![YouTube](http://img.youtube.com/vi/xDmsrXDweB8/0.jpg)](https://www.youtube.com/watch?v=xDmsrXDweB8)

## Overview
- Objects are variables that contain a collection of key:value pairs
- Objects are the cross section of data and behavior (methods)

## Learning Objectives
- Understanding the anatomy of an object
- Accessing the values from objects using the keys
- Creating methods that return information from the object

## Vocabulary
- JSON
- key: value pairs
- methods
- dot notation
- this
- destructuring


## Concepts to Cover
- object anatomy
- keys/values - values can be anything
- symbol vs string as keys
- multiple key/values in an object
- accessing values with dot notation
- adding methods to objects
- nested objects
- destructuring
- objects in an array
- iterating over arrays of objects


## Lecture
Objects are another JS data type that describe a collection of data

Technically arrays are actually also objects

Run this in the browser console:
typeof [1, 2, 3, 4]
// returns object

The structure of an object is a collection of key: value pairs wrapped in curly braces

The keys can be created two different ways: as strings or as symbols

Strings are a more old school way of declaring variables, the newer cool way is to create a symbol
// {key: "value"}
// {"key": "value"}

Values can be anything as long as it is a data type that JavaScript recognizes - including arrays and other objects

Objects can have as many key:values pairs as necessary, key:values are separated by commas

// {key1: "value1", key2: "value2", key3: "value3"}

Objects can be saved as variables
// let myObject = {"key1": "value1", key2: "value2", key3: "value3"}

Objects that are more than a couple items long should be dropped onto new lines

// let myObject = {
//   key1: "value1",
//   key2: "value2",
//   key3: "value3"
// }

This syntax is called JSON - JavaScript Object Notation

We can log the variable and receive the full object

But just like arrays, we probably want to be able to access certain information from within the object.

Where in arrays we access an item by referencing the index, in objects we retrieve the values by referencing the keys


To do this we use dot notation
We can call the key to retrieve the value

To get the value, console.log() the name of the object and with dot notation reference the key of the value you want to retrieve

//console.log(myObject.key1)
//console.log(myObject.key2)

Destructuring
There is a shortcut to using dot notation that is very common as we get into more complex objects. It is called destructuring.

It allows us to save a object name and key set as a variable - a specific variable - a variable with the same name as a key

// var breakfast = {
  item1: "eggs",
  item2: "bacon",
  item3: "toast",
  item4: {
    fruit1: "banana",
    fruit2: "blueberry",
    fruit3: "strawberry"
  }
}

// console.log(breakfast.item4.fruit1)
// console.log(fruit1) - will get an error

Then show:
// let { fruit1 } = breakfast.item4
// console.log(fruit1)

// let { fruit1, fruit2, fruit3 } = breakfast.item4
// console.log(fruit1)
// console.log(fruit2)
// console.log(fruit3)


Objects can contain static information but they also can contain functions which make objects the intersection of data and behavior

Objects are the intersection of data and behavior - and behavior is functions

When a function belongs to an object it is called a method
We have seen methods already - .toUpperCase() is a method, .slice() is a method


We can write custom methods within our objects
Those methods often need to access the other data elements within the object

So outside of the method, we get can get a value by referencing the object's name and the key

We need to use dot notation to access the values, but when we are still within the object, we have to reference the object in a different way - we can use 'this'. Yes, 'this'. And no I'm not referring to the pronoun. This is a keyword in JavaScript.

Now 'this' is a weird thing to talk about because this topic is confusing when talking about 'this' within the context of a sentence like this. So I am going to write this keyword, this on a postit. I will hold this up when I am talking about 'this' and not just using this in my regular speech.



// var friends = {
  friend1: "Monica",
  friend2: "Chandler",
  friend3: "Ross",
  bio: function(){
    return `Our friends are ${this.friend1}, ${this.friend2}, ${this.friend3}.`
  }
}
// console.log(friends.bio())




Another way that we can interact with objects is through an array. Now each object represents one place, one index in the array.

Write it long like this, then drop it down to show line breaks
var cashMoney = [{worth: 1, president: "Geroge"}, {worth: 5, president: "Lincoln"}, {worth: 10, president: "Hamilton"}, {worth: 20, president: "Jackson"}]

Prompt: Create a function that returns the president and whether the worth is even or odd

map is a JS method just like any other, it is chained to the end of the element it is acting on, and it take an argument - the thing is that it takes as an argument is another function - so when we are talking about a whole other function, we need an argument that is passed in and a return that holds the output

// const oddPres = (array) => {
//   array.map(value => {
//     console.log(value)
//   })
// }
// console.log(oddPres(cashMoney))

Value is the same thing as looping through an array and logging array[i] - because array[i] is really just the value

Prompt: Create a function that returns the president and whether the worth is even or odd

Have the full array, but have to make an evaluation about the worth

map - array that is returned is the same length, filter, array is shorter
// const oddPres = (array) => {
//   array.map(value => {
//     if(value.worth % 2 === 0){
//       console.log("even", value.worth)
//     } else if (value.worth % 2 !== 0){
//       console.log("odd", value.worth)
//     }
//   })
// }
// console.log(oddPres(cashMoney))

Now we need to return stuff

// const oddPres = (array) => {
  let pres = array.map(value => { // return this first - save it to a variable second
    if(value.worth % 2 === 0){
      return `${value.president} is even.`
    } else if (value.worth % 2 !== 0){
      return `${value.president} is odd.`
    }
  })
  Add this later - first without quotes, then add a space:
  return pres.join(" ")
}
console.log(oddPres(cashMoney))

This returns an array of items. Map always returns an array. If you don't want an array, we can manipulate that by saving it to a variable.


The fundamentals of programming are all about manipulating data. Can you as a developer change data types and call methods and mash and smash until you get the expected outcome? Sometimes these challenges are silly or a bit contrived, but they represent an important piece of understanding: can you transform what you are given into what you want.






## Buildout of Challenges

// Consider this variable:
var person = {
  firstName: "Arthur",
  lastName: "Dent"
}

// Write the code that accesses the first name of the person object.
console.log(person.firstName)

// Write the code that accesses the last name of the person object.
console.log(person.lastName)

// Write the code that gives the person object a property of homePlanet and set it to 'Earth'.

person.homePlanet = "Earth"
console.log(person)

// Update the person object with a method that logs "Arthur Dent is from planet Earth".

person.bio = function() {
    return `${this.firstName} ${this.lastName} is from planet ${this.homePlanet}.`
  }
console.log(person.bio())

// Consider this variable:
var product = {
  name: "chair", price: 14.99
}

// Write a function called describeProduct takes product as an argument and logs "The product is a chair. It costs $14.99".

const describeProduct = (object) => {
  return `The product is a ${object.name}. It costs $${object.price}.`
}
console.log(describeProduct(product))

// Consider this variable:
var lunch = {
  name: "PB and Banana",
  type: "sandwich",
  ingredients: ["bread", "peanut butter", "banana"]
}

// Write the code that accesses the ingredients property.

console.log(lunch.ingredients)

// Write the code that access the 3rd ingredient of the lunch object.

console.log(lunch.ingredients[2])

// Write a function that takes the lunch object as an argument and returns "The ingredients for a PB and Banana sandwich are bread, peanut butter, and banana."
// add this to the object:
console.log(`The ingredients for a ${lunch.name} ${lunch.type} are ${lunch.ingredients.map(value=>value)}.`)

getLunchStuff = (object) => {
  return `The ingredients for a ${object.name} ${object.type} are ${object.ingredients.map(value=>value)}.`
}
console.log(getLunchStuff(lunch))

// Update the lunch object with method that returns "The ingredients for a PB and Banana sandwich are bread, peanut butter, and banana."
console.log(lunch.getInfo())

// Consider this variable:
var animals = [
  { name: "Waffles", type: "dog", age: 12 },
  { name: "Fluffy", type: "cat", age: 14 },
  { name: "Spelunky", type: "dog", age: 4 },
  { name: "Hank", type: "cat", age: 11 },
]

// Create a function that takes in any array of objects and returns a new array with only those of type cat.

const catsOnly = (array) => {
  return array.filter(value => value.type === "cat")
}
console.log(catsOnly(animals))

// Using the same array of objects above. Create a function that returns a new array with only the names of the animals.

const getNames = (array) => {
  return array.map(value => value.name)
}
console.log(getNames(animals))

// Consider this variable:
let author = {
    name: "H. G. Wells",
    genre: "science fiction"
}

// Write the code that destructures the author object and makes the following work:

let { name, genre } = author
console.log(`${name} is a ${genre} author`)
// --> "H. G. Wells is a science fiction author"

// Consider this variable:
let pokeOne = {
    species: "Charmandar",
    pokemon_type: "Fire"
}
let pokeTwo = {
    species: "Magikarp",
     pokemon_type: "Water"
}

// Write a function called describePokemon() that take an object like the ones above and uses destructuring to return a description of the Pokemon such that:

const describePokemon = (object) => {
  let { species, pokemon_type } = object
  return `${species} is a ${pokemon_type} pokemon`
}
console.log(describePokemon(pokeOne))
// --> "Charmandar is a Fire pokemon"
console.log(describePokemon(pokeTwo))
// --> "Magikarp is a Water pokemon"
