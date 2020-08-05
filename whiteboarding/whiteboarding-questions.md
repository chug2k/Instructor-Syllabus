# White Board Exercises

We introduce white boarding during the second week of the class.

- [ Intro to White Boarding ](./intro-to-whiteboarding.md#white-boarding)
- [ Week 2: JavaScript ](#week-2-intro-to-javascript)
- [ Week 3: JavaScript and React ](#week-3-javascript-and-react)
- [ Week 4: Ruby ](#week-4-ruby)
- [ Week 5: SQL and Rails ](#week-5-sql-and-rails)
- [ Great Resource ](https://www.interviewcake.com/coding-interview-tips) for technical interviews

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
