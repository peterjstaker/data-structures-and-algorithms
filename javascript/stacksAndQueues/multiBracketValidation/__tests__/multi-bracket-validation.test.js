'use strict';

const isValid = require('../multi-bracket-validation.js');

describe('multi-bracket validation', () => {

  it('should return true if brackets are balanced', () => {
    let str = '{({})}';
    expect(isValid(str)).toEqual(true);
  });

  it('should return true if brackets are balanced', () => {
    let str = '{}[]()';
    expect(isValid(str)).toEqual(true);
  });

  it('Should return false if an opening bracket has no corresponding closing bracket', () => {
    let str = '{({[]})';
    expect(isValid(str)).toEqual(false);
  });

  it('should return false if closing bracket has no corresponding opening bracket', () => {
    let str = '()({[]})}';
    expect(isValid(str)).toEqual(false);
  });

  it('should return false if brackets are in wrong order', () => {
    let str = '({[}])[]';
    expect(isValid(str)).toEqual(false);
  });
});
