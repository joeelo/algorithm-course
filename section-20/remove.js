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
        } else {
            this.head.prev = node;
            node.next = this.head;
            this.head = node;
        }
        this.length++;
        return this;
         
    }

    get(index) {
        if (index < 0 || index >= this.length) return undefined;
        let count, current;
        if (index <= Math.ceil(this.length / 2)) {
            count = 0;
            current = this.head
            while (count !== index) {
                current = current.next;
                count++;
            }
        } else {
            count = this.length -1;
            current = this.tail; 
            while(count !== index) {
                current = current.prev;
                count--;
            }
        }
        return current;
    }

    set(index, newVal) {
        let getter = this.get(index);
        if (getter !== null) {
            getter.val = newVal;
            return true;
        }
        return false
    }

    insert(index, newVal) {
        if (index < 0 || index > this.length) return undefined;
        if (index === 0) {
            return this.unshift(newVal)
        } else if (index === this.length) {
            return this.push(newVal);
        } else {
            let node = new Node(newVal);
            let firstNode = this.get(index - 1)
            let secondNode = this.get(index);
            firstNode.next = node;
            node.prev = firstNode;
            node.next = secondNode;
            secondNode.prev = node;
        }
        this.length++;
        return true;
    }

    remove(index) {
        let foundNode;
        if (index < 0 || index >= this.length) return undefined;
        if (index === 0) {
            return this.shift();
        } else if (index === this.length - 1) {
            return this.pop();
        } else {
            removedNode = this.get(index);
            let beforeNode = removedNode.prev;
            let afterNode = removedNode.next;
            beforeNode.next = afterNode, afterNode.prev = beforeNode;
            removedNode.next = null, removedNode.prev = null;
        }
        this.length--;
        return removedNode;
    }

}

let list = new Doubly;
list.push(3);
list.push(5);
list.push(19);
list.unshift("harry");
list.unshift("ron");
list.push("hermione");
list.push("Draco");


console.log(list.pop());

