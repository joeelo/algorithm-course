# Binary Search Tree

## A Binary Search Tree (BST)
    - Consists of nodes, forming an inverted tree like structure.
    - Think of things like the DOM, just a series of connected nodes.
    - Binary Search Trees have a specific order that make them unique, composed of a root node, the nodes to the left must be smaller than the root and the nodes to the right must be larger. This pattern goes all the way down the tree, and if it doesn't then it is not a BST but another type of tree. 
    
## Binary Search Tree Insert method (iteratively or recursively)

    - Create a new node. 
    - Starting at the root 
        - Check if there is a root, if not the root now becomes that new node!
        - If there is a root, check if the value of the new node is greater or lesser than the value of the root.
        - If it is greater
            - Check to see if there is a node to the right
                - If there is, move to that node and repeat these steps. 
                - If there is not, add that node as the right property. 
        - If it is less 
            - Check to see if there is a node to the left 
                - If there is, move to that node and repeat these steps. 
                - If there is not, add that node as the left property. 



    