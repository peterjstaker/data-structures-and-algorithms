'use strict';

const BinarySearchTree = require('../binary-search-tree');

describe('binary search tree', () => {
  it('Can successfully instantiate an empty tree', () => {
    let tree = new BinarySearchTree();
    expect(tree.root).toEqual(null);
  });

  it('Can successfully instantiate a tree with a single root node', () => {
    let tree = new BinarySearchTree();
    tree.add(7);
    expect(tree.root.value).toEqual(7);
    expect(tree.contains(7)).toEqual(true);
  });

  it('Can successfully add a left child and right child to a single root node', () => {
    let tree = new BinarySearchTree();
    tree.add(7);
    tree.add(1);
    tree.add(9);
    expect(tree.root.value).toEqual(7);
    expect(tree.root.left.value).toEqual(1);
    expect(tree.root.right.value).toEqual(9);
  });

  it('can successfully return a collection from a preorder traversal', () => {
    let expected = [6, 3, 1, 19, 17];
    let tree = new BinarySearchTree();
    tree.add(6);
    tree.add(3);
    tree.add(19);
    tree.add(1);
    tree.add(17);
    expect(tree.preOrder()).toEqual(expected);
  });

  it('can successfully return a collection from an inorder traversal', () => {
    let expected = [1, 3, 6, 17, 19];
    let tree = new BinarySearchTree();
    tree.add(6);
    tree.add(3);
    tree.add(19);
    tree.add(1);
    tree.add(17);
    expect(tree.inOrder()).toEqual(expected);
  });

  it('can successfully return a collection from a postorder traversal', () => {
    let expected = [1, 3, 17, 19, 6];
    let tree = new BinarySearchTree();
    tree.add(6);
    tree.add(3);
    tree.add(19);
    tree.add(1);
    tree.add(17);
    expect(tree.postOrder()).toEqual(expected);
  });

  it('should return false on .contains() if value does not exist in BST', () => {
    let tree = new BinarySearchTree();
    tree.add(6);
    tree.add(3);
    tree.add(19);
    tree.add(1);
    tree.add(17);
    expect(tree.contains(14)).toEqual(false);
  });

});
