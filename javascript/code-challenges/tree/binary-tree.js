'use strict';

const Queue = require('../../stacksAndQueues/queue');

class BinaryTree {
  constructor() {
    this.root = null;
  }

  preOrder() {
    // read, L, R
    let results = [];

    let _walk = node => {
      results.push(node.value);
      if(node.left) _walk(node.left);
      if(node.right) _walk(node.right);
    };

    _walk(this.root);
    return results;
  }

  inOrder(){
    // L, read, R
    let results = [];

    let _walk = node => {
      if(node.left) _walk(node.left);
      results.push(node.value);
      if(node.right) _walk(node.right);
    };

    _walk(this.root);
    return results;
  }

  postOrder(){
    // L, R, read
    let results = [];

    let _walk = node => {
      if(node.left) _walk(node.left);
      if(node.right) _walk(node.right);
      results.push(node.value);
    };

    _walk(this.root);
    return results;
  }

  findMaximumValue(){
    let max = this.root.value;

    let _walk = node => {
      if(node.left) _walk(node.left);
      if(node.value > max) max = node.value;
      if(node.right) _walk(node.right);
    };

    _walk(this.root);
    return max;
  }

  breadthTraversal() {
    let results = [];
    let queue = new Queue();

    queue.enqueue(this.root);

    while(!queue.isEmpty()){
      let node = queue.dequeue();
      if(node.left) queue.enqueue(node.left);
      if(node.right) queue.enqueue(node.right);
      results.push(node.value);
    }

    return results;
  }
}

module.exports = BinaryTree;

