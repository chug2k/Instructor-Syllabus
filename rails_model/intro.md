# Ruby on Rails Introduction

## Overview (from syllabus)
- "Learning to build a modern web application is daunting. Ruby on Rails makes it much easier and more fun. It includes everything you need to build fantastic applications, and you can learn it with the support of our large, friendly community." -- Rails Docs
- Ruby on Rails is a server-side web application framework written in Ruby. Rails was created by Danish programmer David Heinemeier Hansson (known as DHH). Rails was released in July 2004 as open source code.
- Rails is a model–view–controller (MVC) framework, providing default structures for a database, a web service, and web pages.

## Learning Objectives (from syllabus)
- Exploring the fundamentals of Ruby on Rails
- Generating a new Rails project
- Running the Rails server

## Vocabulary (from syllabus)
- Ruby on Rails
- MVC

## Ruby on Rails Principles (from syllabus)
- Convention over Configuration: "One of the early productivity mottos of Rails went: “You’re not a beautiful and unique snowflake”. It postulated that by giving up vain individuality, you can leapfrog the toils of mundane decisions, and make faster progress in areas that really matter."
- Programmer Happiness: "There would be no Rails without Ruby, so it's only fitting that the first doctrinal pillar is lifted straight from the core motivation for creating Ruby. Ruby’s original heresy was indeed to place the happiness of the programmer on a pedestal."


## Concepts to Cover
- MVC
- RESTful architecture


Ruby on Rails is a framework written in the language Ruby. A framework is a structure of base code to which you then add your own code. A framework typically dictates a flow of control. Meaning the framework defines the path for a developer to go about creating an application. So Rails is not a language. It is a framework that uses Ruby.

#### Websites that use Rails
- Airbnb
- Kickstarter
- Heroku - which is a deployment service that we will use for Capstone projects
- Groupon
- GitHub

### MVC
Ruby on Rails follows an MVC architectural pattern. Which basically means it is a way of organizing the responsibility of different aspects of your code. MVC stands for model, view, and controller.

So far we have only been dealing with the **View**
HTML, CSS, JavaScript, React is all part of the View, it was the user sees

**Model** is the database layer, this is where we are going to hang out for the next couple days. We are going to create just enough of a Rails app to be able to dig into the Model and get familiar with what is happening in the database and how Rails interacts with Postgres.

On Friday we will introduce the **Controller**
Controllers are like a switch board, they dictate the what data should be collected from the model and then they send info back to construct the view.

When you put these three pieces together, the M, the V, and the C, you have a full-stack application. Next week we are going to spend a little time making a full stack Rails app, meaning that the M, the V, and the C all come from Rails. But after that, we will move away from Rails Views and focus in on building a Rails API - using the model and controller. After PD week, we will add React as the view to the Rails MC and we will have a decoupled full-stack application, meaning we can essentially create two stand-alone applications that will interact to create a full-stack app. That is just big picture, what we are working towards over the next couple weeks.


### Rails
Great, so let's talk about Rails. Ruby on Rails was create by a Danish computer scientist named David Heinemeier Hansson. He is known in the community as DHH. He first created Rails in 2004 and introduced it the annual Ruby conference in 2005. In 2006, Ruby on Rails was included on the Apple's latest IOS release. So Rails has been around quite a while. Just like Ruby, Rails is open-source.

We are currently on Rails version 6. Version 6 was released in August last year and there have been several point updates since then. On all of your machines I installed a technology called RVM - Ruby Version Manager that will allow you to switch between Ruby and also Rails versions with a terminal command. But I hope that we are all running the latest version of Rails and that we won't have to mess around with versioning too much. That is a something you will all deal with as programmers, but hopefully not too much right now.

You can check your current Rails version by running $ rails -v in the terminal

Rails is a server-side web application framework. It provides default code for a database, for web pages, for HTML and CSS, and actually has a little JavaScript in there as well.

When Rails came out it was really revolutionary and has influenced a lot of other backend frameworks. When DHH announced Rails at Ruby Conf in 2005, his famous quote was "Look at all the things I'm not doing." Which is to say that there is a lot of functionality that comes with Rails. The idea was to be able to get an application setup quickly and easily. So to make that happen, the Rails framework uses a concept called "Convention over Configuration." Basically, the idea was to decreases the number of design decisions made by the developer. And by design, I don't mean the UI. I mean the way the file structure is designed and the way the database is designed. So in that sense, Rails is very picky. We have to follow naming conventions very strictly. But if you follow the rules that Rails lays out, it will do a lot of the heavy lifting for you. This takes opens up the developer to solving more interesting problems. Which is really cool. The tradeoff is, as a new developer you are subject to what is referred to as "Rails magic" where you have an application just doing stuff for you, so it can be hard to follow that thread of your code. But once you get the hang of Rails "opinions" it becomes really easy to code.

Following the convention of Rails also really helps us with the ever present issue of communication. If you are a Rails developer, you can look at any Rails app and very quickly figure out what is going on. There is a lot of power in that. I've watched Matt do this many times, but one time in particular stands out to me. It was during Jumpstart and one of the TAs was a student that had graduated 3 or 4 cohorts ago and was working on a side project/freelance project that was full-stack Rails. And he had a weird bug we were all looking at. Matt comes up and legit 30 seconds pinpointed where the error was coming from. In an App he has never even seen. But because he knew exactly where to look.


Rails is set up to make the all the files connect really seamlessly. In Rails, you don't have to worry about importing files or requiring certain files. As long as your add your code to the framework in the right spot and named the correct thing Rails will just go find it. So that frees up a lot of time, and removes a lot of architecture decisions because Rails has decided these things for you.  

Rails docs are really great. I would recommend bookmarking this page.

https://rubyonrails.org/


The main focus for now is on the Model layer, but since this is an intro, I want to talk about the Controllers for just a minute.

**Happy server**

Rails is essentially something called middleware. It is called middleware because it sits the the middle of the request-response cycle.

When a user makes a request, it goes to the server. And the server is our Rails middleware. The request travels down through the middleware and every layer makes decisions and adds information to the request. The request is just a giant hash.  So the hash goes to the next layer and the next layer until it gets to the bottom which is the controller that manages our database. Then depending on the type or request - the verb of request, it gets the data associated with that request and it goes back up the stack and back to the user as a response.

Or if the request is bad, one of the layers can halt the request before it gets into our database. Then it can stop the process and send back a 404.

Middleware is one of those things that is good to be aware of but it isn't really something we interact with directly. Our job is to make sure the requests are good and responses deliver the correct code.

### Create a new rails app
Because the goal of Rails is to have as much functionality out of the box as possible, Rails has a database language and a testing framework by default. If you just make a Rails app, as is, you get a SQLite database and a testing framework called MiniTest. Which is fine, if that is what you want. But we want to use some different tools - specifically Postgres and RSpec. So to modify this we pass a couple of flags to the rails new command to alter the original build.

So everyone follow along with me and make a new Rails app. This will just be for the purpose of creating, looking at it, poking around a bit, then we can delete it. So put it somewhere convenient but you don't need to push it to GitHub or anything like that.

$ rails new my_app -d postgresql -T

The app name should be lower case and snake case. Rails has a lot of protected words so I don't think it will let you name an application "test." Then we are passing the flag -d that is deleting the database and in its place installing Postgres. Then the -T flag deletes the MiniTest framework so that we can use RSpec instead.

So this is the command to set up a new Rails app. You are going to be using this command a lot. It is the equivalent to the "yarn create react-app" command.
```
$ cd my_app
$ rails db:create
```

When you create the database it is created on your local machine. If you opened PG Admin right now you would see these two databases as well as your country database.

To see this in the terminal type $ psql
This drops us into the Postgres interactive terminal. There is a whole other set of commands to query Postgres on the command line, which you are welcome to research if you are interested.
`\l ` lists all the databases you have

Extra info if someone asks: `\c countries`

Let's look at the code we just created. (If questions: look at the config/database.yml file for details about each database)

There is a lot going on here. Lots of it we won't use too much. There are lot of files that create the structure and we can just leave to do their thing. But let's look at the directories we will be using.

Files we will use:
- app/controllers/models/views
application_controller is a class that inherits from the base Rails app - just like the class App extends React.component
- config/routes
- db
- Gemfile - Rails is a collection of code snippets. In here are the dependencies that create Rails. You can add additional functionality to a Rails app with gems, just like we can add additional packages to a React app with yarn.
```
$ rails server
$ rails s
```

Fire up the app. You will notice that the page does not automatically load. Unlike React, we have to go to the browser and navigate to 'localhost:3000'
