'use strict';

const Node = require('./node.js');

class LinkedList {
  constructor() {
    this.head = null;
  }

  append(value) {
    // instantiate a new node to add to our LL
    let node = new Node(value);

    if(!this.head){
      this.head = node;
    } else {
      // traversal happens here
      let current = this.head; // start the traversal at the beginning (head) of :

      while(current.next) { // this is the actual traversal
        // console.log(current);
        current = current.next; // this moves you along in your traversal
      }

      current.next = node;
    }

    return this;
  }

  insert(value) {
    let node = new Node(value);

    node.next = this.head;

    this.head = node;

    return this;
  }

  includes(value) {
    if(!this.head) {
      return false;
    }
    let current = this.head;

    while (current.next) {
      if (current.value === value) {
        return true;
      }
      current = current.next;
    }

    if (current.value === value) {
      return true;
    }
    return false;
  }

  toString() {
    if(!this.head) {
      return 'NULL';
    }
    let strRepr = '';
    let current = this.head;
    while(current.next) {
      strRepr += `{ ${current.value} } -> `;
      current = current.next;
    }
    strRepr += `{ ${current.value} } -> NULL`;
    return strRepr;
  }

  insertBefore(value, newVal) {
    let node = new Node(newVal);
    let current = this.head;

    while(current.next.value !== value){
      current = current.next;
    }

    node.next = current.next;
    current.next = node;

    return this;
  }

  insertAfter(value, newVal) {
    let node = new Node(newVal);
    let current = this.head;

    while(current.value !== value){
      current = current.next;
    }

    node.next = current.next;
    current.next = node;

    return this;
  }

  kthFromEnd(k) {
    let length = 1;
    let current = this.head;

    while(current.next){
      length += 1;
      current = current.next;
    }

    if(k === 0){
      return current.value;
    } else if(k >= length){
      throw new Error('k should be less than length of linked list');
    } else if (k < 0) {
      throw new Error('k is not a positive integer');
    } else {
      current = this.head;
      for(let i = 1; i < length - k; i++){
        current = current.next;
      }
      return current.value;
    }
  }

  // iterateLinkedListRecursively = function(node, largest=0) {
  //   if(!node) {return largest; }
  //   if(node.value > largest) {largest = node,value; }
  //   return iterateLinkedListRecursively(node.next, largest);
  // }
}

module.exports = LinkedList;
