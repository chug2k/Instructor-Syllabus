// An array type is a data type that represents a collection of elements
// Arrays can house a single data type
var numbers = [1, 2, 3, 4]

// Or they can hold multiple data types
var numbersAndNames = ["Sarah", 3, "6", "Pepsi", 77]

// To access elements in an array...
var years = [1990, 1991, 1992, 1993, 1994, 1995]

// To change elements in an array...
var favColors = ["purple", "blue", "green", "orange"]

favColors[0] = 2

// ***Built-in methods!*********************************************************
// .length

// ***Mutators!*****************************************************************

var animals = ["dog", "cat", "fish", "bird", "fish", "fish"]
// .push()
// adds to the end of the array
// animals.push("bird")
// .pop()
// takes from the end of the array
// animals.pop()
// .shift()
// removes first element of array
// animals.shift()

// .unshift()
// places an item at the beginning
// animals.unshift("dragon")

// .reverse()
// animals.reverse()


// ***Accessors!****************************************************************

var words1 = ["Hello", "there", "bravo!"]
var words2 = ["How", "are", "you?"]
var words3 = ["I'm", "great!"]
// .concat()

var combined = words1.concat(words2).concat(words3)
// console.log(combined);

// .join("")
// console.log(combined.join(" "));

// .indexOf()

// .lastIndexOf()
// console.log(animals.lastIndexOf("fish"));
var lastFish = animals.lastIndexOf("fish")
animals[lastFish] = "goldfish"
// console.log(animals);

// ***Destructuring!************************************************************
var [firstName, lastName] = ["Jennifer", "Lopez"]

console.log(firstName);
console.log(lastName);
