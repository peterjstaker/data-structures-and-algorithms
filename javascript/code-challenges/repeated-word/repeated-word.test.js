'use strict';

const repeatedWord = require('./repeated-word');

describe('first repeated word', () => {

  it('Can return the first repeated word', () => {
    const str = 'I guess it was the best of times, it was the worst of times.';
    const expected = 'it';

    expect(repeatedWord(str)).toEqual(expected);
  });

  it('Can return the first repeated word regardless of case', () => {
    const str = 'It was the best of times, it was the worst of times.';
    const expected = 'it';

    expect(repeatedWord(str)).toEqual(expected);
  });

  it('Can return null if there are no repeats', () => {
    const str = 'It was the best of times.';
    const expected = null;

    expect(repeatedWord(str)).toEqual(expected);
  });

});
