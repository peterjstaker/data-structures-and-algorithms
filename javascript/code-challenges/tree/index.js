'use strict';

const BinaryTree = require('./binary-tree');
const Node = require('./node');

const BinarySearchTree = require('./binary-search-tree');

let one = new Node(1);
let two = new Node(2);
let three = new Node(3);
let four = new Node(4);
let five = new Node(5);

one.left = two;
one.right = three;
three.left = four;
three.right = five;

let BT = new BinaryTree();

BT.root = one;


console.log(BT.preOrder());
console.log(BT.inOrder());
console.log(BT.postOrder());
console.log(BT.breadthTraversal());

let BST = new BinarySearchTree();

BST.add(6);
BST.add(3);
BST.add(19);
BST.add(1);
BST.add(17);

console.log(BST.inOrder());
console.log(BST.preOrder());
console.log(BST.postOrder());

console.log(BST.contains(1));
console.log(BST.contains(14));


