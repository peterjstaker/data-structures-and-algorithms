# Trees

[<--- Back to Table of Contents](../../../README.md)

Binary trees are made up of nodes. Each node contains a value and a reference to a left child node and a right child node. Each node can have up to two children. A node with no children is a leaf.

A Binary Search Tree is a sorted Binary Tree.

## Challenge

### The challenge was to create three classes:

#### Node

[Node implementation](./node.js)

Node class has properties for value, left child node, and right child node

#### BinaryTree

[Binary Tree implementation](./binary-tree.js)

BinaryTree class has three depth first traversal methods that return and array of the values in the correct order:

* preOrder

* inOrder

* postOrder

#### BinarySearchTree

[Binary Search Tree implementation](./binary-search-tree.js)

BinarySearchTree class has two methods:

* add method that accepts a value and adds a node with that value to the correct location in the binary search tree

* contains method that accepts a value and returns a boolean value indicating whether or not the binary search tree contains that value

## Approach & Efficiency

I used recursion for my implementations of the required methods for efficiency. My traversal methods are O(n) and my add and contains methods are O(log n).

## API

### My BinaryTree class has three methods publicly available:

* preOrder() - reads value of root node, then goes left, then goes right, returns array sorted in this order

* inOrder() - goes left, reads value of root, goes right, returns array sorted in this order

* postOrder() - goes left, then right, then reads value of root, returns array sorted in this order

### BinarySearchTree class has the same three methods as BinaryTree class and two additional methods:

* add(value) - adds a node with the value to the correct position in the binary search tree

* contains(value) - returns a boolean value indicating whether or not the binary search tree contains a value at least once
