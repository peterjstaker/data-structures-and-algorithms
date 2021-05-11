'use strict';

const BinaryTree = require('../binary-tree');
const Node = require('../node');

describe('binary tree', () => {
  it('Can successfully instantiate an empty tree', () => {
    let tree = new BinaryTree();
    expect(tree.root).toEqual(null);
  });

  it('Can successfully instantiate a tree with a single root node', () => {
    let tree = new BinaryTree();
    let one = new Node(1);
    tree.root = one;
    expect(tree.root.value).toEqual(1);
    expect(tree.root.left).toEqual(null);
    expect(tree.root.right).toEqual(null);
  });

  it('can successfully return a collection from a preorder traversal', () => {
    let one = new Node(1);
    let two = new Node(2);
    let three = new Node(3);
    let four = new Node(4);
    let five = new Node(5);

    one.left = two;
    one.right = three;
    three.left = four;
    three.right = five;

    let tree = new BinaryTree();

    tree.root = one;

    let expected = [1, 2, 3, 4, 5];
    expect(tree.preOrder()).toEqual(expected);
  });

  it('can successfully return a collection from an inorder traversal', () => {
    let one = new Node(1);
    let two = new Node(2);
    let three = new Node(3);
    let four = new Node(4);
    let five = new Node(5);

    one.left = two;
    one.right = three;
    three.left = four;
    three.right = five;

    let tree = new BinaryTree();

    tree.root = one;

    let expected = [2, 1, 4, 3, 5];
    expect(tree.inOrder()).toEqual(expected);
  });

  it('can successfully return a collection from a postorder traversal', () => {
    let one = new Node(1);
    let two = new Node(2);
    let three = new Node(3);
    let four = new Node(4);
    let five = new Node(5);

    one.left = two;
    one.right = three;
    three.left = four;
    three.right = five;

    let tree = new BinaryTree();

    tree.root = one;

    let expected = [2, 4, 5, 3, 1];
    expect(tree.postOrder()).toEqual(expected);
  });

  it('should return max value in binary tree', () => {
    let one = new Node(1);
    let two = new Node(2);
    let three = new Node(3);
    let four = new Node(4);
    let five = new Node(5);

    one.left = two;
    one.right = three;
    three.left = four;
    three.right = five;

    let tree = new BinaryTree();

    tree.root = one;
    let expected = 5;
    expect(tree.findMaximumValue()).toEqual(expected);
  });

  it('can successfully return a collection from a breadth first traversal', () => {
    let one = new Node(1);
    let two = new Node(2);
    let three = new Node(3);
    let four = new Node(4);
    let five = new Node(5);

    one.left = two;
    one.right = three;
    three.left = four;
    three.right = five;

    let tree = new BinaryTree();

    tree.root = one;

    let expected = [1, 2, 3, 4, 5];
    expect(tree.breadthTraversal()).toEqual(expected);
  });

});
