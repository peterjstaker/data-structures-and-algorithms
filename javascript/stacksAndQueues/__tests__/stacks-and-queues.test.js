'use strict';

const Queue = require('../queue');
const Stack = require('../stack');

describe('Stack', () => {

  it('Can successfully instantiate an empty stack', () => {
    let stack = new Stack();
    expect(stack.top).toEqual(null);
  });

  it('Can successfully push onto a stack', () => {
    let stack = new Stack();
    stack.push(1);
    expect(stack.top.value).toEqual(1);
  });

  it('Can successfully push mutliple values onto a stack', () => {
    let stack = new Stack();
    stack.push(2);
    stack.push(3);
    expect(stack.top.value).toEqual(3);
    expect(stack.top.next.value).toEqual(2);
  });

  it('Can successfully pop off the stack', () => {
    let stack = new Stack();
    const expected = 2;
    stack.push(1);
    stack.push(expected);
    expect(stack.pop()).toEqual(expected);
  });

  it('Can successfully empty a stack after multiple pops', () => {
    let stack = new Stack();
    stack.push(2);
    stack.push(3);
    stack.pop();
    stack.pop();
    expect(stack.top).toEqual(null);
  });

  it('Calling pop or peek on empty stack raises exception', () => {
    let stack = new Stack();
    expect(()=>stack.pop()).toThrow('NullValueException');
    expect(()=>stack.peek()).toThrow('NullValueException');
  });

});

// Can successfully push onto a stack
// Can successfully push multiple values onto a stack
// Can successfully pop off the stack
// Can successfully empty a stack after multiple pops
// Can successfully peek the next item on the stack
// Can successfully instantiate an empty stack
// Calling pop or peek on empty stack raises exception

// Can successfully enqueue into a queue
// Can successfully enqueue multiple values into a queue
// Can successfully dequeue out of a queue the expected value
// Can successfully peek into a queue, seeing the expected value
// Can successfully empty a queue after multiple dequeues
// Can successfully instantiate an empty queue
// Calling dequeue or peek on empty queue raises exception

describe('Queues', () => {

  it('Can successfully instantiate an empty queue', () => {
    let queue = new Queue();
    expect(queue.isEmpty()).toEqual(true);
  });

  it('Can successfully enqueue into a queue', () => {
    let queue = new Queue();
    queue.enqueue(1);
    expect(queue.rear.value).toEqual(1);
  });

  it('Can successfully enqueue multiple values into a queue', () => {
    let queue = new Queue();
    queue.enqueue(1);
    queue.enqueue(2);
    expect(queue.front.value).toEqual(1);
    expect(queue.rear.value).toEqual(2);
  });

  it('Can successfully dequeue out of a queue the expected value', () => {
    let queue = new Queue();
    const expected = 1;
    queue.enqueue(1);
    queue.enqueue(2);
    expect(queue.dequeue()).toEqual(expected);
  });

  it('Can successfully empty a queue after multiple dequeues', () => {
    let queue = new Queue();
    queue.enqueue(1);
    queue.enqueue(2);
    queue.dequeue();
    queue.dequeue();
    expect(queue.isEmpty()).toEqual(true);
  });

  it('Calling dequeue or peek on empty stack raises exception', () => {
    let queue = new Queue();
    expect(()=>queue.dequeue()).toThrow('NullValueException');
    expect(()=>queue.peek()).toThrow('NullValueException');
  });

});
