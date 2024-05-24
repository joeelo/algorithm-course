# Binary Heaps

## What is a binary heap?

    - Very similar to a binary search tree, but with some different rules!
    - In a MaxBinaryHeap, parent nodes are always larger than child nodes.
    - In a MinBinaryHeap, parent nodes are always smaller than child nodes.

## Max Binary Heap

    - Each Parent has at most two child nodes.
    - The value of the parent node is ALWAYS greater than the child nodes.
    - In a Max Binary Heap, the parent is greater than the children, but ther is no guarantees between sibling nodes.
    - A binary heap is as compact as possible. All the children of each node are as full as they can be and left children are filled out first.

## Max Binary heap equation

    - A child node will always have the relationship to a parent of (index - 1) / 2.
    - You can follow this when inserting or searching.
    - When looking for a child node of a parent it's index * 2 for the left node or index * 2 + 1 for the right node.

    41 ----
            |
        39      33
      |       |    |
      |       |     ----------23
      |        ------- 12
      |
      --------------------------18
      -------------------------------27
