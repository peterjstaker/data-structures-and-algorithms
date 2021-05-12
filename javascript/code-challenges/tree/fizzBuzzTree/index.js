'use strict';

const Node = require('./Node');
const Tree = require('./Tree');
const fizzBuzzTree = require('./fizz-buzz-tree');

let tree = new Tree();

tree.root = new Node('3');

tree.root.children.push(new Node('15'));

tree.root.children.push(new Node('30'));

tree.root.children.push(new Node('9'));

tree.root.children[0].children.push(new Node('10'));

tree.root.children[0].children.push(new Node('3'));

console.log('TREEEE', tree);

let fbTree = fizzBuzzTree(tree);

console.log('TREEEE', tree, tree.root.children, fbTree, fbTree.root.children);
