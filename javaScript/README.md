# JavaScript

#### What is JS and how it works?

<p>Any modern web page contains three distinct layers of code put together by the browser.</p>

* The first layer is the HTML document. This is where the content lives, marked up in a language that makes it  easy for the browser to parse.

* The second layer is collection of CSS Rules. This is the code that instructs the browser how to display the HTML Markup. HTML and CSS works together for a perfect separation of concerns. HTML handles the content, CSS is presentation.

* The third layer is JavaScript, which is interactive layer. JS is a scripting language, that runs in the browser and interacts with HTML Markup and CSS rules to change what you see and what you can do.

When you point your browser at an address with an HTML document, it first pulls down the HTML and indexes its content. Then downloads any CSS and JS documents referenced runs the JS to see if any of the HTML markup is changed, applies the CSS to make everything looked it's supposed to, and finally leaves JS running in the background in case an interaction or event triggers further scripts.<br>
In short, JS is a scripting language, that allows you to write small programs that run in the browser and change the HTML and CSS of the current document

* ECMAScript: Kind of JS, in development
* jQuery:
  * Library of JS functions
  * Introduces CSS-like syntax and several visual and UI enhancements
  * Simplifies the use of JS in websites
  * An abstraction of the core language

* JS Frameworks: AngularJS, React, Vue.js, and so on are front-end application frameworks used to simplify the building of advanced interactive web-based applications.
* We have JS platforms and runtime environments like Node.js. These tools allow us to use JS as a server site programming language which kind of goes against the idea that JS is something that runs in the browser.

#### How to use JS with/within HTML page
We can either write JS code directly in html page or we can write a separate .js file and tell download that file along with html. But when large file or more number of files are there, we can write separate .js file and refer that inside HTML file. It's always better to reference js files at bottom of html file.

#### JavaScript loading methods
* Right away loading : ``<script src="script.js"></script>``
  * If we load it right away  1) HTML parsing will done until it encounters JavaScript, then 2) the JS file will be loaded. 3)Execute it immediately and then continue parsing HTML page again. <b>This is JavaScript render blocking</b>

* Asynchronous loading: `<script src="script.js" async></script>`
  * The JS file will be download along side the HTML and render blocking only kicks in when the script is executed.
* Deferred loading: `<script src="script.js" defer></script>`
  * If we defer the script, loading and execution of the file, even if it's referenced in the head only happens when everything else is loaded.

#### JavaScript Rules
1. JS is Case Sensitive
2. camelCase is mostly used and acceptable. Variables start with lowercase letter. Objects and classes start with uppercase letter. Constants are all-caps.
3. Whitespace Matters (to Humans)
4. End Each Statement with a Semicolon
5. Use Comments Liberally (// or /* */)

##### Variables in JS

* Variables in JS should start with keyword var
* In browser without using var keyword we can create Variables. But it creates problems of scope of Variables. So it's always recommended to declare variables with var keyword
* JS is weekly typed language. So we no need to care what type of content will go into a variable.
* So a variable is a generic container

#### Data Types in JavaScript
* Numeric
* String:
  * We can use single/double quotes. We can put anything between these quotes. But when we are using hyphens or quotes we need to extra careful. If you want to use double quotes inside a string, wrap the string using single quotes.
* Boolean: true/false
* null
  * var emptyvar = null
* undefined
  * we create a variable but don't set it to anything
* Symbol

@ we can use typeof to know what type of data is in the variable `typeof variableName`

#### Operators in JavaScript
* = ---> assignment
* +-*/ shorthand Operators also works with these like +=
* Unary Operators: ++, --
* If we are try to do math operation on a number and a string, we get `NaN` which means Not a Number

##### Conditions
* If, else, == || && != TernayOperator

##### Arrays
* Index start with 0
* var aryName = new Array("1", "two", "three")

* <b>In JS objects have properties and Methods</b>
* properties are pieces of meta information about the object
* Methods are functions that belongs to the object

#### Functions
* Named functions
* Anonymous functions
* Immediately invoked function expressions

```
def functionName(parameter1, param2){
  do something;
  return something;
}
```

* Anonymous functions don't have a name so the parentheses appear right after the function. Immediately invoked function expressions.

```
(function (){
  var result = 12/0.75;
  console.log("something")
}())
```

* Named functions same as functions in c but starts with keyword function instead of data type
* The browser runs the anonymous functions immediately when it's encountered if that function wraps up with parenthesis.
* So if we ant to pass some arguments to the anonymous function, we should define them before definition of the function.

##### Scope of bariables

* When we declare a variable inside a function but without using a var keyword, it's scope becomes global instead of local. This leads to lot of confusions. So it is always recommended to use var keyword before for declaring a variable.

* const: is a constant variable. This can't be changed once defined
* let: Block scope variable. Smaller scope than var

```
function logScope(){
  var localVar = 2;
  if (localVar){
    var localVar = "99"
    console.log("nested localVar is ", localVar);
  }
  console.log("Outside localVar is ", local)
}
```

* Above program prints 99 both times. To avoid this we use let. instead of var keyword use `let` keyword to print 99 inside and 2 Outside.

* JS is a object oriented language. But little sloppy

* To access items inside the object we use dot notation `objectName.itemName` we can achieve this using bracket notation also `objectName["itemName"]`

* The reason for two types of notations is, mantimes we may get objects from somewhere else like output of PHP or something. These items may be like this `WP:Image`. If we try to access this using dot notation that becomes `objectName.WP:image`, which is unreadable and gives error also. In these type cases, bracket notation is very useful.

#### Closures
refer objects.js for closure example code
> Closure is a function inside a function that relies on variables in the outside function to work

* MDN article on closures explains how this works clearly.

### DOM: The document object model

* The browser is an Object and the document that displays is an object too.
* The browser itself has long list of objects including browser windows, the document inside the window, the navigation buttons, the location or URL and more. These objects are modeled by `BOM (Browser Object Model)`.
* Since all these are objects, we can interact with all of these in the same way we interact with other objects.
* Window is the top level object in the BOM (window.open() opens a new tab in the browser), and it has ton of properties and methods you can use to interact with browser.
* We can see all properties and methods for window in `https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference`
* Most of the methods of window object are made for browser only. But we mostly interact with document (either window.docuement or directly we can call document since js already lives inside the document). For this DOM is useful.
* Browser create a node tree for document. How all things are structured inside the document.
* We can see the code version of this DOM (node tree) in the Elements section of developers tools. We can select any node in the browser and can see what styles and properties applied to that node.
*  DOM properties examples are `document.body, document.url, document.title`.
* To reach an element/node inside body, we use DOM Methods.
* Examples of DOM Methods are
```
document.getElementById("element id");
document.getElementsByClassName("class name");
document.getElementsByTagName("THML tag");
```

* Get the first element matching specified selectors(s):
`document.querySelector(".main-nav a")`

* Get all elements matching specified selector(s):
`document.querySelectorAll(".post-content p")`

* For example `document.querySelectorAll(".social-nav a[herf*='linkedin.com']")` will gives all the elements which pointing to linkedin.com in the document.

* The purpose of getting an element using findById or etc... methods is to do something with that element like changing the text, change an image reference, change className or ID or HTML.
