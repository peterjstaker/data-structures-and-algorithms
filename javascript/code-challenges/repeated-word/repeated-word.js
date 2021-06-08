const Hashmap = require('../hashtable/hashtable');

function repeatedWord(str){
  let words = str.toLowerCase().split(' ');
  let hashmap = new Hashmap(words.length);
  for(let i = 0; i < words.length; i++){
    if(!hashmap.contains(words[i])){
      hashmap.add(words[i], words[i]);
    } else {
      return words[i];
    }
  }
  return null;
}

module.exports = repeatedWord;
