// @ts-nocheck
class Node {
  constructor(value) {
    this.value = value
    this.left = null
    this.right = null
  }
}

class BST {
  constructor() {
    this.root = null
  }

  insert(value) {
    let newNode = new Node(value)
    if (this.root === null) {
      this.root = newNode
      return this
    } else {
      let current = this.root
      while (true) {
        if (value === current.value) {
          return
        }

        if (value < current.value) {
          if (current.left === null) {
            current.left = newNode
            return this
          } else {
            current = current.left
          }
        }

        if (value > current.value) {
          if (current.right === null) {
            current.right = newNode
            return this
          } else {
            current = current.right
          }
        }
      }
    }
  }

  find(value) {
    if (this.root === null) {
      return
    }

    if (value === this.root.value) {
      return this.root
    }

    let current = this.root
    while (true) {
      if (value === current.value) {
        return current
      } else if (value < current.value) {
        if (current.left === null) {
          return -1
        }
        current = current.left
      } else if (value > current.value) {
        if (current.right === null) {
          return -1
        }
        current = current.right
      }
    }
  }

  BFS(node) {
    if (!this.root) {
      return []
    }

    // Supposed to be queue but that's tough to spell right every time
    const q = [this.root] 
    const values = []

    while (q.length) {
      const node = q.shift()

      if (node.left) {
        q.push(node.left)
      }

      if (node.right) {
        q.push(node.right)
      }

      values.push(node.value)
    }

    return values
  }
}

const Tree = new BST()

Tree.insert(10)
Tree.insert(6)
Tree.insert(15)
Tree.insert(3)
Tree.insert(8)
Tree.insert(20)

const BFSResult = Tree.BFS()
console.log(BFSResult)

// Tree looks like
/**
 * 						5
 * 				3				7
 * 			2		4					9
 * 											11
 * 													17
 *
 */
