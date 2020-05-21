# Intro to React

Magic 8 Ball Challenge Intro

### What is React?
Nothing more than a library for building user interfaces
A library is a collection of code snippets that can be packaged up and used as a set.
React docs (look up) - a declarative, flexible, efficient JS library for building user interactions
React renders things to the page
Displays content to the user and it handles user interaction

### You have interacted with a React application
Websites like:
- NYT
- Netflix
- AirBNB
- Zillow
- Instagram
- Codeacademy
use React because it is super powerful. So what makes React powerful?

### React is Component Based
Everything in React is a component.
Components can bb both classes and functions.
We are going to start with class component and we will spend this week in class components. Down the line, we will talk about functional components as we get more into our full stack applications.
So for today, we are creating classes in React. And as we know, classes are blueprints of objects. So classes create objects that manage data and behavior.

Components are a like functions in that they can be reusable.
React was created and is still maintained by Facebook. As Facebook grew, the developers needed a way to make the application more scalable. Billions of people use Facebook. So one of the key things about React is that the components can have their own logic - or as it is known in React, components can manage their own state. So think about this in terms of a function. We already know it is best practice to put all the logic our function needs inside the scope of the function. It is protected that way. It is "encapsulated." The function doesn't require the knowledge of anything other than what we pass in as arguments, and we control the output of the function with what is being returned. That is an important part of programming - being modular and encapsulated.

So components are very similar. Components only need to know about what they are in charge of. So think about the like button on Facebook. When I like a post, my screen gets updated. I see visual feedback from that action. But I don't see a page refresh or a reload of any kind. I just see the little thumb change. And anyone else viewing that post doesn't see a page refresh just because I liked that post. They just see an additional like. The reason that happens is because the like button is a separate component. It only manages itself and it only makes changes to the view where it is concerned. It doesn't require anything from anywhere else on the page. Think about that from a "work" stand point. The amount of work to update one tiny thumb is crazy small compared to refreshing my entire Facebook feed. And think about it from a user standpoint. If all of out Facebook feeds refreshed every time we liked or commented on something, we would never see the page. It wouldn't work.

The way that this modular update works, is that React creates what is called a virtual DOM. DOM stands for Document Object Model and it is what connect programming languages to the browser. It is the interface that takes our HTML and put it on a page - it is the user interface or the UI. When we look at a webpage we are looking at a document. Every time we change the state of the code that is creating the document, the document changes.

Think about document.getElementById

Those of you who attended Jumpstart used document.getElementById to connect JavaScript to HTML. And you may not have known this at the time, but getElementById is a build in method. And notice that we say build in method rather than build in function. What do we know about methods? What is the definition of a method? A function that belongs to an object or a class. A class is blueprint of an object. So all the built in methods we have been using are really the behavior part of the intersection of data and behavior when we talk about objects. Each built in method belongs to the class of data type that it is allowed to act on.

So, the DOM - the document object model is an object that has a method called .getElementById that allow us to manipulate the DOM. We can make changes to the DOM and that is really what user interaction is. The visual feedback that we program as we manipulate the DOM.

So React makes changes to the DOM in a very cool, very efficient way. Re-rendering the whole DOM is slow. So what React does is creates a virtual DOM. So there is the DOM we see when we look at Facebook, and the DOM that lays just behind the scenes. A buffer layer, if you will. So when changes are made, React updates the virtual DOM first. The virtual DOM processes the change and then identifies the areas that are now different. Then, React updates the real DOM ONLY in the areas that have been affected by the change. This makes React super efficient.

As a React developer, it is important to know what is happening and to understand how React works, but you don't really interact with the virtual DOM directly. This is just the big picture of why we like React, and a toe in the pool of what React can offer us.


### SPA
At its core React is a single page application - meaning that you see one view and within that view is a collection of components that manage all the different pieces
- Everything in react is a component, so the structure of the page is a component, all the buttons are components, the headers is a component, the footer is a component, the nav bar is a component.
- Routing, meaning, navigating to different pages, can be accomplished with additional libraries - which we will absolutely do, but for now we are going to focus on single page applications
- React has a lot of extras and other packages that can be added using a package manager, and those packages are often maintained by other groups or individuals beyond Facebook


### Looking at React
React is a collection of a lot of pieces of code - it is like Jest in that way. It requires a lot of small code snippets - called dependencies in order to run properly. Luckily we have package managers that handle that for us.

There are several ways to display React components - the most common way is to use a command that was created using yarn to manage all the dependencies. And that is what we will be doing soon. But as an introduction, we wanted to give you plain old HTML page that displays a React component.

### Anatomy
(copy and paste HTML code from syllabus)
So there is a lot going on here to make this code run, but let's focus on the class content.

Start from the inside out:
- Return - Every component returns something in the same way that a function returns something. In the case of React, a component is responsible for returning something called JSX. JSX stands for JavaScript XML - basically it is something that looks and acts a heck of a lot like HTML but can be embedded into JS code.
Just like in a function, you can only return one thing. So in react all the JSX we return must be wrapped in a parent element. You can put as much as you want in here, but it all has to be wrapped into one item. You can return exactly one thing.

- Render - every class component must have a render method. When a component loads, it is making changes to the DOM - first virtual, then real. Because the virtual DOM and the real DOM are not the same we have to give React a pecking order of how we want our code to execute. The render method is pretty high on that order. It ensures our users see content (or data) before they have access to behavior (methods).

- Class App extends React component - our current class called App is inheriting information from the functionality of React.

Inside the return, inside our parent JSX we can return more content.

--drag and drop--

## Nested Components

So this is one component. A component called App. This is our main component that is the parent component for all our React applications. It comes built in to React and it ultimately gets passed along and displayed to our user. But we don't have to write all the code in App. React is modular. So let's modulate. Let's create another class component.
```
class Header extends React.Component{
 render(){
   return(
     <h2>Bravo 2020</h2>
   )
 }
}
```
So it has all the parts. But just like a function, it is just sitting here looking pretty until we call it. App is getting called here "ReactDOM.render(<App />, domContainer)" so App is good to go. It is getting rendered by the React DOM. But everything else we create needs to be called. So App, as the parent is in charge of calling our component.
<Header />
Now that there are two items in the return they need to get wrapped in an enclosing element - let's use a div.
So this Header looks vaguely like an HTML self closing tag. But note that Header is uppercase. That is because it is the name of a component - a class component. And we are using JSX - the hybrid of JavaScript and HTML to call the component.

Now we have a nested component. And we can repeat this process of nesting components to our heart's content. Create another component and call it.





# Magic 8 ball
From GitHub classroom - as a team assignment
clone the repo
This is the first taste of an actual React file structure. So let's poke around.

- package.json - we remember this from jest and inside here is exactly what the name implies - JSON, it is a collection of objects that allow our react app to function
- all the files here can be left as is
- the main action of the app is the two folders - public and src
- public holds the index.html - when we look at this file in the browser what we are seeing is the HTML and in the body is just this one div with an id of root. All of our React app is running through this one div.
- Next, we can look at the source file, this where we will be coding today.
- index.js - is rendering our component to the browser by targeting the div element with the id of root. And it is rendering App.
- App.js is what is being rendered to the browser

- Class App extends react - show destructuring
- constructor/super/state object
- the state object is how we create persistent storage in React and when we say components manage their own state - this is what we mean
- you can't use "this" in a constructor until you have called super - it establishes class hierarchy



import/ export
readme
yarn
yarn start
hot reload

Update the content and see it respond in the browser - this is why it is called React
constructor - high up with the render in the pecking order
