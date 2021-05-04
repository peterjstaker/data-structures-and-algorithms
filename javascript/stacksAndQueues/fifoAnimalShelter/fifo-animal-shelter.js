'use strict';

const Queue = require('../queue.js');

class AnimalShelter{
  constructor(){
    this.cats = new Queue();
    this.dogs = new Queue();
  }

  enqueue(animal){
    if(animal.type === 'dog'){
      this.dogs.enqueue(animal);
      return this;
    }
    if(animal.type === 'cat'){
      this.cats.enqueue(animal);
      return this;
    }
  }

  dequeue(pref){
    if(pref === 'cat'){
      return this.cats.dequeue();
    } else if(pref === 'dog'){
      return this.dogs.dequeue();
    } else{
      return null;
    }
  }

}

module.exports = AnimalShelter;
