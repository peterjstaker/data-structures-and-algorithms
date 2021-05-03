'use strict';

const Node = require('./node');

class Queue {
  constructor() {
    this.front = null;
    this.rear = null;
    this.length = 0;
  }

  isEmpty(){ return this.front === null; }

  enqueue(value){
    const node = new Node(value);
    if(this.isEmpty()){
      this.front = node;
      this.rear = node;
    } else if (this.length === 1){
      this.front.next = node;
      this.rear = node;
    } else {
      this.rear.next = node;
      this.rear = node;
    }

    this.length++;

    return this;
  }

  dequeue(){
    if(this.isEmpty()) throw new Error('NullValueException');
    if(!this.front.next){ this.rear = null; }
    let temp = this.front;
    this.front = temp.next;
    temp.next = null;
    return temp.value;
  }

  peek(){
    if(this.isEmpty()) throw new Error('NullValueException');
    if(!this.isEmpty())return this.front.value;
  }

}

module.exports = Queue;
