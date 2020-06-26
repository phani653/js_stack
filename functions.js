console.log("-----Named functions----")
function findBiggestFraction(){
  a>b?console.log("a is bigger: ",a):console.log("b is bigger: ",b)
  return "hey"
}

var a = 3/4
var b = 5/7
var fn_output2 = findBiggestFraction()
console.log(fn_output2)

console.log("-----Anonymous functions-----")
var fr1 = 5/7;
var fr2 = 18/25;

var theBiggest = function(fr1, fr2){
  var result;
  fr1>fr2?result=["fr1",fr1]:result=["fr2",fr2];
  console.log(result);
  return result;
}

console.log(theBiggest(7/9, 13/6));
console.log(theBiggest)
// above line prints the entire function in but if we want to run This
// function and return exact value, wrap this function with braces and pass parameters if need

var anonymousFunction = (function(var1, var2){
  pk="phani"
  return var1*var2;
})(12,13)

console.log(anonymousFunction);
console.log(pk)

const PI = 22/7
console.log("Pi value is ",PI)
