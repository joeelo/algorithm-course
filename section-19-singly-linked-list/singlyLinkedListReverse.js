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
      this.tail.next = newNode
      this.tail = newNode
    }
    this.length++
    return this
  }


  reverse() {
		let prev = null 
		let currentNode = this.head 
    const temp = this.head
    this.head = this.tail
    this.tail = temp

		while(currentNode) {      
			const temp = currentNode.next // We are about to overwrite this with prev 
			currentNode.next = prev // initially will point to null 
      prev = currentNode      
			currentNode = temp // Eventually this will point to null after we've reached the tail 
		}

		return this
	}

  print() {
    const values = []

    let currentNode = this.head
    
    while (currentNode) {
      values.push(currentNode.val) 
      currentNode = currentNode.next
    }

    return values
  }
}

const LinkedList = new SinglyLinkedList()

LinkedList.push(1)
LinkedList.push(7)
LinkedList.push(4)
LinkedList.push(9)

console.log('ll', LinkedList)
console.log(LinkedList.print())

LinkedList.reverse() 
console.log(LinkedList)

console.log(LinkedList.print())

// export {} // https://bobbyhadz.com/blog/typescript-duplicate-identifier