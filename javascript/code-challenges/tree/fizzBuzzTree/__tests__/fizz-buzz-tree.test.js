'use strict';

const Node = require('../Node');
const Tree = require('../Tree');
const fizzBuzzTree = require('../fizz-buzz-tree');

describe('fizzBuzzTree', () => {
  it('Can successfully create a new tree and replace values with fizz if divisible 3', () => {
    let tree = new Tree();
    tree.root = new Node(3);
    let fbTree = fizzBuzzTree(tree);
    expect(fbTree.root.value).toEqual('Fizz');
  });

  it('Can successfully create a new tree and replace values with buzz if divisible by 5', () => {
    let tree = new Tree();
    tree.root = new Node(5);
    let fbTree = fizzBuzzTree(tree);
    expect(fbTree.root.value).toEqual('Buzz');
  });

  it('Can successfully create a new tree and values with fizzBuzz if divisible 15', () => {
    let tree = new Tree();
    tree.root = new Node(15);
    let fbTree = fizzBuzzTree(tree);
    expect(fbTree.root.value).toEqual('FizzBuzz');
  });

  it('Can successfully create a new tree and replace values with string if not divisible by 3 or 5', () => {
    let tree = new Tree();
    tree.root = new Node(7);
    let fbTree = fizzBuzzTree(tree);
    expect(fbTree.root.value).toEqual('7');
  });
});

