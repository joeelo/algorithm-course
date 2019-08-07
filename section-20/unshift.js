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

    shift() {
        let returnedHead;
        if (this.length === 0) return undefined;
        if (this.length === 1) {
            returnedHead = this.head;
            this.head = null;
            this.tail = null;
        } else {
            returnedHead = this.head;
            this.head = this.head.next;
            returnedHead.next = null;
            this.head.prev = null;
        }

        this.length--;
        return returnedHead;
    }

    unshift(val) {
        let node = new Node(val)
        if (this.length === 0) {
            this.head = node;
            this.tail = node;
        } else if (this.length === 1){
            this.tail = this.head;
            this.head = node;
            node.next = this.tail;
            this.tail.prev = this.head;
        } else {
            let temp = this.head;
            this.head = node;
            node.next = temp;
            temp.prev = node;
        }
        this.length++;
        return this;
         
    }

}

let list = new Doubly;
// list.push(3);
// list.push(5);
// list.push(19);
// list.shift();

list.unshift("harry");
list.unshift("ron");
list.unshift("hermione");

console.log(list); 
