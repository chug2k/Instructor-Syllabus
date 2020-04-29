// A function is a reusable set of instructions detailing how to do a task. We can use the instructions to build something over and over again, in the same way that one blueprint can be used many times to build many buildings.
// Variables are your friends! Avoid hard-coding data into your functions.

// ***Anatomy!******************************************************************
// declaration + info with return + call (invocation)
const myFunction = () => {
  //execute this code
  return
}
myFunction()

// console.log() vs. return

// ***Pseudocode!***************************************************************
// Write a function that gives the user a high five every time they click a button

// declare my function. does not require arguments
const highFive = () => {
  // add in a return value that says "High five!"
  return "High five!"
}
// call my function in a console.log()
console.log(highFive());



// ***Arguments!****************************************************************
// Many test cases
// Write a function that takes in a word and returns it in all caps
var sent1 = "i am screaming lol"
// declare a function called makeLouder that takes in a single argument
const makeLouder = (placeholder) => {
  // change the value of my argument to all capital letters
  // return the new word/s
  return placeholder.toUpperCase()
}
// call my function
console.log(makeLouder("whats that noise"));
console.log(makeLouder("hahahah"));

// ***Multiple Arguments!*******************************************************
// Write a function that takes in a number (age) and string (name), and returns the string "(name) is (age) years old!"

// declare a function called personInfo that takes in 2 arguments: 1 number and 1 string
// const personInfo = (age, name) => {
  if(age === 1) {
    // return a sentence that uses string interpolation to tell the user someones name and age
    return `${name} is 1 year old!`
  } else if(age > 1 || age === 0) {
    return `${name} is ${age} years old!`
  } else {
    return "error omg"
  }
}
// call that function and pass in information
console.log(personInfo(22, "Sheila"));
console.log(personInfo(3, "Lisa"));

// ***Functions with loops!*****************************************************
// The packaging system is running wild! The candy is lying loose all over in the warehouse, the soda is spilling everywhere, and bread is stuffed in a bottle. What is going on here? The candy should be in plastic, the bread should be in a bag, and the soda should be in a bottle. I want to order new inventory. How many bottles, plastic containers, and bags should I order?

var items = ["bread", "candy", "bread", "bread", "candy", "candy", "soda", "candy", "candy", "soda", "bread"]
// declare a function called orderPackaging that takes in an array as an argument
const orderPackaging = (arr) => {
  // create variables to tell me how many of each type of packaging i will need to order
  let plastic = 0
  let bottles = 0
  let bags = 0
  // loop through the array
  for(let i = 0; i < 4; i++) {
    // check what item im on in the array. depending on the item, i will increment the number above
    if(arr[i] === "bread") {
      bags += 1
    } else if(arr[i] === "candy") {
      plastic ++
    } else if(arr[i] === "soda") {
      bottles ++
    } else {
      return "error"
    }
  }
  // return a string that says "You need to order ....."
  return `You need to buy ${plastic} plastic containers, ${bottles} bottles, and ${bags} bags!`
}
// call my function and pass in the "items" array
console.log(orderPackaging(items));
