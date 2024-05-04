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

## Binary Search Tree Find method

- Starting at the root
  - Check if there is a root, if not then we're done searching!
  - If there is a root, check if the value of the new node is the value we're searching for. If it is then we're done!
  - If not check to see if the value is greater than or less than the value of the root.
  - If it is greater
    - Check to see if there is a node to the right
      - If there is, move to that node and repeat these steps.
      - If there is not, then we're done searching!
  - If it is less
    - Check to see if there is a node to the left
      - If there is, move to that node and repeat these steps.
      - If there is not, then we're done searching!

## Tree inversion

- Tree inversion is usually thought of as a thought experiment to help decipher if the person has a good grasp on recursion and assignments.
- In order to invert a tree you have to be given the root.
  - If there is no root, then return
  - If there is a root, then save the roots right node and assign it to a temporary variable
  - Then make the roots right equal to the roots left
  - Then make the roots left equal to the temp variable that was just overwritten on the previous line
  - it should look like

```
const temp = root.right
root.right = root.left
root.left = temp
```

- Then we make 2 recursive calls, one calling the left of the root, and then the other on the right. What this does is it takes each subtree, and works down to the very bottom swapping nodes along the way until there are no more nodes. When there are no nodes return null.
- Given a root -

```
invert(root.left)
invert(root.right)
```

## Big O of Binary Search Tree

- Insertion - O(log n)
- Searching - O(log n)

- It is not guaranteed that the methods will run O(log n ) and that is because it is contigent on the configuration of the tree. Some trees don't need to be BST's but are still completely valid, and wind up looking more like a linked list. If this is the case the best thing to do is to reconfigure the tree, possibly picking a different root so the tree evens out.
