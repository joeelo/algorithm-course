class Node {
    constructor(val) {
        this.val = val;
        this.prev = null;
        this.next = null;
    }
}

class Doubly {
    constructor() {
        this.head = null;
        this.tail = null;
        this.length = 0;
    }
}

let first = new Node(12);
first.next = new Node(13);
first.next.prev = first;
console.log(first.next);