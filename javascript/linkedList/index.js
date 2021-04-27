'use strict';

const LinkedList = require('./linked-list.js');

const ll = new LinkedList();

console.log('new linked list', ll);

ll.append(10);

ll.append(20);

console.log('linked list', ll);

ll.insert(3);

console.log('linked list', ll);

ll.insertBefore(10, 13);

console.log('linked list', ll);

ll.insertAfter(3, 72);

console.log('linkedlist', ll);

const string = ll.toString();

console.log(string);

const kthValue = ll.kthFromEnd(3);

console.log('kth value', kthValue);


