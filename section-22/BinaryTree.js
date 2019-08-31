class Node {
    constructor(value) {
        this.value = value
        this.left = null;
        this.right = null;
    }
}

//Class BinarySearchTree

class BST {
    constructor() {
        this.root = null;
    }
}

let tree = new BST();
tree.root = new Node(19);
tree.root.right = new Node(22);
tree.root.left = new Node(7);
tree.root.left.right = new Node(9);


console.log(tree);