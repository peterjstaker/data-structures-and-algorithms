'use strict';

const LL = require('../linked-list.js');
const zipLists = require('../ll-zip/ll-zip.js');

describe('Linked List', () => {

  it('should create an empty LL on instantiation', () => {
    let list = new LL();
    expect(list.head).toEqual(null);
  });

  it('should append a node to the list', () => {
    let list = new LL();
    let first = 1;
    let second = 2;

    list.append(first);
    expect(list.head.value).toEqual(1);

    list.append(second);
    list.append(3);
    list.append(4);
  });

  it('should insert a node to the list', () => {
    let list = new LL();
    let first = 1;
    let second = 2;

    list.append(first);
    list.insert(second);
    expect(list.head.value).toEqual(2);
  });

  it('should return correct boolean on includes method', () => {
    let list = new LL();

    expect(list.includes(13)).toEqual(false);

    list.insert(13);

    expect(list.includes(13)).toEqual(true);
    expect(list.includes(31)).toEqual(false);
    expect(list.includes(1)).toEqual(false);
  });

  it('should return the correct string representation of linked list', () => {
    let list = new LL();
    expect(list.toString()).toEqual('NULL');

    list.append(7);
    expect(list.toString()).toEqual('{ 7 } -> NULL');

    list.append(17);
    expect(list.toString()).toEqual('{ 7 } -> { 17 } -> NULL');

  });

  it('should return linked list with new node inserted before given value on insertBefore', () => {
    let list = new LL();
    list.append(1);
    list.append(2);
    list.append(3);
    list.insertBefore(2, 9999);
    expect(list.toString()).toEqual('{ 1 } -> { 9999 } -> { 2 } -> { 3 } -> NULL');
  });

  it('should return linked list with new node inserted after given value on insertAfter', () => {
    let list = new LL();
    list.append(1);
    list.append(2);
    list.append(3);
    list.insertAfter(2, 9999);
    expect(list.toString()).toEqual('{ 1 } -> { 2 } -> { 9999 } -> { 3 } -> NULL');
  });

  it('should throw an error when k is greater than length of linked list', () => {
    let list = new LL();
    list.append(1);
    list.append(2);
    list.append(3);
    expect(() => list.kthFromEnd(4)).toThrow('k should be less than length of linked list');
  });

  it('should throw an error when k and the length of linked list are the same', () => {
    let list = new LL();
    list.append(1);
    list.append(2);
    list.append(3);
    expect(() => list.kthFromEnd(3)).toThrow('k should be less than length of linked list');
  });

  it('should throw an error when k is not a positive integer', () => {
    let list = new LL();
    list.append(1);
    list.append(2);
    list.append(3);
    expect(() => list.kthFromEnd(-3)).toThrow('k is not a positive integer');
  });

  it('should work for linked list with size of 1', () => {
    let list = new LL();
    list.append(1);
    expect(() => list.kthFromEnd(1)).toThrow('k should be less than length of linked list');
    expect(list.kthFromEnd(0)).toEqual(1);
  });

  it('should return kth value from end of linked list', () => {
    let list = new LL();
    list.append(1);
    list.append(2);
    list.append(3);
    list.append(4);
    list.append(5);
    list.append(6);
    list.append(7);
    expect(list.kthFromEnd(3)).toEqual(4);
  });

  it('should zip two linked lists of equal size', () => {
    let list1 = new LL();
    list1.append(1);
    list1.append(2);
    list1.append(3);
    let list2 = new LL();
    list2.append(9);
    list2.append(8);
    list2.append(7);
    const zippedList = zipLists(list1, list2);
    expect(zippedList.toString()).toEqual('{ 1 } -> { 9 } -> { 2 } -> { 8 } -> { 3 } -> { 7 } -> NULL');
  });

  it('should zip two linked lists of different size', () => {
    let list1 = new LL();
    list1.append(1);
    list1.append(2);
    list1.append(3);
    let list2 = new LL();
    list2.append(9);
    list2.append(8);
    const zippedList = zipLists(list1, list2);
    expect(zippedList.toString()).toEqual('{ 1 } -> { 9 } -> { 2 } -> { 8 } -> { 3 } -> NULL');
  });

  it('should zip two linked lists of size 1', () => {
    let list1 = new LL();
    list1.append(1);
    let list2 = new LL();
    list2.append(9);
    const zippedList = zipLists(list1, list2);
    expect(zippedList.toString()).toEqual('{ 1 } -> { 9 } -> NULL');
  });

});
