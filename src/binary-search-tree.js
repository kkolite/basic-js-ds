const { NotImplementedError } = require('../extensions/index.js');

const { Node } = require('../extensions/list-tree.js');

/**
* Implement simple binary search tree according to task description
* using Node from extensions
*/
class BinarySearchTree {
  constructor() {
    this.start = null
  }
  root() {
    return this.start
  }

  add(data) {
    function addWithin(node, data) {
      if (!node) {return new Node(data)}

      if (node.data == data) {return node}

      if (data < node.data) {
        node.left = addWithin(node.left, data);
      } 
      else {
        node.right = addWithin(node.right, data);
      }

      return node;
    }

    this.start = addWithin(this.start, data);
  }

  has(data) {
    function searchWithin(node, data) {
      if (!node) {
        return false;
      }

      if (node.data == data) {
        return true;
      }

      if (data < node.data) { 
        return searchWithin(node.left, data);
      } 
      else{return searchWithin(node.right, data)};
    }

    return searchWithin(this.start, data);
  }

  find(data) {
    function searchWithin(node, data) {
      if (!node) {
        return null;
      }

      if (node.data == data) {
        return node;
      }

      if (data < node.data) { 
        return searchWithin(node.left, data);
      } 
      else{return searchWithin(node.right, data)};
    }

    return searchWithin(this.start, data);
  }

  remove(data) {
    this.start = removeNode(this.start, data);

    function removeNode(node, data) {
      if (data < node.data) {
        node.left = removeNode(node.left, data);
        return node;
      } 
      else if (node.data < data) {
        node.right = removeNode(node.right, data);
        return node;
      } 
      else {
        if (!node.left && !node.right) {return null}

        if (!node.left) {return node.right}

        if (!node.right) {return node.left}

        let minFromRight = node.right;
        while (minFromRight.left) {
          minFromRight = minFromRight.left;
        }
        node.data = minFromRight.data;

        node.right = removeNode(node.right, minFromRight.data);

        return node;
      }
    }
  }
  

  min() {
    function findMin (node) {
      if(node.left) {
        return findMin(node.left)
      }
      else {return node.data}
    }

    return findMin(this.start)
  }

  max() {
    function findMax (node) {
      if(node.right) {
        return findMax(node.right)
      }
      else {return node.data}
    }

    return findMax(this.start)
  }
}

module.exports = {
  BinarySearchTree
};