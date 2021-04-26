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
      let current = this.head; // start the traversal at the beginning (head) of ::

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
}

module.exports = LinkedList;
