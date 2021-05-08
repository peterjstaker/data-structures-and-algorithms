'use strict';

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
}

module.exports = BinaryTree;

