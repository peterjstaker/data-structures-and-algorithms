'use strict';

const Queue = require('./queue');
const Stack = require('./stack');

// Manual testing

let stack = new Stack();
stack.push(3);
stack.push(4);
// console.log(stack.isEmpty());
// console.log(stack);
// console.log('pop', stack.pop());
// console.log(stack);
// console.log('pop', stack.pop());
// console.log(stack);

// console.log('empty stack', stack);
// console.log('stack with 1 item', stack.push('first'));
// console.log('stack with 2 items', stack.push('second'));
// console.log('stack with 3 items', stack.push('third'));
// console.log('popped off the stack', stack.pop());
// console.log('stack after pop:', stack);
// console.log('popped off the stack', stack.pop());
// console.log('popped off the stack', stack.pop());
// console.log('empty stack', stack);
// console.log('empty stack attempting to be popped', stack.pop());

let queue = new Queue();
queue.enqueue(1);

// console.log('empty queue', queue);
// console.log('enqueue first', queue.enqueue(1));
// console.log('enqueue second', queue.enqueue(2));
// console.log('enqueue third', queue.enqueue(3));
// console.log('queue', queue);
// console.log('dequeue', queue.dequeue());
// console.log(queue);
// console.log('dequeue', queue.dequeue());
// console.log(queue);
// console.log('dequeue', queue.dequeue());
// console.log(queue);
// console.log('dequeue', queue.dequeue());
// console.log(queue);
