class Node {
  constructor(val) {
    this.val = val
    this.next = null
  }
}

class SinglyLinkedList {
  constructor() {
    this.head = null
    this.tail = null
    this.length = 0
  }

  push(val) {
    let newNode = new Node(val)
    if (!this.head) {
      this.head = newNode
      this.tail = this.head
    } else {
			if (this.tail) {
				this.tail.next = newNode
			}
      this.tail = newNode
    }
    this.length++
    return this
  }
}

const LinkedList = new SinglyLinkedList()

LinkedList.push(1)
LinkedList.push(7)
LinkedList.push(4)
LinkedList.push(0)

export {}