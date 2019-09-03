# Tree Traversal

    - There are two ways to traversing a tree. 
    - Breadth first search and Depth first Search.

    - Breadth first Search is searching nodes in a horizontal manner. 
        - Starting with the top, and then staying on that level and checking each consequent node. 

    - Depth first Search 
        - Depth first is going vertically down the tree, and there are three ways of traversing the tree in this manner. 
        - DFS - InOrder || PreOrder || PostOrder 

    - There are definitely situation where you'd wanna use one versus the other and that will become apparent going forward. 
    - This method of traversal works on all trees whether they are sorted or not (whether they are binary search trees or the nodes are in random order). 
    - Traversal largely depends on recursion, and it will be used heavily to move about the trees. 

## Breadth first Search

    - Breadth first just means checking every node on the same level before checking the child nodes. 

## Steps - Iteratively

    - Create a queue (this can be an array) and a variable to store the values of the nodes visited. 
    - Place the root node in the queue. 
    - Loop as long as there is anything in the queue. 
        - Dequeue a node from the queue and push the value of the node into the variable that stores the nodes. 
        - If there is a left property on the node dequeued - add it to the queue. 
        - If there is a right property on the node dequeued - add it to the queue. 

## Depth First Search

### Depth First Search Pre-Order
#### Recursive method
    - Create a variable to store the values of the nodes visited.
    - Store the root of the BST in a variable called current.
    - Write a helper function which accepts a node. 
        - Push the value of the node to the variable that stores the values. 
        - If the node has a left property, call the helper function with the left property on the node. 
        - If the node has a right property, call the helper function with the right property on the node. 
    - Invoke the helper function with the current variable.
    - Return the array of values. 

#### Why do it recursively? How it works
    - The first thing that happens is there is a call for the helper method on the root, which is the variable current, could also be done just calling DFSHelper(this.root), but current seemed more explicit. The root does indeed have a left, and so the method is called again on itself, until there is no left property remaining. Then there goes to the right, and that is added to the stack until you work your way all the way down the tree. 