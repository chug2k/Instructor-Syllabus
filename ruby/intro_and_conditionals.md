# Ruby Ruby Ruby Ruby

Intro and Conditionals

## Overview (from syllabus)
- Ruby is an open source, object-oriented programming language created by Yukihiro "Matz" Matsumoto in the early 1990s
- Ruby has a reputation for simplicity and a style that is both easy to read and write
- Ruby is a general-purpose, interpreted, dynamically typed, server-side scripting language
- Ruby can be embedded into Hypertext Markup Language (HTML)
- Ruby has many helpful built in methods and great documentation

## Learning Objectives (from syllabus)
- Interacting with data types in Ruby
- Exploring Ruby syntax
- Running Ruby in the terminal / irb
- Exploring Ruby methods

## Vocabulary (from syllabus)
- Object oriented programming
- snake_case
- Interactive Ruby Shell
- method
- puts/print/p
- gets.chomp

## Concepts to Cover
- OOP
- Ruby in the terminal - irb
- data types
- integer
- float
- string
- boolean - logical, relational, equality operators
- nil
- arrays
- methods with dot notation
- creating a Ruby file
- output to the terminal
- user input
- if/else/end
- string interpolation

## Lecture
Ruby is a dynamic, scripting, open-source, object-oriented programming language. Ruby was released in 1995 by computer scientist Yuki-hiro Matsumoto who is affectionately known to in the Ruby community as Mats. He is a very benevolent and respectful leader in the programming community so his demeanor has spanned the saying "Matz is nice and so we are nice" or MINASWAN for short.

Dynamically typed - which as you remember from JavaScript means that we don't have to declare a data type when you create a variable, and furthermore after the initial variable has been created you can reassign it to another data type if it is needed in your program.

But Ruby does not support type coercion. So you won't see some of the truthy and falsey values that existed in JavaScript.

Ruby, just like JavaScript is a scripting language that makes evaluations and executes operations.

Ruby is also entirely open-source. Which means the entire code base is available to the public for free and can be modified and distributed by anyone.


Ruby is an object-oriented programming language. Everything in Ruby is an object, meaning everything is an instance of a class.

Object-oriented programming became very popular in the 1990s. One of the reasons OOP became so popular is that it truly mimics the way we think about and reason about the world around us. This idea of thinking about the world in terms of classes and objects actually dates back to the ancient Greek philosophers. Plato’s theory of forms actually describes the fundamentals of OOP.

Plato says that forms are representations or templates of an actual thing. The form is the ideal, the perfect version of a thing. Then there is the actual thing. The thing in the physical world. So we can think about the form of a triangle. A triangle can be described by mathematics to have three straight lines that intersect to create three angles that add up to 180 degrees. We can all generally agree on the idea of a triangle.

**Get white board**
I could draw a triangle and we would probably all understand that I am drawing a triangle. And it would not be as perfect as the form, but we can all still agree that this is a triangle. There is the form, the ideal of the triangle and then there is the actual implementation of the form.

So in object-oriented programming, everything is an object. And objects are instances of classes. So the class is the ideal. The class is the form. Then the object is the implementation of the form.


There are two ways to execute Ruby code. You can run Ruby in the terminal or from a file.

Let's start in the terminal.

Type `irb` in the terminal to drop into a Ruby console. This is very similar to running JavaScript code in the browser. IRB stands for Interactive Ruby. All Macs come with Ruby. You don't have to add anything to make Ruby work. I added a Ruby version manager to all of your computers so that we can change versions, which may come in handy, but Ruby was already there.

You will note the 2.7.0 here. This is the current version of Ruby. It was released on Christmas Eve last year. Matz tends to give the community big releases as Christmas presents.

Okay, first up, Ruby data types.


**Do this intro section in IRB**

### Data Types
Integer - add, subtract, multiply, divide, exponents, modulo

Floats - divide by a float
```
4 / 3    
7.0 / 2
```

Divide by zero
```
4 / 0
4.0 / 0
```

Strings - the Ruby style guide says to use single quotes around stings with the exception of needing to pass punctuation or string interpolation
```
'hello!'
"Hey y'all"
```

Boolean
Equality operators
== note there is only two equal signs, that is because Ruby doesn't have type coercion so there is no need to distinguish between a strict and a loose equality

Relational operators
```
7 < 9
7 > 9
5.0 <= 5
6 >= 9
5 != 8
```

Logical operators
```
'hi' == 'hi' && 6 > 4
'hi' == 'hi' || 6 <= 4
```

Nil is the Ruby version of null
Symbol - is the unique key to a value in an object or hash

Variables - variable don't require a declaration, so there is no var, let or const in Ruby, you just make a variable and assign it with a single equal sign

The casing convention for Ruby is snake_case.
```
my_name = 'sarah'
```

String interpolation - uses double quotes and a # symbol
```
"Hey there, #{my_name}!"
```

Methods - everything in Ruby is an object to all methods are chained to the expression using dot notation.
```
my_name.length
my_name.upcase
my_name.capitalize
my_name.include?'s'
```

Some method will take arguments, just like in JavaScript. Some Ruby methods can take a ? as an argument and they will return a Boolean value.

Checking the type of a data type
```
3.class
4.0.class
my_name.class
```

Just like in JavaScript there are a lots and lots of methods in Ruby. Ruby is meant to read much more like English than other programming languages.

Arrays
```
my_nums = [2, 3, 4, 5, 6, 7]
my_nums.length
my_nums[4]
my_nums[4] = 9   - mutator
my_nums
my_nums[-1]
my_nums.first
my_nums.last
my_nums.reverse
```

These methods are not permanent, they are accessors.
```
my_nums
```

And can be chained together.
```
my_nums.reverse.first
```

To make the methods mutators add the bang!
```
my_nums.reverse!
my_nums
```

Shovel operator - mutator
```
my_nums << 99
```

**Create a Ruby file**
Create a file with the extension .rb

## Conditionals

Output in the terminal
puts - short for "put string" adds a newline after executing
print - does not add a new line after executing
p shows a more raw version of the output, good for debugging
```
print 123
print 456
print 789

puts "hello"
puts "hi"

p "hello"
p "hi"

if/elsif/end
```

Input - gets
```
puts "enter a number"
answer = gets

puts answer
p answer

if answer < 20
  puts "correct"
else
  puts "incorrect"
end
```
Get an error then change:
```
if answer.to_i < 20
```
Going the other direction is to_s

```
puts "enter your name"
answer = gets

puts answer

if answer.downcase == 'learn'
  puts 'Hi Learn!'
elsif answer.downcase == 'sarah'
  puts 'Hi Sarah!'
else
  puts "Hello #{answer}"
end
```

Not getting the outcome expected - change puts to p
Note the extra line
Remove it with .chomp


## Buildout of Challenges
```ruby
# Arithmetic Challenges
# Remember that floats are numbers with a decimal point whereas integers have no fractional part so in Ruby, 1 and 1.0 are different types of things with slightly different behaviors.

# Add, subtract, multiply and divide some numbers and floats.
puts 5 + 6
puts 5 - 4
puts 6 * 4
puts 9 / 3
puts 5 / 2
puts 5 / 2.5
puts 4 ** 3

# Find the remainder of dividing two numbers using the modulo operator (%).
puts 9 % 3
puts 9 % 2

# Divide a number by 0.
# puts 4 / 0

# Divide 0 by 0.
# puts 0 / 0

### Variables Challenges

# Set a variable called my_favorite_number equal to your favorite number.
my_favorite_number = 7

# Calculate your favorite number divided by 2.
puts my_favorite_number / 2

# Set another variable called someones_favorite equal to 13.
someones_favorite = 13
puts someones_favorite

# Change the value of someones_favorite to 7.
someones_favorite = 7
puts someones_favorite

# Subtract my_favorite_number from someones_favorite.
puts someones_favorite - my_favorite_number

# Change the value of my favorite number to be 26 times its current value.
puts my_favorite_number = my_favorite_number * 26

# Strings Challenges
# Create a variable and return it in a sentence string interpolation.
my_name = 'Sarah'
puts "Hello, my name is #{my_name}!"

# Create a variable that contains a string and test some of the Ruby string methods.

# .upcase
puts my_name.upcase
# .reverse
puts my_name.reverse
# .include?
puts my_name.include?'e'
puts my_name.downcase.include?'s'
# .capitalize
puts my_name.capitalize

# Arrays Challenges
# Create an array with five or six of your favorite TV shows
my_tv_shows = ["Friends", "Parks and Rec", "Scrubs", "The Office", "Brooklyn 99", "The Simpsons"]

# Find the length of the array.
puts my_tv_shows.length

# From the full TV show array, extract your top 3 TV shows in a new array.
my_favorite_tv_shows = []
my_favorite_tv_shows << my_tv_shows[1]
my_favorite_tv_shows << my_tv_shows[4]
my_favorite_tv_shows << my_tv_shows[5]
puts my_favorite_tv_shows

# Reverse the array.
puts my_favorite_tv_shows.reverse

# Get one element from the array.
puts my_favorite_tv_shows[0]

## Conditionals Challenge: Rock, Paper, Scissors

# Write the code that allows two users to input their moves in terminal for "Rock, Paper, Scissors" and determines the winner (or if a tie occurred).

puts 'Player1 enter your choice'
player1 = gets.chomp.downcase
puts 'Player2 enter your choice'
player2 = gets.chomp.downcase

if player1 === 'rock' && player2 === 'scissors'
  puts "Player1's #{player1} beats #{player2}"
elsif player1 === 'rock' && player2 === 'paper'
  puts "Player2's #{player2} beats #{player1}"
elsif player1 === 'scissors' && player2 === 'rock'
  puts "Player2's #{player2} beats #{player1}"
elsif player1 === 'scissors' && player2 === 'paper'
  puts "Player1's #{player1} beats #{player2}"
elsif player1 === 'paper' && player2 === 'rock'
  puts "Player1's #{player1} beats #{player2}"
elsif player1 === 'paper' && player2 === 'scissors'
  puts "Player2's #{player2} beats #{player1}"
elsif player1 === player2
  puts "Tie!"
end
```
