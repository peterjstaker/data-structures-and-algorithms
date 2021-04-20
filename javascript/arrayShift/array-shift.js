'use strict';

function insertShiftArray(array, value) {

  //initialize middle index
  let middleIdx = 0;
  // initialize new array
  const newArr = [];

  // if length is even, middle index is length/2
  // else length is odd, middle index is length+1/2
  array.length % 2 === 0 ? middleIdx = array.length/2 : middleIdx = (array.length - 1) / 2;

  // Loop through original array
  for(let i = 0; i < array.length; i++){
    // If index !== middle index, push value to new array
    // else push new value to new array and then push value to new array
    i === middleIdx ? newArr.push(value, array[i]) : newArr.push(array[i]);
  }

  // Return new array
  return newArr;
}

module.exports = { insertShiftArray };
