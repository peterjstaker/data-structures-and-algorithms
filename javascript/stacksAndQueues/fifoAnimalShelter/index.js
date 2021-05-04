'use strict';

const AnimalShelter = require('./fifo-animal-shelter');
const Animal = require('./animal');

const testAnimal = new Animal('Fido', 'dog');
const testShelter = new AnimalShelter();

testShelter.enqueue(testAnimal);
console.log(testShelter.dogs.peek());
console.log(testShelter.dequeue('dog'));
