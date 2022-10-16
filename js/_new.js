function Dog(name) {
  this.name = name;
}

Dog.prototype.sayName = function() {
  console.log('my name is ' + this.name);
}

Dog.prototype.brak = function() {
  console.log('brak')
}


function _new(Ctar, ...args) {
  if(!Ctar.hasOwnProperty('prototype')) {
    throw new TypeError('Ctar is not a constructor')
  }
  const obj = Object.create(Ctar.prototype);
  const result = Ctar.apply(obj, args);
  if (result !== null && (typeof result === 'object' || typeof result === 'function')) {
    return result;
  }

  return obj;
}

const dog = _new(Dog, 'sunxiaoju');
dog.sayName();
dog.brak();
console.log(dog instanceof Dog);