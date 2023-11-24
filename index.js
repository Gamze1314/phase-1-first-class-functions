function receivesAFunction(callback) {
  console.log("receives a function and calls it");
  
  callback();
}

const spy = function callback() {
console.log("mycallback function"); 
 
}
receivesAFunction(spy);

function returnsANamedFunction(y) {
    return function myfunction (x) { 
        console.log("returns a named function"); 
    };
}
const myFunction = returnsANamedFunction(y); 

myfunction(x)

function returnsAnAnonymousFunction() {
    return function() {
      console.log('retuns an anonymous function'); 
    }
  }
  
  const anonymousFunction = returnsAnAnonymousFunction();
  anonymousFunction();