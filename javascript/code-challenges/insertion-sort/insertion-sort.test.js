'use strict';

const insertionSort = require('./insertionSort');

describe('insertion sort', () => {

  it('Can successfully sort an array', () => {
    let arr = [8,4,23,42,16,15];
    let expected = [4,8,15,16,23,42];

    expect(insertionSort(arr)).toEqual(expected);
  });

  it('Can successfully sort a reverse-sorted array', () => {
    let arr = [20,18,12,8,5,-2];
    let expected = [-2,5,8,12,18,20];

    expect(insertionSort(arr)).toEqual(expected);
  });

  it('Can successfully sort an array with few uniques', () => {
    let arr = [5,12,7,5,5,7];
    let expected = [5,5,5,7,7,12];

    expect(insertionSort(arr)).toEqual(expected);
  });

  it('Can successfully sort a nearly-sorted array', () => {
    let arr = [2,3,5,7,13,11];
    let expected = [2,3,5,7,11,13];

    expect(insertionSort(arr)).toEqual(expected);
  });

});
