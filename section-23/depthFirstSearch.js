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
        if (value === current.value) return undefined
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
    if (this.root === null) return -1
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

  BFS() {
    const queue = []
    const data = []

    if (this.root === null) return undefined
    let node = this.root
    queue.push(this.root)

    while (queue.length !== 0) {
      node = queue.shift()
      data.push(node)
      if (node.left) {
        queue.push(node.left)
      } else if (node.right) {
        queue.push(node.right)
      }
    }

    return data
  }

  DFSPreOrder() {
    const values = []

		function traverse(node) { // Helper function that will be called recursively first on left and then right
			if (!node) {
				return
			}

			values.push(node.value)

			if (node.left) {
				traverse(node.left)
			}

			if (node.right) {
				traverse(node.right)
			}
		}

		traverse(this.root)

    return values
  }

	// Post order is the exact same as pre order, but you push the value at the end insted of start. 
	// When done recursively, this means the last thing on the stack gets pushed on last. 
	// So because 10 is the root, you check all left side, it goes 3, then 8, then 6, because 3 is the last on the stack 
	// Then recursive call works on 6 since there is no left on three, so it goes right, and then does the right side 
	// This means 10 is the last thing to get popped off the stack which means it's entered last. 
  DFSPostOrder() {
    const values = []

		function traverse(node) { // Helper function that will be called recursively first on left and then right
			if (node.left) {
				traverse(node.left)
			}
			
			if (node.right) {
				traverse(node.right)
			}

			values.push(node.value)
		}

		traverse(this.root)

    return values
  }

	// This one goes visit 3, visit 6 and then visit 8, then 10 and then do the same for the right side. 
	// So instead of pushing at the end, or beginning, push in order. The names are pretty self-explanatory. 
  DFSInOrder() {
    const values = []

		function traverse(node) { // Helper function that will be called recursively first on left and then right
			if (node.left) {
				traverse(node.left)
			}
			
			values.push(node.value)
			
			if (node.right) {
				traverse(node.right)
			}
		}

		traverse(this.root)

    return values
  }
}

const tree = new BST()

tree.insert(10)
tree.insert(6)
tree.insert(15)
tree.insert(3)
tree.insert(8)
tree.insert(20)

console.log(tree.DFSPostOrder())
console.log(tree.DFSInOrder())

/**
 * Tree looks like - 
 * 				10 
 * 		6				15
 *  3  8        20
 */
