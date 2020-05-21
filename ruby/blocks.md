# Ruby Blocks

## Overview (from syllabus)
- Ruby has lots of iteration methods
- Ruby uses the keywords `do/end` or {} to create a block of code to be executed

## Learning Objectives (from syllabus)
- Passing a block to a Ruby iteration method
- Exploring the do/end vs {} syntax

## Vocabulary (from syllabus)
- blocks
- do/end
- times do
- each do
- while
- map


## Concepts to Cover
- blocks
- def/end vs {}
- passing values to a block
- times
- each
- map
- select
- while
- ranges
- wrapping the blocks into a def/end
- accessor vs mutator!


## Lecture

A block is an anonymous function that gets passed to a method and returns a value. Ruby-ists really like blocks because it allows you to customize built in methods.

A block is a lot like a higher order function like we saw in JavaScript. Blocks can be passed their own local variables and return an item to the next higher scope.

Blocks can be defined two ways: using the key words do/end or with curly braces. Generally speaking, the do/end should be used if the block is more than one line of code. Curly braces are used for code that can be written in one line - just like the difference between map and filter when we need to return more than one line of code.

Blocks are often passed as iterators in Ruby. Ruby has lots and lots and lots of iterator methods. I'm only going to touch on a few of them here.

An iterator is a loop. So the block can be called over and over to execute the same code a particular number of times.

So these examples are combining iterables and blocks into the same lesson because they are often tied to each other.

### Times
Times is the method is a very, very simple iterator. It just executes the block a particular number of times.

So the .times is the method and .times gets passed a block of executable code.
```
5.times do
  'hello'
end
```

I can also write it this way.
```
5.times {'hello'}
```

Create a variable to determine the number of times the loop will run
```
num = 5
num.times do
  'hello'
end
```

Generate the numbers 1-10
```
num = 1

10.times do
  p num
  num += 1
end
```


### Each
Each works on a list of items. So it needs an object or array or a hash in order to run.

In the very simplest way, it uses an object's length to determine the number of times it is going to run.
```
num = [2, 3, 4]
num.each do
  p 'yo'
end
```

To add a bit of functionality to this method we can pass in a local argument. Blocks can take in arguments. To pass an argument to the block you use pipes
```
num = [2, 3, 4]
num.each do |value|
  p value
end
```

Modify each value
```
num = [2, 3, 4]
num.each do |value|
  p value * 3
end
```

By default each starts at 0 and continues to the length of whatever it is acting on.


### While

A while can be used when you don't have an array and you just need to loop until a condition is met. If you don't necessarily know how many iterations you are going to need. While doesn't take a do block, but it does execute code a particular number of times.

If I need to print out some numbers I can use a while loop.
```
num = 1
while num <= 10
  p num
  num += 1
end
```

Or execute code until a condition is met
```
num = 10
while num < 10
  p num
  num +=2
end
```

### Ranges

Ranges aren't blocks either, but you can use blocks and iterable methods on ranges, so we can talk about them here.

You can create ranges of numbers or ranges of letters.

p 1..5

This range is the numbers 1-5 inclusive
```
range = 1..5
range.each do |value|
  p value
end
```

This range is the numbers 1-5 that excludes the highest value
```
range = 1...5
range.each do |value|
  p value
end
```

Creating a range of letter
```
letters = 'a'..'d'
letters.each do |value|
  p value
end
```

Passing a block inside of an each/do with a range
```
range = 1..10
range.each do |value|
  if value % 2 == 0
    p 'even'
  else
    p value
  end
end
```

### Map
Let's talk about map. So each/do is great, but it really is a bit of a more primitive version of map. It returns all the elements but it doesn't collect them in any way.

So for that, we can turn to map. Just like in JavaScript map needs an array or an iterable item and it returns an array. We like arrays!

To build on the example from before, let's wrap up the content inside of a custom method.
```
def showOdds nums
  nums.map do |value|
    if value % 2 == 0
      'even'
    else
      value
    end
  end
end
puts showOdds 1..7
```

Change to: p showOdds 1..7

So rather than a range, let's move to an array.
```
nums = [3, 4, 5, 6, 7]
def showOdds array
  array.map do |value|
    value ** 2
  end
end
p showOdds nums
p nums
```

The original array is unchanged. If I want to modify the original array, I can use the bang operator.
```
nums = [3, 4, 5, 6, 7]
def showOdds array
  array.map! do |value|
    value ** 2
  end
end
p showOdds nums
p nums
```

Now the original array is modified.

We can also map over a hash. When map or each is applied to a hash we can pass two arguments - the key and the value
```
coworkers = { boss_lady: 'Chelsea', marketing: 'TJ', career: 'Bryan', operations: 'Hillary'}

def check_hash array
  sentences = array.map do |key, value|
    "The #{key} person is #{value}."
  end
  sentences.join" "
end
p check_hash coworkers
```


### Select
Select is very similar to filter. It has a built in if/else statement that looks for a Boolean return value.

```
num = [2, 3, 4, 5, 6, 7, 8]
def is_even array
  array.select do |value|
    value % 2 == 0
  end
end
p is_even num

num = ['hey', 'yo', 'sup', 'hello']
def is_even array
  array.select do |value|
    value.include?'e'
  end
end
p is_even num
```

## Buildout of Challenges
```ruby
# Write a loop that prints the numbers 1 to 20.
(1..20).each do |num|
  p "Here is one way: #{num}"
end

# Write a loop that prints the numbers 1 to 20 using a different approach than previously used.
num = 1
while num <= 20
  p "Here is another way: #{num}"
  num += 1
end

# Write a loop that prints only even numbers from 20 to 0.
dec = 20
while dec >= 1
  p "Here is decrementing: #{dec}"
  dec -= 1
end

# Create a method that takes in an array of numbers and returns a new array with all the numbers multiplied by 5.

my_nums = [3, 4, 667, 2, 46, 79, 0, -9, 45, 6]

def mult5 array
  array.map do |value|
    value*5
  end
end
p mult5 my_nums

# Create a method that takes in an array of lowercase words and capitalizes all of the words, permanently modifying the original array.

words_array = ['cactus', 'succulent', 'fern', 'maple']

def capitalizer array
  array.map! do |value|
    value.upcase
  end
end
p 'method outcome'
p capitalizer words_array
p 'og array'
p words_array

# Create a method that takes in an array of numbers and returns the largest number in the array.

def largest array
  anchor = array.first
  array.each do |value|
    if value > anchor
      anchor = value
    end
  end
  anchor
end
p "largest should be 667"
p largest my_nums

# Create a method that takes in an array of numbers and returns the smallest number in the array.
def smallest array
  anchor = array.first
  array.each do |value|
    if value < anchor
      anchor = value
    end
  end
  anchor
end
p "smallest should be -9"
p smallest my_nums

# Create a method that takes in an array of numbers and returns only the odd numbers sorted from least to greatest.

def odds_sorted array
  just_odds = array.select do |value|
    value.odd?
  end
  just_odds.sort
end
p "odds sorted"
p odds_sorted my_nums

# Create a method that takes in a string and determines if the string is a palindrome.
pal_one = 'racecar'
pal_two = 'tidbit'

def palindrome_checker string
  if string.reverse == string
    "#{string.capitalize} is a palindrome."
  else
    "#{string.capitalize} is not a palindrome."
  end
end
p "palindrome"
p palindrome_checker pal_one
p palindrome_checker pal_two

# Create a method that takes in an array of strings and returns all the strings in reverse casing. All uppercased letters should be returned lowercased and all lowercased letters should be returned uppercased.
crazy_word1 = "Hello"
crazy_word2 = "aLbAtRoSs"

def case_swap string
  split_string = string.split""
  swap = split_string.map do |value|
    if value.upcase == value
      value.downcase
    elsif value.downcase == value
      value.upcase
    else
      "error"
    end
  end
  swap.join""
end
p case_swap crazy_word1
p case_swap crazy_word2

# Create a method that takes in an array of words and returns all the words that start with a particular letter. Ex) Given the array ['Apple', 'Avocado', 'Banana', 'Mango'] and the letter 'a' the method should return ['Apple', 'Avocado']. With the same method, given the letter 'm' should return ['Mango'].

words = ['Apple', 'Avocado', 'Banana', 'Mango']

def starts_with array, letter
  array.select do |value|
    value[0].downcase == letter.downcase
  end
end
p starts_with words, 'a'
p starts_with words, 'm'

# Stretch Challenges: FIZZBUZZ
# Write a program that prints the numbers from 1 to 100. For multiples of three print Fizz instead of the number, for multiples of five print Buzz instead of the number, for numbers that are multiples of both three and five print FizzBuzz, for all other numbers print the number.

def fizz_buzz
  (1..100).each do |num|
    if num%15 == 0
      p 'fizzbuzz'
    elsif num%3 == 0
      p 'fizz'
    elsif num%5 == 0
      p 'buzz'
    else
      p num
    end
  end
end
fizz_buzz
```
