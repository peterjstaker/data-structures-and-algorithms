'use strict';

const Animal = require('../animal.js');
const AnimalShelter = require('../fifo-animal-shelter.js');

describe('AnimalShelter', () => {

  it('Can successfully instantiate an animal shelter with two queues', () => {
    let animalShelter = new AnimalShelter();
    expect(animalShelter.dogs.isEmpty()).toEqual(true);
    expect(animalShelter.cats.isEmpty()).toEqual(true);
  });

  it('Can successfully enqueue into animal shelter', () => {
    let animalShelter = new AnimalShelter();
    let testDog = new Animal('fido', 'dog');
    let testCat = new Animal('garfield', 'cat');
    animalShelter.enqueue(testDog);
    animalShelter.enqueue(testCat);
    expect(animalShelter.dogs.peek()).toEqual(testDog);
    expect(animalShelter.cats.peek()).toEqual(testCat);
  });

  it('Can successfully dequeue out of animalShelter the expected type', () => {
    let animalShelter = new AnimalShelter();
    let testDog = new Animal('fido', 'dog');
    let testCat = new Animal('garfield', 'cat');
    animalShelter.enqueue(testDog);
    animalShelter.enqueue(testCat);
    expect(animalShelter.dequeue('dog')).toEqual(testDog);
    expect(animalShelter.dequeue('cat')).toEqual(testCat);
  });

  it('Can successfully empty a queue after multiple dequeues', () => {
    let animalShelter = new AnimalShelter();
    let testDog = new Animal('fido', 'dog');
    let testDog2 = new Animal('fido2', 'dog');
    animalShelter.enqueue(testDog);
    animalShelter.enqueue(testDog2);
    animalShelter.dequeue('dog');
    animalShelter.dequeue('dog');
    expect(animalShelter.dogs.isEmpty()).toEqual(true);
  });

  it('Calling dequeue or peek on empty queue raises exception', () => {
    let animalShelter = new AnimalShelter();
    expect(()=>animalShelter.dequeue('dog')).toThrow('NullValueException');
  });

  it('should return null if pref is not dog or cat', () => {
    let animalShelter = new AnimalShelter();
    expect(animalShelter.dequeue('bears')).toEqual(null);
  });

});
