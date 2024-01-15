function receivesAFunction(callback) {
  callback()
};

const returnsANamedFunction = () => {
  return function namedFunction() {
    console.log('named function');
  };
};


const returnsAnAnonymousFunction = () => {
  return function(){
    console.log('returns an anonymous function')
  }
}