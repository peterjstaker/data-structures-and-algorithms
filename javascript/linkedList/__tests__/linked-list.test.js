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

  it('should return correct boolean value on includes method', () => {
    let list = new LL();

    expect(list.includes(13)).toEqual(false);

    list.insert(13);

    expect(list.includes(13)).toEqual(true);
    expect(list.includes(31)).toEqual(false);
    expect(list.includes(1)).toEqual(false);
  });

  it('should return the correct string representation of the linked list', () => {
    let list = new LL();
    expect(list.toString()).toEqual('NULL');

    list.append(7);
    expect(list.toString()).toEqual('{ 7 } -> NULL');

    list.append(17);
    expect(list.toString()).toEqual('{ 7 } -> { 17 } -> NULL');

  });

});
