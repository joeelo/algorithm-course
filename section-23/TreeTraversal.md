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

### Depth First Search Post-Order 
    - This is almost identical to the pre-order 
    - The difference is we're not pushing a node and checking, we're checking if it has a property and then going down into that node and then pushing to the data. So instead of the tree working from the top down, the data should be represented from the bottom up. 

#### Post-order psuedo-code
    - Create a variable to store the value of the nodes visited. 
    - Store the root of the BST in a variable called current or root. 
    - Write a helper function which accepts a node. 
        - If the node has a left property call the helper function with the left property on that node. 
        - If the node has a right property call the helper function with the right property on that node. 
        - Push the value of the node to the variable that stores those values. 
    - Invoke the helper function with the current variable. 

#### Pre-Post difference 
    - In the Pre order, you push as the recursion takes place, so as the stack expands you push every value for the left then the right in a vertical manner. For the Post order it's necessary to make it down to the bottom of the tree, then push to data, and as things are popped off the stack they'll be added to the data variable. 

### Depth First Search In-Order

    - Similar to the other two, this one orders them in terms of values, because if it's a proper Binary Search Tree then the smallest values will be on the left, and the larger on the right and this takes advantage of that fact. 

#### In-Order psuedo-code

    - Create a varibale to store the value of the nodes visited. 
    - Store the root of the BST in a variable called current or root.
    - Write a helper function which accepts a node. 
        - If the node has a left property, call the helper function with the left property on the node. 
        - Push the value of the node to the variable that stores the values. 
        - If the node has a right property, call the helper function, with the right property on the node. 
    - Invoke the helper function with the current variable. 

## When to use Breadth First vs Depth first

    - The time complexity of Depth first and Breadth first are the same. Breadth first takes more space however because of the nodes being stored in the queue. 
    - If the tree isn't too wide you can use Breadth First because there is essentially nothing being saved. The depth first does take up space however in the recursive sense saving each function in the stack until the end. 
#### Using different variants of Depth First

    - There isn't a great answer, However there are a few cases. 
    - In order is obviously good if you want the data to be organized in a certain manner, going from highest to lowest or vice versa. 
    - Pre Order is good if you want to export the tree, it can be easily reconstructed or copied, because all of the data is exactly where it should be on the tree. You immediately know what the root of the tree is. 

## RECAP 
    - Trees are non-linear data structures that contain a root and child nodes. 
    - Binary trees can have a value of any type, but at most two children for each parent. 
    - Binary Search trees are a more specific version of binary trees where every node to the left of a parent is less than it's value and every node to the right is greater. 
    - We can search through trees using BFS or DFS and it's variants. 