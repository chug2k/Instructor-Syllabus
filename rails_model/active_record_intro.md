# Rails Active Record Introduction

## Overview (from syllabus)
- Active Record is the interface between a Rails application and the database.
- Rails has specific commands to create new tables in the database and to edit existing tables.
- Active Record has its own syntax to query a database. The syntax is similar to SQL queries with a Ruby-flavor.

## Learning Objectives (from syllabus)
- Exploring the model layer of the MVC paradigm in a Rails application
- Understanding the difference between SQL and Active Record
- Using a Rails generate command to create a database table
- Following the Rails naming conventions for creating models

## Vocabulary (from syllabus)
- Active Record
- ORM
- generate commands
- migrations
- model class
- rails console


Active Record is class that is created when we create a Rails app. Active Record is an ORM which stands for Object Relational Mapping. ORMs allow developers to write SQL queries in a language is that not SQL. So Active Record was created by Rails to act as a layer that wraps around the database - in our case Postgres, so that we can write queries in Ruby.

Remember that Ruby is a very, very object oriented programming language. If we can think about the database in terms of a collection of tables - think of the database as being an Excel file and the tables are all different sheets within that file. A table has rows and columns. Each row has a name and each column has an input of data.

Active Record allows us to treat our database tables as classes. The tables can have relationships with each other in the same way classes can have relationships.

So right now we have a lovely, empty database. So we want to add table. Eventually we will add many tables to our database, but for today, we will add one table.

This will require two things: 1) A Rails generate command, and 2) some Active Record datatypes.

Rails provides us commands that will add files and other structure to the application. By using these commands we are allowing Rails to control the structure of the the files we are creating.

So the command to create a new table in Postgres is:
$ rails generate model

This command takes arguments.

It takes the argument of the name of the model - so what our table is called, then it takes the name of each column and the datatype of the content that belongs in each column.

So let's start with the name. The name of a model that is passed to the generate command is PascalCase, just like the classes we made in Ruby. And it is always singular.

$ rails generate model Question

So this is a real life example from the internship project. They had a database table called question.

Just a reminder that Rails is super picky about naming conventions. It is just one of those things that we have to accept and get used to. But the cool part is as long as we name the model correctly in the generate command, Rails will create all the other parts and name them appropriately.

So that leads us to the column names and the data type of each column. It is important to think these things through when creating an application. For your Capstone project we will ask to see a diagram of your model layer before you start your code. Because it really does define what your application is going to do.

So for our Question table let's add a column that the title of the question, the content of the question, the answer to question, and if the question is multiple choice.

So those are the columns in this table. Each one of those columns needs a data type.

So let's talk about ActiveRecord datatypes. There are quite a few. The ones I use regularly are:
- string 255 character limit (I think is equal to 1 byte)
- text allows for more characters, I read a bunch of conflicting info on how many characters, so I'll just say, it is enough
- boolean
- integer
- date, datetime, time - make sure you look up the syntax before you use these to make sure you have the right one and the right order

Google this:
rails 6 activerecord data types

Here is where you can learn more about these data types. But really, most of the time creating a particular data type in Active Record is to help keep your data clean and safe. So putting parameters on the type of data that can be accepted will help keep you from getting a bunch of junk saved in your database. You never want to give anyone the opportunity to manipulate your database. But I will say that if you are passing a number that you don't intent to use to perform mathematic operations, you might want to pass it as a string. Because number and float are two different data types.

So in the Question examples the rails generate command looks like this:

$ rails generate model Question title:string content:text answer:text mult_choice:boolean

This syntax is particular and a little weird.

Cool! So let's look at what we made.

We made a model with a class. And we made a migration.

Migrations create and define the shape of the database. Meaning how many columns do the tables have, and what data types are those tables. If you ever want to change your database, you change it with a migration.

So running this generate command gave us a migration and actually it is the migration that will create the database. So now that we have done the prep work we can tell the migration to get things rolling.
```
$ rails db:migrate
```

Now we actually have a database. Because in the db file, we now have a schema. Schemas are a snap shot of the structure of the database. You never alter a schema directly. But it is a good resource to see what is going on in your model layer.

Migration files are time stamped so they act as a log of the changes to the database. It is very normal to accumulate migration files. I think them a little bit like git commits. Just a record of your activity.

### Rails c

So our database has a table, it is represented as a model class in the Rails app. It is time to add some content.

Right now we are going to do all the work in terminal.

Rails has a console just like Ruby has a console, just like node and psql have consoles. And we are going to hang out in there a lot.


To enter the Rails console, type
```
$ rails c
```

Now we have access to our database and can make queries using ActiveRecord. AR syntax is like a Ruby-flavor of SQL queries.

Remember, Rails treats all the tables in the database as classes. So I have class Question.

### Read
```
> Question.all
```

I get back nothing, because there is nothing there, but you can see that ActiveRecord takes my Rails code and converts it to a SQL query.

#### Create

Let's add some data.

This is tough because it requires us to use syntax that is very similar to what we used when running the generate command, while being just different enough to be confusing. So take note and be patient with yourself. You will screw up and it will be okay.
```
> Question.create title: "JavaScript", content: "What casing does JS use?", answer: "camelCase", mult_choice: false

> Question.all

> Question.create title: "HTML", content: "What does h1 mean?", answer: "Header1", mult_choice: true

> Question.create title: "HTML", content: "What does h2 mean?", answer: "Header2", mult_choice: true

> Question.create title: "HTML", content: "What does p mean?", answer: "paragraph", mult_choice: true

> Question.all
```
Let's loop back to the topic from this morning. We have actually successfully hit 2 out of 4 CRUD functions.

What have we done?

So let's press on. We can also edit or delete content. But in order to do either of those, we have to first id which item we want to act on.

Looks at what we created. Note that the items all have a primary key. I didn't make a primary key. Rails did. And that is important. We always allow Rails to do that for us. Don't try manipulate that. That is Rails' job and you just let it happen.

But we can use it to recall a particular item.

Find is a Ruby array method, but when used by ActiveRecord it looks for the primary ID.

.find - by id

$ Question.find 2
This modifies the query and returns the item that meet this condition

I can save this to a variable. This variable only exists in this instance of the Rails console. If I exit this session, I lose my variable.
```
> num2.content = "What is an h1 tag?"
> num2
The variable is now modified

> Question.all
The content is not modified

> num2.save
Runs a SQL action
```

If you don't know the id of the item you are looking for you can use the where method to look for an item or group of items that meet a particular condition

.where - by attribute

#### Update
Edit - if you are going to edit an item, you have to pinpoint one item
$ html = Question.where title: "HTML"
$ html


**DO TO:**
add content about update_all
Example:
Question.update_all difficulty: "10"

Add content about the time stamp - GMT

#### Delete
q2.find 2
q2.destroy


## Rolodex Challenge Buildout
```bash
# Add five family members into the Person table in the Rails console.
$ rails new rolodex -d postgresql -T
$ cd rolodex
$ rails db:create
$ rails generate model Person first_name:string last_name:string phone:string
$ rails db:migrate
$ rails c

> Person.create last_name: "Davidson", first_name: "Joe", phone: "555-4455"
> Person.create last_name: "Davidson", first_name: "George", phone: "555-5588"
> Person.create last_name: "Davidson", first_name: "Jane", phone: "555-1234"
> Person.create last_name: "Jones", first_name: "Karen", phone: "555-2233"
> Person.create last_name: "Jones", first_name: "Larry", phone: "555-2345"

# Retrieve all the items in the database.
> Person.all

# Add yourself to the Person table.
> Person.create last_name: "Jones", first_name: "Moe", phone: "555-2995"

# Retrieve all the entries that have the same last_name as you.
> Person.where last_name:"Jones"

# Update the phone number of the last entry in the database.
> moe = Person.last
> moe.phone = "555-7890"
> moe.save

# Retrieve the first_name of the third Person in the database.
> person3 = Person.find 3
> person3.first_name

# Stretch Challenges
# Update all the family members with the same last_name as you, to have the same phone number as you.

> Person.where(last_name: 'Johnson').map{|person| person.update(phone: '555-0011')}

# Remove all family members that do not have your last_name.
> Person.where.not(last_name: 'Johnson').destroy_all
```
