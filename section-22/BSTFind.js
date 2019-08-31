class Node {
    constructor(value) {
        this.value = value;
        this.left = null;
        this.right = null;
    }
}

class BST {
    constructor() {
        this.root = null;
    }

    insert(value) {
        let newNode = new Node(value);
        if (this.root === null) {
            this.root = newNode;
            return this;
        } else {
            let current = this.root;
            while (true) {
                if (value === current.value) return undefined;
                if (value < current.value) {
                    if (current.left === null) {
                        current.left = newNode;
                        return this;
                    } else {
                        current = current.left;
                    }
                }

                if (value > current.value) {
                    if (current.right === null) {
                        current.right = newNode;
                        return this;
                    } else {
                        current = current.right;
                    }
                }
            }
        }
    }

    find(value) {
        if (this.root === null) return -1;
        if (value === this.root.value) {
            return this.root
        }
        let current = this.root;
        while (true) {
            if (value === current.value) {
                return current;
            } else if (value < current.value) {
                if (current.left === null ) {
                    return -1;
                }
                current = current.left;
            } else if (value > current.value) {
                if (current.right === null) {
                    return -1;
                }
                current = current.right;
            }
        }
    }
}

//colts find method 

/*
    find(value) {
        if (this.root === null) return false;
        let current = this.root;
        let found = false;

        while(current && !found) {
            if (value < current.value) {
                current = current.left;
            } else if (value > current.value) {
                current = current.right;
            } else {
                found = true;
            }
        }
        if (!found) return false || undefined;
        return current;
    }
*/