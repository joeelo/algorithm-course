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

## Pop psuedocode

    - If there is no head or no tail return undefined.
    - Store the current tail in a variable to return later.
    - If the length is 1, set the head and the tail to be null.
    - Update the tail to be the previous node. 
    - Set the new Tails next to null.
    - Decrement the length.
    - Return the value removed.

    - ## When you sever the bond between the tail and the previous, you must set the previous of the former tail to null as well, there may be no reference or pointers available after it is popped off the list. 

    - ## Popping from the end of a doubly is much more efficient than the end of a singly because again we do not have to traverse the entire list to find the reference to the previous node to the tail.

## Shift psuedocode

    - If length is 0 return undefined.
    - Store the current head property in a variable.
    - If the length is one.
        - Set the head to be null.
        - Set the tail to be null.
    - Update the head to be the next of the old head. 
    - Set the head's prev property to null.
    - Set the old head's next to null.
    - Decrement the length.
    - Return the old head

    _________           _________
    |       |           |       |
    |   3   | ------>   |   5   |   = we must remove 3, set the new head to 5, 
    |       | <------   |       |   make the node with 5's prev set to null
    _________           _________   and the formerly included node with 3's next also set to null

## Unshift psuedocode

    - If the length is 0 set the tail and the head to the new node.
    - Set the head to equal the value of the new node, the new head's value should be the old head. 
    - The value of the old head should now have a prev pointer pointing to the new head. 
    - Return the Doubly Linked List aka Doubly.

## Get psuedocode

    - If the index is less than - or greater or equal to the length, return null.
    - If the index is less than or equal to half the length of the list.
        - Loop through the list starting from the head and loop towards the middle.
        - Return the node once it is found.
    - If the greater than half the length of the list.
        - Loop through the list starting from the tail and loop towards the middle.
        - Return the node once it is found. 
   #### In order to do this, set a count variable, and as long as the count isn't the index, set the node to the next node or prev node depending on conditional. If the count is the index, then return that node which is current.

## Set psuedocode

    - Create a varibale which is the result of the get method at the index passed to the function.
    - If the get method returns a valid node, set the value of that node to be the value passed to the function.
        - Return true.
        - Otherwise, return false

## Insert Psuedocode 

    - If the index is less than zero or greater than or equal to the length return false.
    - If the index is 0, unshift.
    - If the index is the same as the length, push. 
    - Use the get method to access the index -1.
    Set the next and prev properties on the correct nodes to link everything together. 
    - Increment the length.
    - Return true.

## Remove Psuedocode

    - If the index is less than zero or greater than or equal to the length return undefined.
    - If the index is 0, shift.
    - If the index is the length - 1, pop.
    - Use the get metod to retrieve the item to be removed. 
    - Update the next and prev properties to remove the found node from the list. 
    - Set next and prev to null on the found node. 


# BIG O of Doubly Linked List

    - Insertion - 0(1)
    - Removal - 0(1)
    - Searching - 0(N)
    - Access - 0(N)
        - Technically searching is o(N / 2), but that's still 0(N)
    

