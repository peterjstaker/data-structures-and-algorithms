# Stacks and Queues

## Challenge Summary - Stacks and Queues

[<--- Back to Table of Contents](../../README.md)

### Challenge Description - Stacks and Queues Implementation

* Create a Node class that has properties for the value stored in the Node, and a pointer to the next node.

* Create a Stack class that has a top property and the folowing method:

push method, pop method, peek method, and an isEmpty method

* Create a Queue class that has a front property and the following methods:

enqueue, dequeue, peek, and isEmpty

### Approach & Efficiency - Stacks and Queues Implementation

I implemented them both as linked lists and added the required properties. Then I manually tested them and created unit tests to satisfy the following requirements:

### Stacks

* push onto a stack

* push multiple values onto a stack

* Can successfully pop off the stack

* Can successfully empty a stack after multiple pops

* Can successfully peek the next item on the stack

* Can successfully instantiate an empty stack

* Calling pop or peek on empty stack raises exception

### Queues

* enqueue into a queue

* enqueue multiple values into a queue

* dequeue out of a queue the expected value

* peek into a queue, seeing the expected value

* empty a queue after multiple dequeues

* instantiate an empty queue

* Calling dequeue or peek on empty queue raises exception

### Solution - Stacks && Queues

View Solution:

* [queue](./queue.js)

* [stack](./stack.js)
