'use strict';

const { arrayBinarySearch } = require('../array-binary-search.js');

describe('***ARRAY BINARY SEARCH***', () => {

  it('should return the index of the searchkey in the sorted array', () => {
    const sortedArr = [2, 4, 19, 17, 18, 19, 23, 65];
    const val = 23;
    expect(arrayBinarySearch(sortedArr, val)).toEqual(6);
  });

  it('should return the last index if the searchkey is at the end of array', () => {
    const sortedArr = [12, 13, 44, 77];
    const val = 77;
    expect(arrayBinarySearch(sortedArr, val)).toEqual(sortedArr.length-1);
  });

  it('should return 0 index if search key is at the beginning of array', () => {
    const sortedArray = [1, 3, 4];
    const val = 1;
    expect(arrayBinarySearch(sortedArray, val)).toEqual(0);
  });

  it('should return -1 if search key is not in array', () => {
    const sortedArray = [1, 3, 4];
    const val = 7;
    expect(arrayBinarySearch(sortedArray, val)).toEqual(-1);
  });

});
