'use strict';

const LinkedList = require('./linked-list.js');

const ll = new LinkedList();

console.log('new linked list', ll);

ll.append(10);

ll.append(20);

console.log('linked list', ll);

ll.insert(3);

console.log('linked list', ll);
