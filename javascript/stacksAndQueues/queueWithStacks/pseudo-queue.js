'use strict';

const Stack = require('../stack.js');

class PseudoQueue {
  constructor(){
    this.stack1 = new Stack();
    this.stack2 = new Stack();
  }

  enqueue(value){
    this.stack1.push(value);
  }

  dequeue() {
    if(!this.stack2.top){
      if(!this.stack1.top) throw new Error('NullValueException');
      while(this.stack1.top){
        let val = this.stack1.pop();
        this.stack2.push(val);
      }
    }
    return this.stack2.pop();
  }

  peek(){
    if(this.isEmpty()) throw new Error('NullValueException');
    return this.stack2.top;
  }

  isEmpty() {
    return (!this.stack1.top && !this.stack2.top);
  }

}

module.exports = PseudoQueue;
