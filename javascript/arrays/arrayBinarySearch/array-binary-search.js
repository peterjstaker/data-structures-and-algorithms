'use strict';

function arrayBinarySearch(array, searchKey) {
  let idx = -1;
  let min = 0;
  let max = array.length - 1;
  let middleIdx = 0;

  if(array[min] === searchKey){
    idx = min;
  }

  if(array[max] === searchKey){
    idx = max;
  }

  while(idx === -1 && (max-min > 1)) {
    console.log('inside loop');
    (max - min) % 2 === 0 ? middleIdx = (max - min) / 2 : middleIdx = (max - min - 1) / 2;

    if(array[min + middleIdx] === searchKey){
      idx = min + middleIdx;
    } else if (array[min + middleIdx] < searchKey){
      min = min + middleIdx;
    } else {
      max = min + middleIdx;
    }
  }
  return idx;
}

module.exports = { arrayBinarySearch };
