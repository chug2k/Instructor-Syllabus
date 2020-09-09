# White Board Exercises

We introduce white boarding during the second week of the class.

- [ Intro to White Boarding ](./intro-to-whiteboarding.md#white-boarding)
- [ Week 2: JavaScript ](#week-2-intro-to-javascript)
- [ Week 3: JavaScript and React ](#week-3-javascript-and-react)
- [ Week 4: Ruby ](#week-4-ruby)
- [ Week 5: SQL and Rails ](#week-5-sql-and-rails)
- [ Week 6: Full-stack Rails ](#week-6-full-stack-rails)
- [ Week 7: PD Week Technical Interviews ](./pd-week-tech-interviews/.d#pd-week-technical-interviews)
- [ Great Resource ](https://www.interviewcake.com/coding-interview-tips) for technical interviews

### Week 2: Intro to JavaScript

**Student 1**  
TECH QUESTION: 
1) What excites you about coding?
2) What is the difference between an array's value and index? As a developer, why is it important to distinguish between the two?
2) What is iteration?

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
TECH QUESTION: 
1) What drew you to learn development?
2) What is a higher-order function? Can you give me three examples of higher-order functions?
3) How is a higher-order function different from an arrow function?

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

### Week 5: SQL and Rails

**Student 1:**  
TECH QUESTION: What is an aggregate function in SQL? (Optional stretch: What are some examples of aggregate functions and why would you use one?)

PROMPT:  
(Part 1) As a client, I need a database to keep track of the giant cookies I sell online. As a developer creating the database, what columns will you include in the cookie table? (Open to interpretation - just an exercise in thinking through a problem.)

(Part 2) Write a SQL query that will return the type and price of the most expensive cookie in the database.

Instructor's Notes:  
Aggregate functions - SUM, COUNT, MAX, MIN, AVG  
Possible columns include type of cookie, price, size, cost of materials, calories, delivery date, delivery location, special instructions... The goal is to get them asking questions and doing some creative thinking.
```sql
SELECT type of cookie, price
FROM cookie
ORDER BY price DESC
LIMIT 1
```

**Student 2:**  
TECH QUESTION: What is a schema? (Optional stretch: How do you update a schema in Rails?)

PROMPT:  
(Part 1) As I client, I work in the mail room of an office building. I need an app that helps me notify individual offices when they receive mail. As a developer making the Rails application, what would the schema of my Mail table look like? (Open to interpretation - just an exercise in thinking through a problem. Optional stretch: What data type would each column have?)

(Part 2) Write an Active Record statement to be executed in the Rails console that will update the office suite/number of one instance in the Mail table.

Instructor's Notes:   
Possible columns include office suite/number, addressee, type of mail (letter vs package), date arrived, office contact information, did the mail need to be signed for... The goal is to get them asking questions and doing some creative thinking.

```ruby
letter = Mail.find <id>
letter.office_suite = "12C"
letter.save
```

### Week 6: Full-stack Rails

**Student 1:**  
TECH QUESTION: What is the difference between false and nil in Ruby? (Optional stretch: How is a symbol different from a variable?)

PROMPT: Create a Ruby class for a person that initializes with a name and a height. Create a getter method that returns a sentence containing the person's information.

Instructor's Notes:
False indicates a Boolean datatype, while Nil is not a data type and equal to nothing else. In Ruby string is mutable but a Symbol is immutable.

**Student 2:**  
TECH QUESTION: What does it mean when we talk about Rails "magic"? (Optional stretch: What are some examples you have used in your projects?)

PROMPT: Create a function that takes in an array of numbers and returns the largest number.


### Week 8: Cat Tinder

**Student 1:**  
TECH QUESTION:
1) Tell me about a project you are working on.
2) What makes you a good teammate?
3) What does the term asynchronous mean in programming? (Optional stretch: What is a Promise? What are the possible states of a Promise?)


PROMPT: What is this code doing?
```javascript
markTask = (e) => {
    let task = this.state.batch.tasks.find(v => v.id === e.target.id)
    markTaskDone(task)
    this.props.completeTask(task)
}
```


Instructor's Notes: The markTask function is finding one task from the state object by an id that is coming from an input of some kind, then passing task to a local method and a method in the parent component.   

**Student 2:**  
TECH QUESTION:
1) What excites you about programming?
2) What are you good at?
3) What is a recursive function? (Optional stretch: How would you avoid an infinite loop in a recursive function?)

PROMPT: What is this code doing?
```javascript
cards = (array) => {
  array.sort(() => Math.random() - 0.5)
  this.setState({ flashcards: array })
}
```

Instructor's Notes: The cards function is shuffling an array based on the random number being positive or negative



### Week 9: Apartment App

**Student 1:**  
TECH QUESTION:
1) What tools and techniques do you use when debugging JavaScript code?
2) What is the difference between a function utilizing the fat arrow and using the JavaScript keyword function?
3) What is “hoisting” in JavaScript?

PROMPT: Write a function that takes in a string as an argument and checks if it’s a palindrome.

Instructor's Notes:
```javascript
const palindrome = (str) => {
 str = str.toLowerCase()
 if(str === str.split('').reverse().join('')){
  return `${str} is a palindrome!`
 } else {
  return `${str} is NOT a palindrome! `
 }
}
```

**Student 2:**  
TECH QUESTION:
1) What’s the difference between a variable that is: null, undefined or undeclared in JavaScript?
2) What does CORS stand for and what issue does it address?
3) What are Promises in JavaScript?

PROMPT: Write a function that takes a string as an argument and returns the number of vowels contained within that string.

Instructor's Notes:
```javascript
const vowelCount = (str) => {
let count = 0
const vowels = ['a', 'e', 'i', 'o', 'u']
for(let char of str.toLowerCase()) {
	if(vowels.includes(char) {
	count++
		}
	}
return count
}
```
