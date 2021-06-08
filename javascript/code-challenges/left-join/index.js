const leftJoin = require('./leftJoin');
const Hashmap = require('../hashtable/hashtable');

let left = new Hashmap(3);
let right = new Hashmap(3);

left.add('fond', 'enamored');
left.add('wrath', 'anger');
left.add('diligent', 'employed');

right.add('fond', 'averse');
right.add('wrath', 'delight');
right.add('diligent', 'idle');

console.log(left, right);

let joined = leftJoin(left, right).storage;

joined.forEach(bucket => console.log(bucket.head.val, bucket.head.next.val));
