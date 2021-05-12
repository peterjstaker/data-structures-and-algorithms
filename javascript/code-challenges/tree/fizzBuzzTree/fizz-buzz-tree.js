'use strict';

function fizzBuzzTree(tree) {

  function fizzBuzz(value){
    let newValue;
    if(value % 15 === 0){
      newValue = 'FizzBuzz';
    } else if(value % 5 === 0){
      newValue = 'Buzz';
    } else if(value % 3 === 0){
      newValue = 'Fizz';
    } else {
      newValue = value.toString();
    }
    return newValue;
  }

  function _walk(tree) {
    let res = {};
    for (const key in tree) {
      const value = tree[key];
      if (value && typeof value === 'object') {
        res[key] = _walk(value);
      } else {
        res[key] = fizzBuzz(value);
      }
    }
    return res;
  }
  return _walk(tree);

}

module.exports = fizzBuzzTree;



