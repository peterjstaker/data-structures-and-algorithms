'use strict';

const leftJoin = require('./leftJoin');
const Hashmap = require('../hashtable/hashtable');

describe('left join', () => {

  it('Can left join two hashmaps', () => {
    let left = new Hashmap(3);
    let right = new Hashmap(3);

    left.add('fond', 'enamored');
    left.add('wrath', 'anger');
    left.add('diligent', 'employed');

    right.add('fond', 'averse');
    right.add('wrath', 'delight');
    right.add('diligent', 'idle');

    let joined = leftJoin(left, right).storage;

    joined.forEach(bucket => console.log(bucket.head.val, bucket.head.next.val));

    expect(joined[0].head.val[1]).toEqual('averse');
    expect(joined[0].head.next.val[1]).toEqual('enamored');
    expect(joined[1].head.val[1]).toEqual('delight');
    expect(joined[1].head.next.val[1]).toEqual('anger');
    expect(joined[2].head.val[1]).toEqual('idle');
    expect(joined[2].head.next.val[1]).toEqual('employed');
  });

  it('Can left join two hashmaps and exclude any values from the right hashmap without matching key', () => {
    let left = new Hashmap(3);
    let right = new Hashmap(3);

    left.add('fond', 'enamored');
    left.add('wrath', 'anger');
    left.add('diligent', 'employed');

    right.add('fond', 'averse');
    right.add('wrath', 'delight');
    right.add('dil', 'idle');

    let joined = leftJoin(left, right).storage;

    expect(joined[2].head.val[1]).toEqual('employed');
    expect(joined[2].head.next).toEqual(null);
  });

  it('Can left join two hashmaps with varying size', () => {
    let left = new Hashmap(3);
    let right = new Hashmap(4);

    left.add('fond', 'enamored');
    left.add('wrath', 'anger');
    left.add('diligent', 'employed');

    right.add('fond', 'averse');
    right.add('wrath', 'delight');
    right.add('diligent', 'idle');
    right.add('relaxed', 'stoned');

    let joined = leftJoin(left, right).storage;

    joined.forEach(bucket => console.log(bucket.head.val, bucket.head.next.val));

    expect(joined[0].head.val[1]).toEqual('averse');
    expect(joined[0].head.next.val[1]).toEqual('enamored');
    expect(joined[1].head.val[1]).toEqual('delight');
    expect(joined[1].head.next.val[1]).toEqual('anger');
    expect(joined[2].head.val[1]).toEqual('idle');
    expect(joined[2].head.next.val[1]).toEqual('employed');
  });

});
