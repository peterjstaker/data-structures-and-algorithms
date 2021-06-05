'use strict';

const Hashtable = require('../hashtable.js');

describe('hashtable', () => {

  it('Can add a key/value to hashtable', () => {
    let hashtable = new Hashtable(3);
    const expected = 'bobs';

    hashtable.add('three', 'bobs');

    expect(hashtable.contains('three')).toBe(true);
    expect(hashtable.get('three')).toEqual(expected);
  });

  it('Can retrieve stored value using key', () => {
    let hashtable = new Hashtable(3);
    const expected = 'bobs';

    hashtable.add('three', 'bobs');

    expect(hashtable.contains('three')).toBe(true);
    expect(hashtable.get('three')).toEqual(expected);
  });

  it('Can return null for a key that does not exist in the hashtable', () => {
    let hashtable = new Hashtable(3);

    hashtable.add('three', 'bobs');
    hashtable.add('jar', 'boberson');
    hashtable.add('jar', 'johnson');
    hashtable.add('jar', 'thompson');
    hashtable.add('raj', 'coolness');
    hashtable.add('sal', 'samsonite');
    hashtable.add('tim', 'miller');

    expect(hashtable.contains('butts')).toBe(false);
    expect(hashtable.get('butts')).toEqual(null);
  });

  it('Can handle a collision within the hashtable', () => {
    let hashtable = new Hashtable(3);
    const expected = ['thompson', 'johnson', 'boberson'];

    hashtable.add('three', 'bobs');
    hashtable.add('jar', 'boberson');
    hashtable.add('jar', 'johnson');
    hashtable.add('jar', 'thompson');
    hashtable.add('raj', 'coolness');
    hashtable.add('sal', 'samsonite');
    hashtable.add('tim', 'miller');

    expect(hashtable.contains('jar')).toBe(true);
    expect(hashtable.get('jar')).toEqual(expected);
  });

  it('Can retrieve a value from a bucket within the hashtable that has a collision', () => {
    let hashtable = new Hashtable(3);
    const expected = ['thompson', 'johnson', 'boberson'];

    hashtable.add('three', 'bobs');
    hashtable.add('jar', 'boberson');
    hashtable.add('jar', 'johnson');
    hashtable.add('jar', 'thompson');
    hashtable.add('raj', 'coolness');
    hashtable.add('sal', 'samsonite');
    hashtable.add('tim', 'miller');

    expect(hashtable.contains('jar')).toBe(true);
    expect(hashtable.get('jar')).toEqual(expected);
    expect(hashtable.get('raj')).toEqual('coolness');
  });

  it('Can hash a key to an in-range value', () => {
    let hashtable = new Hashtable(3);
    let low = 0;
    let high = 2;
    let key = 'three';

    expect(hashtable.hash(key)).toBeGreaterThanOrEqual(low);
    expect(hashtable.hash(key)).toBeLessThanOrEqual(high);
  });

});
