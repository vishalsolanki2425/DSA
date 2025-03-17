// 1. WAP for Reverse Link List.

// class ListNode {
//     constructor(value) {
//         this.value = value;
//         this.next = null;
//     }
// }

// class LinkedList {
//     constructor() {
//         this.head = null;
//     }

//     append(value) {
//         let newNode = new ListNode(value);
//         if (!this.head) {
//             this.head = newNode;
//             return;
//         }
//         let current = this.head;
//         while (current.next !== null) {
//             current = current.next;
//         }
//         current.next = newNode;
//     }

//     reverseLinkedList() {
//         let current = this.head;
//         let prev = null;
//         let temp;

//         while (current !== null) {
//             temp = current.next;
//             current.next = prev;
//             prev = current;
//             current = temp;
//         }
//         this.head = prev;
//     }

//     display() {
//         let current = this.head;
//         let output = "";
//         while (current !== null) {
//             output += current.value + " -> ";
//             current = current.next;
//         }
//         console.log(output + "NULL");
//     }
// }

// let obj = new LinkedList();
// obj.append(1);
// obj.append(2);
// obj.append(3);
// obj.append(4);
// obj.append(5);

// console.log("Original List:");
// obj.display();

// obj.reverseLinkedList();

// console.log("Reversed List:");
// obj.display();

// output: 
// Original List : 1 -> 2 -> 3 -> 4 -> 5 -> NULL
// Reversed List : 5 -> 4 -> 3 -> 2 -> 1 -> NULL

/* =================================================================================================== */

// 2. WAP for Given Link List is Palindrome or not

// class ListNode {
//     constructor(val) {
//         this.val = val;
//         this.next = null;
//     }
// }

// class LinkedList {
//     constructor() {
//         this.head = null;
//     }

//     append(val) {
//         let newNode = new ListNode(val);
//         if (!this.head) {
//             this.head = newNode;
//             return;
//         }
//         let temp = this.head;
//         while (temp.next) {
//             temp = temp.next;
//         }
//         temp.next = newNode;
//     }

//     display() {
//         let temp = this.head;
//         let output = [];
//         while (temp) {
//             output.push(temp.val);
//             temp = temp.next;
//         }
//         console.log("Linked List:", output.join(" -> "));
//     }

//     isPalindrome() {
//         if (!this.head || !this.head.next) 
//             return true;

//         let slow = this.head, fast = this.head;

//         while (fast && fast.next) {
//             slow = slow.next;
//             fast = fast.next.next;
//         }

//         let prev = null, curr = slow;
//         while (curr) {
//             let nextTemp = curr.next;
//             curr.next = prev;
//             prev = curr;
//             curr = nextTemp;
//         }

//         let first = this.head, second = prev;
//         while (second) {
//             if (first.val !== second.val) return false;
//             first = first.next;
//             second = second.next;
//         }

//         return true;
//     }
// }

// let obj = new LinkedList();
// obj.append(1);
// obj.append(2);
// obj.append(2);
// obj.append(1);

// obj.display();  
// console.log("Is Palindrome:", obj.isPalindrome());  

// Output: true

// obj = new LinkedList();
// obj.append(1);
// obj.append(2);
// obj.display();  
// console.log("Is Palindrome:", obj.isPalindrome());  

// Output: false


/* ============================================================================================= */

// 3. WAP for Removing Node Element at any Position in given Link list.

// class ListNode {
//     constructor(val) {
//         this.val = val;
//         this.next = null;
//     }
// }

// class LinkedList {
//     constructor() {
//         this.head = null;
//     }

//     append(val) {
//         let newNode = new ListNode(val);
//         if (!this.head) {
//             this.head = newNode;
//             return;
//         }
//         let temp = this.head;
//         while (temp.next) {
//             temp = temp.next;
//         }
//         temp.next = newNode;
//     }

//     remove(position) {
//         if (!this.head || position < 0) {
//             console.log("Invalid position or empty list");
//             return;
//         }

//         if (position === 0) {
//             this.head = this.head.next;
//             return;
//         }

//         let prev = null, current = this.head;
//         let index = 0;

//         while (current !== null && index < position) {
//             prev = current;
//             current = current.next;
//             index++;
//         }

//         if (!current) {
//             console.log("Position out of bounds");
//             return;
//         }

//         prev.next = current.next;
//     }

//     display() {
//         let temp = this.head;
//         let result = "";
//         while (temp) {
//             result += temp.val + " -> ";
//             temp = temp.next;
//         }
//         console.log(result + "null");
//     }
// }

// let obj = new LinkedList();
// obj.append(10);
// obj.append(20);
// obj.append(30);
// obj.append(40);
// obj.append(50);

// console.log("Original List : ");
// obj.display();

// obj.remove(2);
// console.log("After Removing Node at Position 2 : ");
// obj.display();

// obj.remove(0);
// console.log("After Removing Head Node : ");
// obj.display();

// output : 
// Original List: 10 -> 20 -> 30 -> 40 -> 50 -> null
// After Removing Node at Position 2: 10 -> 20 -> 40 -> 50 -> null
// After Removing Head Node: 20 -> 40 -> 50 -> null

/* ================================================================================================ */

// 4. WAP for Circular Link list. (append, remove functionality)

// class Node {
//     constructor(value) {
//         this.value = value;
//         this.next = null;
//     }
// }

// class CircularLinkedList {
//     constructor() {
//         this.head = null;
//         this.tail = null;
//     }

//     append(value) {
//         const newNode = new Node(value);
//         if (!this.head) {
//             this.head = newNode;
//             this.tail = newNode;
//             newNode.next = this.head; 
//         } else {
//             this.tail.next = newNode;
//             this.tail = newNode;
//             this.tail.next = this.head; 
//         }
//     }

//     remove(value) {
//         if (!this.head) return;

//         let current = this.head;
//         let prev = this.tail;
//         do {
//             if (current.value === value) {
//                 if (current === this.head) {
//                     this.head = this.head.next;
//                     this.tail.next = this.head;
//                 } else if (current === this.tail) {
//                     this.tail = prev;
//                     this.tail.next = this.head;
//                 } else {
//                     prev.next = current.next;
//                 }

//                 return;
//             }
//             prev = current;
//             current = current.next;
//         } while (current !== this.head);
//     }

//     display() {
//         if (!this.head) return;
//         let current = this.head;
//         const result = [];
//         do {
//             result.push(current.value);
//             current = current.next;
//         } while (current !== this.head);
//         console.log(result.join(" -> ") + " (circular)");
//     }
// }

// const obj = new CircularLinkedList();
// obj.append(10);
// obj.append(20);
// obj.append(30);
// obj.display();

// obj.remove(20);
// obj.display(); 

// Output: 
//  10 -> 20 -> 30 (circular)
//  10 -> 30 (circular)