class Node {
    constructor(val) {
        this.val = val;
        this.next = null;
        this.prev = null;
    }
}

class Doubly {
    constructor() {
        this.head = null;
        this.tail = null; 
        this.length = 0;
    }

    push(val) {
        let node = new Node(val)
        if (this.length === 0) {
            this.head = node;
            this.tail = node;
        } else {
            this.tail.next = node;
            node.prev = this.tail;
            this.tail = node  
        }
        this.length++;
        return this;
    }

    pop() {
        let returnedNode;
        if (this.length === 0) {
            return undefined;
        } else if (this.length === 1) {
            returnedNode = this.tail;
            this.head = null;
            this.tail = null;
        } else {
            returnedNode = this.tail;
            let temp = this.tail.prev
            this.tail.prev = null;
            this.tail = temp;
            this.tail.next = null;
        }
        this.length--;
        return returnedNode;
    }

}

let list = new Doubly;
list.push(3);
list.push(5);
list.push(19);
// list.pop();


console.log(list.pop());
