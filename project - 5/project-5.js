// 1. Write a program for Circular Queue.

// class CircularQueue {
//     constructor(size) {
//         this.size = size;
//         this.queue = new Array(size);
//         this.front = -1;
//         this.rear = -1;
//     }

//     isEmpty() {
//         return this.front === -1;
//     }

//     isFull() {
//         return (this.rear + 1) % this.size === this.front;
//     }

//     enqueue(element) {
//         if (this.isFull()) {
//             console.log("Queue is full!");
//             return;
//         }
//         if (this.isEmpty()) {
//             this.front = 0;
//             this.rear = 0;
//         } else {
//             this.rear = (this.rear + 1) % this.size;
//         }
//         this.queue[this.rear] = element;
//     }

//     dequeue() {
//         if (this.isEmpty()) {
//             console.log("Queue is empty!");
//             return;
//         }

//         let dequeuedElement = this.queue[this.front];
//         if (this.front === this.rear) {
//             this.front = -1;
//             this.rear = -1;
//         } 
//         else {
//             this.front = (this.front + 1) % this.size;
//         }
//         console.log("remove element in queue is:", dequeuedElement);
//         return dequeuedElement;
//     }

//     peek() {
//         if (this.isEmpty()) {
//             console.log("Queue is empty!");
//             return;
//         }
//         console.log("peak element is:", this.queue[this.front]);
//         return this.queue[this.front];
//     }

//     display() {
//         let i = this.front;
//         let elements = [];
//         while (i !== this.rear) {
//             elements.push(this.queue[i]);
//             i = (i + 1) % this.size;
//         }
//         elements.push(this.queue[this.rear]);
//         console.log(elements);
//     }
// }

// let q = new CircularQueue(5);

// q.enqueue(10);
// q.enqueue(20);
// q.enqueue(30);
// q.enqueue(40);
// q.enqueue(50);
// q.enqueue(60);
// q.display();


// q.dequeue();
// q.dequeue();
// q.display();

// q.peek();
// q.display();

//   Output :-
// Queue is full!
// [ 10, 20, 30, 40, 50 ]
// remove element in queue : 10
// remove element in queue : 20
// [ 30, 40, 50 ]
// peak element is: 30
// [ 30, 40, 50 ]


/* =============================================================================================== */

// 2. write a program Queue using two stacks.

// class circularqueue{
//     constructor(){
//         this.s1 = [];
//         this.s2 = [];
//     }

//     addqueue(val){
//         this.s1.push(val)
//     }

//     deletqueue(){
//         while(this.s1.length > 1){
//             this.s2.push(this.s1.pop())
//         }

//         let deletele=this.s1.pop();

//         while(this.s2.length > 0){
//             this.s1.push(this.s2.pop())
//         }
//         console.log("remove element : ",deletele)
//     }

//     peakqueue(){
//         while(this.s1.length > 1){
//             this.s2.push(this.s1.pop())
//         }

//         let peakele=this.s1[0];

//         while(this.s2.length > 0){
//             this.s1.push(this.s2.pop())
//         }
//         console.log("peak element : ",peakele)
//     }

//     isempty(){
//         if(this.s1.length == 0){
//             console.log("queue is empty");
//         }
//         else{
//             console.log("queue is not empty");
//         }
//     }

//     display(){
//         console.log(this.s1)
//     }
// }

// let q = new circularqueue();

// q.addqueue(10);
// q.addqueue(20);
// q.addqueue(30);
// q.addqueue(40);
// q.display();
// q.deletqueue();
// q.display();
// q.peakqueue();
// q.display();
// q.isempty();
// q.display();

// output : 
// [10, 20, 30, 40]
// remove element :  10
// [20, 30, 40]
// peak element :  20
// [20, 30, 40]
// queue is not empty
// [20, 30, 40]


/* ======================================================================================== */


// 3. write a program check first string swap can make strings equal. (leetcode question no 1790)

// let areAlmostEqual = function (s1, s2) {
//     if (s1 === s2) {
//         return true;
//     }
//     let result = [];

//     for (let i = 0; i < s1.length; i++) {
//         if (s1[i] !== s2[i]) {
//             result.push(i);
//         }

//         if (result.length > 2) {
//             return false;
//         }
//     }
//     return result.length === 2
// };

// let s1 = "bank";
// let s2 = "kanb";

// console.log(areAlmostEqual(s1, s2));

// output =  true


/* =============================================================================================== */