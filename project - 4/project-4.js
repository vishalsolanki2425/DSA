// 1. Write a program for Stack Operation Program (Insert, Delete, isEmpty, TopElement, Length)

// class Stack {
//     constructor() {
//         this.data = []; 
//     }

//     push(element) {
//         return this.data[this.data.length] = element
//     }

//     pop() {
//         return this.data.length -= 1;
//     }

//     isEmpty() {
//         if(this.data.length === 0){
//             return console.log("stack is empty");
//         }
//         else{
//             console.log("stack is not empty");
//         }
//     }

//     topElement() {
//         return this.data[this.data.length - 1];
//     }

//     length() {
//         return this.data.length;
//     }

//     display() {
//         console.log(this.data.join(" -> "))
//     }
// }

// let stack = new Stack();

// stack.push(10);
// stack.push(20);
// stack.push(30);
// stack.push(40);
// stack.display();


// stack.pop();
// stack.pop();
// stack.display();

// stack.isEmpty();

// console.log("Top element:", stack.topElement());

// console.log("Stack size:", stack.length());

// output 

// 10 -> 20 -> 30 -> 40
// 10 -> 20
// stack is not empty
// Top element: 20
// Stack size: 2


/* =========================================================================================================== */


// 2. Write a program for Next Greater Element using

// function nextGreaterElement(arr) {
//     let stack = [];
//     let result = new Array(arr.length).fill(-1);

//     for (let i = arr.length - 1; i >= 0; i--) {
//         while (stack.length > 0 && stack[stack.length - 1] <= arr[i]) {
//             stack.pop();
//         }

//         if (stack.length > 0) {
//             result[i] = stack[stack.length - 1];
//         }

//         stack.push(arr[i]);
//     }

//     return result;
// }

// let arr = [4, 5, 2, 9, 4, 8];
// console.log("Next Greater Elements:", nextGreaterElement(arr));


// output :  Next Greater Elements:  [5, 9, 9, -1, 8, -1]


/* ============================================================================================================= */

// 3. Write a program for a reverse string using Stack.

class Stack {
    constructor() {
        this.data = [];
    }

    push(element) {
        this.data.push(element);
    }

    pop() {
        return this.data.pop();
    }

    isEmpty() {
        return this.data.length === 0;
    }
}

function reverseString(inputString) {
    let stack = new Stack();

    for (let char of inputString) {
        stack.push(char);
    }

    let reversedString = "";

    while (!stack.isEmpty()) {
        reversedString += stack.pop();
    }

    return reversedString;
}

let originalString = "Hello";
let reversed = reverseString(originalString);
console.log("Original String:", originalString);
console.log("Reversed String:", reversed);


// output: Original String: Hello
//         Reversed String: olleH