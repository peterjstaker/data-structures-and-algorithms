'use strict';

const { insertShiftArray } = require('../array-shift');

describe('***ARRAY SHIFT***', () => {

  it('should return an array whose length is original array length plus one', () => {
    const originalArray = [3, 2, 65];
    const val = 1;
    expect(insertShiftArray(originalArray, val).length).toEqual(4);
  });

  it('should work for array with even length', () => {
    const evenArray = [13, 12, 45, 21];
    const val = 33;
    expect(insertShiftArray(evenArray, val)).toEqual([13, 12, 33, 45, 21]);
  });

  it('should work for array with odd length', () => {
    const oddArray = [1, 3, 4];
    const val = 2;
    expect(insertShiftArray(oddArray, val)).toEqual([1, 2, 3, 4]);
  });
  
});
