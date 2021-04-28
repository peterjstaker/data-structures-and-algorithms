'use strict';

const LinkedList = require('./linked-list.js');
const zipLists = require('./ll-zip/ll-zip.js');

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

const ll2 = new LinkedList();

ll2.append(9);
ll2.append(8);
ll2.append(7);

const zipped = zipLists(ll, ll2);

console.log('zipped', zipped.toString());


