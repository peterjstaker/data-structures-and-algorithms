'use strict';

const LL = require('../linked-list.js');

describe('Linked List', () => {

  it('should create an empty LL on instantiation', () => {
    let list = new LL();
    expect(list.head).toEqual(null);
  });

  it('should add a note to the list', () => {
    let list = new LL();
    let first = 1;
    let second = 2;

    list.append(first);
    expect(list.head.value).toEqual(1);

    list.append(second);
    list.append(3);
    list.append(4);

    console.log(list);
  });

  it('should insert a node to the list', () => {
    let list = new LL();
    let first = 1;
    let second = 2;

    list.append(first);
    list.insert(second);
    expect(list.head.value).toEqual(2);
    console.log(list);
  });

});
