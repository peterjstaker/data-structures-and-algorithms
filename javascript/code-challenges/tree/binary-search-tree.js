'use strict';

const Node = require('./node');

class BinarySearchTree {
  constructor() {
    this.root = null;
  }

  preOrder() {
    let results = [];
    let _walk = node => {
      results.push(node.value);
      if(node.left) _walk(node.left);
      if(node.right) _walk(node.right);
    };
    _walk(this.root);
    return results;
  }

  inOrder() {
    let results = [];
    let _walk = node => {
      if(node.left) _walk(node.left);
      results.push(node.value);
      if(node.right) _walk(node.right);
    };
    _walk(this.root);
    return results;
  }

  postOrder() {
    let results = [];
    let _walk = node => {
      if(node.left) _walk(node.left);
      if(node.right) _walk(node.right);
      results.push(node.value);
    };
    _walk(this.root);
    return results;
  }

  add(value) {
    let node = new Node(value);

    let _addValue = (currentNode, node) => {
      if(node.value < currentNode.value){
        if(!currentNode.left){
          currentNode.left = node;
        } else {
          _addValue(currentNode.left, node);
        }
      } else {
        if(!currentNode.right){
          currentNode.right = node;
        } else {
          _addValue(currentNode.right, node);
        }
      }
    };

    if(!this.root) {
      this.root = node;
    } else {
      _addValue(this.root, node);
    }

  }

  contains(value) {
    if(!this.root.value) return false;

    let _search = (currentNode, value) => {
      if(currentNode.value === value){
        return true;
      } else if(currentNode.value > value) {
        if(!currentNode.left) return false;
        return _search(currentNode.left, value);
      } else {
        if(!currentNode.right) return false;
        return _search(currentNode.right, value);
      }
    };

    return _search(this.root, value);
  }
}

module.exports = BinarySearchTree;
