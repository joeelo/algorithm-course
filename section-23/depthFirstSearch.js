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
    const data = []
    const queue = []

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
    const data = []

    return data
  }
}

const tree = new BST()

tree.insert(30)
tree.insert(15)
tree.insert(45)
tree.insert(60)
tree.insert(55)
tree.insert(7)
