// @ts-nocheck

// BST Terms 
class Node {
  constructor(value) {
    this.value = value 
    this.right = null 
    this.left = null 
  }
}

class BST {
  constructor() {
    this.root = null 
  }

  insert(node) {
    // If the root doesn't exist, the new node is the root 
    if (!this.root) {
      this.root = node 

      return this
    }

    let currentNode = this.root 

    // While the current node exists run through loop 
    while(currentNode) {
      
      // Don't handle this case 
      if (node.value === currentNode.value) {
        return false
      }

      // If the node is greater than the current node, check if the right side exists, 
      // If not then the currentNode.right is equal to the new node 
      // If it does exist then traverse down the tree by making the currentNode the right edge 
      if (node.value > currentNode.value) {
        if (!currentNode.right) {
          currentNode.right = node 

          return
        }

        currentNode = currentNode.right
      } else {
        if (!currentNode.left) {
          currentNode.left = node 

          return
        }

        currentNode = currentNode.left
      }
    }
  }

  search(value) {
    let currentNode = this.root

    while(currentNode) {
      if (currentNode.value === value) {
        return currentNode
      }

      // If the value is greater than the current nodes value, look right. Otherwise look left
      // When 4 is greater than the node 3, look right, but it's less than 7, so look left
      if (value > currentNode.value) {
        currentNode = currentNode.right
      } else {
        currentNode = currentNode.left 
      }
    }

    return false
  }
}

const node1 = new Node(3)
const node2 = new Node(1)
const node3 = new Node(7)
const node4 = new Node(4)
const node5 = new Node(9)
const node6 = new Node(0)
const node7 = new Node(2)

const Tree = new BST()

Tree.insert(node1)
Tree.insert(node2)
Tree.insert(node3)
Tree.insert(node4)
Tree.insert(node5)
Tree.insert(node6)
Tree.insert(node7)

const foundNode = Tree.search(3)

console.log(foundNode);