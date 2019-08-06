# Doubly Linked List

    - Similar to singly linked list, the only difference is that it has a pointer pointing at the PREVIOUS node as well as the next. 

    - Objectives
        - Construct a doubly linked list
        - Compare and contrast doubly and singly linked lists 
        - implement basic operations on a doubly linked list
    
    - Differences between singly and doubly linked list
        - One difference is the way that the tail is accessed, it can be referenced directly and the pointer that is pointing to prev is the new tail. 
        - Doubly linked list takes up more memory 
        ## More Memory === More Flexibility - It's almost always a trade off. 

## doubly methods

    - The way that we reference in a bi-directional way, is when declaring a new node, the value of prev points to the one that is referencing it as next.

## Push psuedocode 

    - Create a new node with the value passed to the function.
    - If the head property is null set the head and tail to be the newly created node.
    - If not, set the next property on the tail to be that node. 
    - Set the previous property on the newly created node to be the tail. 
    - Increment the length.
    - Return the Doubly Linked List aka Doubly.