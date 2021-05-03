'use strict';

const Node = require('./node.js');

class Stack {
  constructor() {
    this.top = null;
  }

  isEmpty(){
    return this.top === null;
  }

  push(value){
    let node = new Node(value);
    node.next = this.top;
    this.top = node;
  }

  pop(){
    if(this.isEmpty()) throw new Error('NullValueException');
    let temp = this.top;
    this.top = temp.next;
    temp.next = null;
    return temp.value;
  }

  peek(){
    if(this.isEmpty()) throw new Error('NullValueException');
    return this.top.value;
  }
}

module.exports = Stack;

// Stack.prototype.push = function(value) {
//   this[this.length++] = value;
//   return this;
// };

// Stack.prototype.pop = function() {
//   if(this.length === 0) return 'empty stack';

//   const result = this[--this.length];

//   delete this[this.length];
//   return result;
// };

// Stack.prototype.peek = function() {
//   return this[this.length-1];
// };

// let stack = new Stack();
// stack.push(3);
// console.log(stack.isEmpty());

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