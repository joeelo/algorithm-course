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

}

let doubly = new Doubly;

doubly.push("Harry");
doubly.push("ron");


console.log(doubly);

