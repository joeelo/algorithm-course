let stack = [];

stack.push("google");
stack.push("instagram");
stack.push("youtube");

stack.pop();
// The funcionality is the same as a stack,
// pushing to the end of the array and popping off when needed

let newStack = [];

newStack.unshift("navigte to instagram");
newStack.unshift("click on a photo");
newStack.unshift("navigate away back to homepage");

newStack.shift();

// The functionality is the exact same but putting items at the beginning of the array 
// and if you put it at the beginning of the array you need to pop it off the stack at the beginning
// hence the use of shift and unshift.