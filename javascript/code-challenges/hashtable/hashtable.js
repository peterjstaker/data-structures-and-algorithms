'use strict';

class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

class LL {
  constructor() {
    this.head = null;
  }

  add(val) {
    let node = new Node(val);

    if(!this.head) {
      this.head = node;
    } else {
      node.next = this.head;
      this.head = node;
    }
  }

  getList() {
    if (!this.head) return 'no list';

    let current = this.head;

    let list = [];
    while(current) {
      list.push(current.val);
      current = current.next;
    }
    return list;
  }

}

class Hashmap {

  constructor(size) {
    this.storage = new Array(size);
    this.size = size;
  }

  hash(key) {
    return key.split('').reduce((acc, cur) => {
      return acc + cur.charCodeAt(0);
    }, 0) * 19 % this.size;
  }

  add(key, val) {
    let hash = this.hash(key);

    if(!this.storage[hash]) {
      let ll = new LL();
      ll.add([key, val]);
      this.storage[hash] = ll;
    } else {
      this.storage[hash].add([key, val]);
    }
  }

  contains(key) {
    let hash = this.hash(key);
    if(!this.storage[hash]) return false;
    let ll = this.storage[hash];
    if(!ll.head){
      return false;
    } else {
      let current = ll.head;
      if(current.val[0] === key) return true;

      while(current.next) {
        current = current.next;
        if(current.val[0] === key) return true;
      }

      if(current.next.val[0] === key) return true;
    }
    return false;
  }

  get(key) {
    if(!this.contains(key)) return null;

    let hash = this.hash(key);
    let ll = this.storage[hash];
    let current = ll.head;

    const results = ll.getList().filter(pair => pair[0] === key);

    if (results.length > 1) {
      return results.map(pair => pair[1]);
    }

    if(current.val[0] === key) return current.val[1];

    while(current.next) {
      current = current.next;
      if(current.val[0] === key) return current.val[1];
    }

    if(current.next.val[0] === key) return current.val[1];

  }

}

module.exports = Hashmap;
