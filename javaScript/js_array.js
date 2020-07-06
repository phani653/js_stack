// var date = new Date();
// document.body.innerHTML = "<h1> Today date is "+date+"</h1>"
var pens;
pens = ["red", "blue", "green"];

console.log("Before: ", pens);
console.log("pens array lenght is ", pens.length);

// Reverese the array
pens.reverse()
console.log("After reverse: ", pens);

// Remove the first element of the array
pens.shift()
console.log("After shift method array is ",pens);

// Add comma-separated list of elements to the front of the array
pens.unshift("yellow", "purple");
console.log("After unshift array is ", pens)

// To remove the last value of the array
pens.pop();
console.log("Array after pop operation is ", pens)

// Add comma-separated list of elements to end of the array
pens.push("violet", "brown")
console.log("Array after push operation is ", pens)

// Find a specified index/position in the array and remove n elements from that
pens.splice(2,1) // this removes 1 items starting from 2nd index
console.log("Array after applying splice is ", pens)

// create a copy of an array
var newPens = pens.slice();
console.log("new slice array is ", newPens)

// Search for an element from given index and get it's index value
var brownIndex = pens.indexOf("brown", 2);
console.log("brown pen index value is ", brownIndex)

// Return the items in an array as a comman separated
var arrayString = pens.join("-") //if nothing specified here default comman is used
console.log("String from array is ", arrayString);
