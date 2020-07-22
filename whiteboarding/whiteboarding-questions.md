# White Board Exercises

We introduce white boarding during the second week of the class.

### Week 2: Intro to JavaScript

**Student 1**  
TECH QUESTION: What is difference between value and index in an array? (Optional stretch: What is iteration?)

CODE PROMPT: As a developer, you are given an array of mixed data. Create a function that takes the array and the name of a data type and returns an array with only the the values that match the given data type.

Instructor's Notes:
```javascript
let testArray = [3, 4, 5, true, false, true, "hello", "hey", "yo"]

const filterArray = (array, datatype) => {
  // can use filter and typeof
}
console.log(filterArray(testArray, "string"))
// Output: ["hello", "hey", "yo"]
```

**Student 2:**  
TECH QUESTION: What is a higher order function? (Optional stretch: Can you give me three examples of higher order functions?)

CODE PROMPT: As a developer, you are given an array of english words. Create a function that returns an array with all the words in uppercase letters.

Instructor's Notes:
```javascript
let arrayOfWOrds = ["i", "am", "so", "excited"]

const makeEmCaps = (array) => {
  // can use map and .toUpperCase
}
console.log(makeEmCaps(arrayOfWOrds))
// Output: ["I", "AM", "SO", "EXCITED"]
```

### Week 3: JavaScript and React

**Student 1:**  
TECH QUESTION: What is git? (Optional stretch: What is the difference between git and GitHub?)

PROMPT: You've got 5 chickens (2 legs), 6 cows (4 legs) and 3 pigs (4 legs) on your farm. Create a function that returns the total number of legs on your farm.

Instructor's Notes:
```javascript
legChecker = (chicks, cows, pigs) => chicks*2 + cows*4 + pigs*4
// Most people will overthink this one!
console.log(legChecker(5, 6, 3))
```

**Student 2:**  
TECH QUESTION: What is yarn? (Optional stretch: What file will always be updated when you run yarn?)

PROMPT: A group of friends have decided to start a secret society. The name will be the first letter of each of their names, sorted in alphabetical order. Create a function that takes in an array of names and returns the name of the secret society. (Optional stretch: The secret society's name should be entirely uppercased.)

Instructor's Notes:
```javascript
secretSociety = (array) => {
  // can pass an array or individual names
  // can use substring, charAt, [0], etc
  // note that .sort() will treat lower and uppercase letters differently
}
console.log(secretSociety(["rachael", "sarah", "andee"]))
--> "ars"
--> "ARS" (stretch)
```
### Week 4: Ruby

**Student 1:**  
TECH QUESTION: Compare and contrast equality operators in JavaScript and Ruby. (Optional stretch: Do all dynamically-typed languages support type coersion?)

PROMPT: As a developer, you are given a string containing multiple words. Create a function that capitalizes all the words in the string. (Can be done in JS or Ruby)

Instructor's Notes:
```javascript
const capitalizer = (string) => {
  // split string, map
  // get first value with charAt or [0] and apply toUpperCase
  // add the rest of the word with substring or splice
  // join
}
console.log(capitalizer("hey there learn student"))
--> 'Hey There Learn Student'
```
```ruby
def capitalizer string
  # split, map
  # capitalize method
  # join
end
puts capitalizer 'hey there learn student'
--> 'Hey There Learn Student'
```

**Student 2:**  
TECH QUESTION: Compare and contrast floats in JavaScript and Ruby. (Optional stretch: What do you get when you divide 0/0 in each language?)

PROMPT: As a developer, you are given a multi digit number. Write a function that takes the single number and returns an array with a single integer at each index. (Can be done in JavaScript or Ruby)

Instructor's Notes:
```javascript
console.log(0/0)
--> NaN

// the main challenge is tracking data types and knowing which methods can be applied to which data types
const splitNum = (number) => {
  return number.toString().split("").map(value => {
    return parseInt(value)
  })
}


--> [3, 4, 8, 3, 2]
```
```ruby
p 0/0
--> ZeroDivisionError
p 0.0/0
--> NaN

def split_nums number
  num.to_s.split("").map do |value|
    value.to_i
  end
end
puts split_nums 34567
--> [3, 4, 5, 6, 7]
```











### SQL
If I need a database table for hotel reservations, write out a schema that would give me all the info I need. (Can be open to interpretation - just an exercise in thinking through a problem.)

From that schema, (instructors note: make sure they have num of guests, total cost) write a SQL query that will return cost of the stay per person. List the top 10 most expensive stays/person.


SELECT cost, num_of_guests, cost/num_of_guests AS cost_per_person FROM reservation ORDER BY cost_per_person DESC LIMIT 10 (This could be slightly off, but it is the general idea)
