'use strict';

function _quickSort(arr, left = 0, right = arr.length-1){
  let idx;

  if(arr.length > 1){
    idx = partition(arr, left, right);

    if(left < idx-1){
      _quickSort(arr, left, idx-1);
    }

    if(idx < right){
      _quickSort(arr, idx, right);
    }

  }
  return arr;
}

function partition(arr, left, right) {
  let pivot = arr[Math.floor((right + left)/2)];
  let i = left;
  let j = right;
  while(i <= j){

    while(arr[i] < pivot){
      i++;
    }

    while(arr[j] > pivot){
      j--;
    }

    if(i <= j){
      swap(arr, i, j);
      i++;
      j--;
    }
  }
  return i;
}

function swap(arr, i, j){
  let temp = arr[i];
  arr[i] = arr[j];
  arr[j] = temp;
}

module.exports = _quickSort;
