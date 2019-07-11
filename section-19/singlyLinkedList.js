//SINGLY LINKED LIST

// In an array each index is mapped, there is an order
// linked list consist of nodes, and each node has a value and a pointer to another node or null
// the head is the beginning of the linked list and the tail is the end
// each node is only connected uni-directionally to the other node
// Lists
    // Do not have indexes!
    // Connected via nodes with anext pointer
    // random access is not allowed
// Arrays
    // indexed in order!
    // Insertion and deletion can be expensive
    // can quickly be accessed at a specific index

class Node { 
    constructor(val) {
        this.val = val;
        this.next = null;
    }
}

class SinglyLinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
        this.length = 0;
    }

    push(val) {
        let newNode = new Node(val)
        if(!this.head) {
            this.head = newNode;
            this.tail = this.head;
        } else {
            this.tail.next = newNode;
            this.tail = newNode;
        }
        this.length++;
        return this;
    }
}

let list = new SinglyLinkedList();

list.push(7);
console.log(list);


// list.push("Hello!")
// We don't initialize with any values with the exception of head and tail and both are null.
// when pushing as long you as you put the value as the new tail nothing else needs to be changed.


let first = new Node("Hi");
first.next = new Node("there");
first.next.next = new Node ("how")
first.next.next.next = new Node ("are")
first.next.next.next.next = new Node ("you?")