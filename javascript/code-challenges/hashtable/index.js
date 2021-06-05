const Hashmap = require('./hashtable.js');

let hashmap = new Hashmap(3);

hashmap.add('three', 'bobs');
hashmap.add('jar', 'boberson');
hashmap.add('jar', 'johnson');
hashmap.add('jar', 'thompson');
hashmap.add('raj', 'coolness');
hashmap.add('sal', 'samsonite');
hashmap.add('tim', 'miller');

console.log('CONTAINS', hashmap.contains('three'));
console.log('GET', hashmap.get('jar'));
console.log('GET', hashmap.get('raj'));
console.log('GET', hashmap.get('sal'));
console.log('GET', hashmap.get('tim'));
console.log('GET', hashmap.get('three'));

console.log('HASH', hashmap.hash('three'));

console.log(hashmap.storage);
