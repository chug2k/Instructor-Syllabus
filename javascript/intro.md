# Intro to JavaScript and Conditionals


## Intro

## Overview (from syllabus)
- JavaScript is a versatile and powerful scripting language used to make a webpage dynamic

## Learning Objectives (from syllabus)
- Interacting with JavaScript's primitive data types
- Exploring built-in methods
- Exploring type coercion in JavaScript

## Vocabulary (from syllabus)
- data types
- concatenation
- type coercion
- floats
- modulo operator
- bang operator


## Conditionals

## Overview (from syllabus)
- Decision structures, also called decision trees, conditional statements, or if/else statements, are fundamental to computer programming
- Conditional statements are a sequence of well-defined instructions that produce a unique output based on the value of the input
- Conditionals follow a flowchart-like structure

## Learning Objectives (from syllabus)
- Understanding the syntax of `if/else` statements
- Using variables in a conditional statement
- Using string interpolation to log a descriptive output to the conditional statement
- Effectively using `else` statements as a catchall when needed  

## Vocabulary (from syllabus)
- if, else if, else
- string interpolation

## Concepts to Cover
- console.log
- node
- data types
- modulo
- conditionals
- variable declarations
- equality operators
- relational operators
- logical operators
- built in methods
- code blocks

## Lecture
JavaScript lives in a file with the extension .js. To run this file we can ask our local machines to act as a server and run JavaScript in the terminal. To do this we need two things: a way to tell our computer what code we want to see and a terminal command to run the code.

console.log() is the way we instruct our program to show us an output in the terminal
using the command node tells our computer to create a JavaScript run time and process the file

### Intro

JavaScript is a dynamic, interpreted, scripting language. Alongside HTML and CSS, JavaScript is one of the core technologies of the World Wide Web.

Neat, so what does that mean?

JavaScript is the power language. It provides interaction with the user. If you click a button or see an alert pop up or watch pictures auto scroll on your screen, that is JavaScript.

When we run JavaScript it is read line by line by the browser. Being processed in this way means JavaScript is an interpreted language. When it is run and read, it gets compiled down to a more root level language, that is then in turn translated to machine code that manipulates our computer hardware.

JavaScript is several levels away from machine code, so we say that it has a higher level of abstraction than machine code.

JavaScript is a scripting language which means JavaScript allows us to perform logic and manipulate data. We can store information and ask the computer to run mini programs that will evaluate that information and perform different actions based on the outcome.

### Data Types

Because JavaScript manipulates data, it is very particular about how it processes said data. JavaScript has categories of information that it will work with. These are called data types. There are 6 primitive data types in JavaScript.

Primitive data types mean they cannot be broken down into a simpler form.

Number
String
Boolean
Null
Symbol
Undefined

Numbers are exactly what you think they are. The number data types allow us to perform mathematical functions and compare values.

Numbers can either be integers or floats. A float is a non-whole number.
```
console.log(42)
console.log(3.14)
```

The basic math functions are just like a calculator - addition, subtraction, multiplication uses an asterisk and division uses a forward slash
```
console.log(5 * 4)
console.log(15 / 3)
```

You can multiply exponents with two asterisks
```
console.log(4 ** 3)
```

There is also an interesting operator called a modulo that will return the remainder of a division function.
```
console.log(4 % 3)
console.log(4 % 2)
```

Strings are characters stored inside quotation marks. And strings have particular properties, things like length, and ability to identify the location of a character. We can also see if a particular character exists in a string. JavaScript has lots of built in functionality we call "built in methods." These built in methods vary in how they function, but for the most part they use "dot notation" meaning they are chained to the end of an expression with a period. Just like console.log is a log action chained to the end of the console expression. Then, just like .log() many methods are followed with parentheses. In JavaScript, parentheses describe action. The .log is performing an action of printing the content of the parentheses to the console.
```
console.log("hello")
console.log("42")

console.log("hello".length)
console.log("hello".includes("e"))
```

The includes method returns a true if the content of the parentheses exists within the string or a false if it doesn't. This is another data type called Boolean.

Booleans is named after George Boole, an English mathematician from the 1800s. He created a particular branch of algebra that primarily used true/false values. They were often denoted as 1 or 0 so when the idea of circuitry logic came into play in the 1930s, Boolean algebra was perfect for logic gates which is what runs our computers. So anyway, Booleans are true false values. They can be used for logical comparisons. For example, is 6 greater than 3? would return a boolean value.
```
console.log(true)
console.log(false)
console.log(6 > 3)
```

Null is equal to nothing else, the lack of value. It is not false, it is not 0, it is just null.
console.log(null)

Symbols are unique keys. We don't use symbols much in JS so I will introduce them as one of the six primitive datatypes, then leave them for now and we will revisit them when we get to Ruby.

Undefined is the value of a variable that has been declared, but not yet assigned.

### Variables
Cool, so what does that mean?

In JavaScript, we can store information by creating variables. Just like in math class where x = 6 and any time you reference x, really you are referencing that value that is assigned to x. And anything saved in a variable needs to be a data type.

To create a variable in JavaScript you must declare it. You must say, hey JS, I intent to create a variable. There are three ways to declare a variable:

// var
// let
// const

Each have their place. var is used in the global scope, let is used in the local scope.

Okay, so what does that mean?

We will talk a lot about scope as we get into functions, but basically when we create our mini programs that JavaScript runs in order to execute logic, we are sectioning off pieces of our code so they are protected from outside influence. The whole program is the global scope. What is inside the sectioned-off chunks of code is local scope.

Const is used to protect a variable from being reassigned.

Okay, so what does that mean?

So we have declared our variable. Now we have to give it name. Just like the rest of our code, the variable name should communicate intent. Don't name your variable x. I know it is tempting, but it doesn't end well. Variables should never be uppercased. Uppercased variables are a thing, a really specific thing, and not what we are doing today. So lower case and more specifically they are camel cased.

helloBravoClass
iAmWritingToYouInCamelCase

```
var myName
```

So we named our variable. At this point our variable has been declared but not assigned. Meaning right now our variable has the data type of undefined.
```
console.log(myName)
```

So, let's assign our variable. JavaScript uses the single equal sign to assign a variable. What is assign to the variable must be a JavaScript datatype.

Assuming we use let and var, JavaScript allows us to reassign variables. If we use const we cannot reassign a variable. Const is used to protect a variable from being reassigned. All variable declarations have their applications.
```
const myName = "Sarah"
myName = "George"
console.log(myName)
```

The other thing to note here is JavaScript doesn't care what data type your variables hold. You can reassign the variable to be a different data type. That is not true for all languages. This is why JavaScript is a dynamic language. Or a dynamically typed language. The opposite is a static or statically typed language. (C, C++, Java, Go)

```
var myName = "Sarah"
myName = 6
console.log(myName)
```

Vocab Check - unmute, and everyone shout it out, no one will know if you are wrong. But it is a herd mentality, you are only protected if everyone participates.
- What is the file extension for JavaScript?
- What does console.log() do?
- What is camel case?
- What are Boolean values?
- What are the three variable declarations?
- What are the six primitive data types?

### Conditionals

So, the most powerful thing we can have our program do is set up logic that determine a particular output based on input. That is what makes technology useful to us. Machines are great, automating things are great. It eases our workload and makes work more efficient. But really when you can introduce decision making to that process, that is when you have technology.

So let's have our code make decisions.

We can use conditionals to create different outcomes. Conditionals are a fancy word for if/else statements.

To create conditionals, we have to create evaluations. We have to create a situation where we can compare an input to a value and determine if the evaluation is true or false.

### Evaluations
There are a couple types of evaluations we can perform.

Equality operator
Do two things equate to the same thing? To determine this, we set up an equation.
```
var myFavNum = 7
console.log(myFavNum === 7)

var myName = "Sarah"
console.log("Sarah" === myName)
```

Equality operators return a boolean value

Relational Operators
< > <= >=

Logical Operators
&& || !
```
var greeting = "hello"
console.log(6 < 3 && "hello" === greeting)
```

### If/Else

So now that we can determine whether an equation is true or false, we can create code that will execute an output based on an evaluation.

If is a key work in JavaScript. It is built into the program. If statements evoke action - hence the parentheses. So if this action evaluates to "true," we want a particular output. The output is wrapped in curly braces. What is inside the curly braces is the executable code. For today, we will use console.log to see our executable code.
```
if(true){
  console.log("true!")
}
```

If the statement evaluates to false, the block of code does not run
```
if(false){
  console.log("false!")
}
```

Here, since the statement evaluates to "false,"" that is the end of the story. So let's add some code to execute if our "if" is false

That is an else. Else is also a protected word in JavaScript. Unlike "if," "else" does not take an action. It only runs if nothing else is true. It is the catch all.
```
if(false){
  console.log("false!")
} else {
  console.log("here is the else")
}
```

Tabbing info here - on the line below
Talk about dropping the else to the next line - but follow style guides at your job
I would rather see it dropped to the next line than all on the same line
```
var myName = "Sarah"
if(myName === "Sarah"){
  console.log("Hey!")
} else {
  console.log("here is the else")
}
```
-- make falsey --
-- log the variable --

And we can use all our different evaluators to make these true/false determinations.

Okay, let's add one more level to this.
We can introduce a third level to this tower known as "else if."
```
if(6 < 3){
  console.log("six is less than three")
} else if(6 !== 5){
  console.log("six is not equal to five")
} else {
  console.log("else!")
}
```

Remember that JavaScript is interpreted, it gets read line by line. So our little program is just waiting looking for a condition to be true, or for the else, with no qualifications. As soon as one of the evaluations returns true, the block of code is executed and JavaScript is done. So set your logic accordingly, and test all outcomes.

-- play around and change things, add variables --


You get one if, one else, and as many else ifs as you like.


Random side note about semicolons - unless you are working on a code base that is more than three years old, you do not need semicolons
They will not hurt your code, but for most JavaScript actions, you don't need them, so why type more and why give yourself more to look at?


Read the content. Read the challenge. Discuss the challenge with your pair. Pseudo code.
Complete as much of that challenge as you can.

Stretch goals are designed to push you a little further. They may include topics we didn't cover in lecture. Here is where you can flex your research muscles. It is a good skill to develop because it is what you will do as developers.
