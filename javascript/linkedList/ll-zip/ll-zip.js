'use strict';

const LinkedList = require('../linked-list.js');

module.exports = function zipLists(list1, list2){

  const zippedList = new LinkedList();

  let current1 = list1.head;
  let current2 = list2.head;

  zippedList.append(current1.value);
  zippedList.append(current2.value);

  while(current1.next || current2.next) {

    if(current1.next){
      zippedList.append(current1.next.value);
      current1 = current1.next;
    }

    if(current2.next){
      zippedList.append(current2.next.value);
      current2 = current2.next;
    }

  }

  return zippedList;

};
