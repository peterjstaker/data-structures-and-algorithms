# Fifo Animal Shelter

## Challenge Summary - Fifo Animal shelter

[<--- Back to Table of Contents](../../../README.md)

### Challenge Description - Fifo Animal Shelter Implementation

* Create a class called AnimalShelter which holds only dogs and cats

* The shelter operates using a first-in, first-out approach.

#### Implement the following methods:

* enqueue(animal): adds animal to the shelter. animal can be either a dog or a cat object.

* dequeue(pref): returns either a dog or a cat. If pref is not "dog" or "cat" then return null.

### Approach & Efficiency - Fifo Animal Shelter Implementation

I reviewed the methods and properties of my queue implementation and then implemented an AnimalShelter class with two queues and added its methods. Then I created unit tests to satisfy the following requirements:

#### Instance of AnimalShelter class can:

* Can successfully instantiate an animal shelter with two queues

* Can successfully enqueue into animal shelter

* Can successfully dequeue out of animalShelter the expected type

* Can successfully empty a queue after multiple dequeues

* Calling dequeue or peek on empty queue raises exception

* return null if pref is not dog or cat

### Solution - Fifo Animal Shelter

View Solution:

* [AnimalShelter](./fifo-animal-shelter)
