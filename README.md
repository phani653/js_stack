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
