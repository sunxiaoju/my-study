
  Function.prototype._call = function(thisArgs, ...args) {
    let fn = this;
    thisArgs = thisArgs ? Object(thisArgs) : window;
    thisArgs.fn = fn;
    thisArgs.fn(...args);
    delete thisArgs.fn;
    // return res;
  } 
  function sum(num1, num2) {
    console.log('my name is ', this.name);
    console.log(num1 + num2)
  }
  let person = {
    name: 'sunxiaoju'
  }
  sum._call(person, 1, 2)