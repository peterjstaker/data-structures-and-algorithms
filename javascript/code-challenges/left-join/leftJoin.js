'use strict';

function leftJoin (leftHashmap, rightHashmap){
  rightHashmap.storage.forEach(bucket => {
    if (leftHashmap.contains(bucket.head.val[0])) {
      let current = bucket.head;
      while(current.next){
        leftHashmap.add(current.val[0], current.val[1]);
      }
      leftHashmap.add(current.val[0], current.val[1]);
    }
  });
  return leftHashmap;
}

module.exports = leftJoin;
