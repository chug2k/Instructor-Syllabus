// White Board Exercises: JavaScript

// PROMPT: Write a function that turns a multi digit number into an array with each integer at one index of the array

// 34832 --> ["3", "4", "8", "3", "2"]

// Stretch option: multiply all the numbers by 2 and turn it back into a number
// ["3", "4", "8", "3", "2"] -> 681664


// Tech question: What is difference between value and index in an array?
// PROMPT: As a developer, you are given an array of mixed data. Create a function that takes the array and the name of a data type and returns an array with only the the values that match the given data type.

let testArray = [3, 4, 5, true, false, true, "hello", "hey", "yo"]

const filterArray = (array, datatype) => {
  // logic
}
console.log(filterArray(testArray, "string"))
// Output: ["hello", "hey", "yo"]

// Tech question: What is a higher order function?
// PROMPT: As a developer, you are given an array of english words. Create a function that returns an array with all the words in uppercase letters.

let arrayOfWOrds = ["i", "am", "so", "excited"]

const makeEmCaps = (array) => {
  // logic
}
