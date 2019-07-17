What is a stack? 

- Define what a stack is?

    - A LIFO data structure

        - Last In First Out
        - The Last element added to the stack will be the First element removed from the stack

        - Picture a pile of papers, you can't access the papers underneath,
        without first removing the paper on top one by one

- Understand the use cases for stacks
 
    - Managing function invocations
    - Undo / Redo functionality 
    - Routing! The history object is treated like a stack

- Creating a stack with an array

    - Some programming languages come with their own stack data type. JAVSCRIPT DOES NOT.
    - Pushing and Popping functionality is like using a stack.
    - There cannot be anything moved from anywhere but the ends of the array.

- Stacks with arrays 

    - push and pop methods are the same as basically adding and popping off the stack.
    - You can also use shift and unshift for the beginning of the array, works in the same manner. 
    - The only difference are the performance implications. push and pop don't reindex previous elements.
    - The same cannot be said for shift and unshift. 
    - If you're going to have a ton of data, an array is not the most effecient choice. 

