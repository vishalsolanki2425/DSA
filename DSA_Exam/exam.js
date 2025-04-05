
// Q.1 WAP to check array is palindrome or not using JavaScript (only with Numbers)

// function Palindrome(arr) {
//     let left = 0;
//     let right = arr.length - 1;

//     while (left < right) {
//         if (arr[left] !== arr[right]) {
//             return 'this Number is not Palindrome';
//         }
//         left++;
//         right--;
//     }

//     return 'this Number is Palindrome';
// }

// console.log(Palindrome([1, 2, 3, 2, 1]));
// console.log(Palindrome([1, 2, 3, 4, 5]));

// output : this Number is Palindrome
//          this Number is not Palindrome


/* =================================================================================== */

// Q.2 WAP to Merge two array in single Array using JavaScript.

// function mergeArr(arr1, arr2) {
//     let result = [];

//     for (let i = 0; i < arr1.length; i++) {
//         result.push(arr1[i]);
//     }

//     for (let i = 0; i < arr2.length; i++) {
//         result.push(arr2[i]);
//     }

//     return result;
// }

// let array1 = [1, 2, 3];
// let array2 = [4, 5, 6];
// console.log(mergeArr(array1, array2));

// output :  [1, 2, 3, 4, 5, 6]


/* =================================================================================== */

// Q.3 WAP to implements Quick Sort using JavaScript.

function quickSort(arr, left = 0, right = arr.length - 1) {
    if (left < right) {

        let pivotIndex = partition(arr, left, right);

        quickSort(arr, left, pivotIndex - 1);
        quickSort(arr, pivotIndex + 1, right);
    }
    return arr;
}

function partition(arr, left, right) {

    let pivot = arr[right];
    let i = left - 1;

    for (let j = left; j < right; j++) {
        if (arr[j] <= pivot) {
            i++;
            [arr[i], arr[j]] = [arr[j], arr[i]];
        }
    }

    [arr[i + 1], arr[right]] = [arr[right], arr[i + 1]];
    return i + 1;
}

let unsortedArray = [7, 2, 1, 6, 8, 5, 3, 4];
console.log("Unsorted Array:", unsortedArray);

let sortedArray = quickSort([...unsortedArray]);
console.log("Sorted Array:", sortedArray);


/* =================================================================================== */

// Q.4 WAP to implements Create singly Linked list, adding a new Elements, and Delete node from singly linked list (Without any pre-defined function)

// class Node {
//     constructor(data) {
//         this.data = data;
//         this.next = null;
//     }
// }

// class LinkedList {
//     constructor() {
//         this.head = null;
//     }

//     addEle(data) {
//         let newNode = new Node(data);

//         if (this.head === null) {
//             this.head = newNode;
//         } else {
//             let cerr = this.head;
//             while (cerr.next !== null) {
//                 cerr = cerr.next;
//             }
//             cerr.next = newNode;
//         }
//     }

//     deleteELe(value) {
//         if (this.head === null) {
//             console.log("List is empty");
//             return;
//         }

//         if (this.head.data === value) {
//             this.head = this.head.next;
//             return;
//         }

//         let cerr = this.head;
//         let prev = null;

//         while (cerr !== null && cerr.data !== value) {
//             prev = cerr;
//             cerr = cerr.next;
//         }

//         if (cerr === null) {
//             console.log("Node not found");
//             return;
//         }

//         prev.next = cerr.next;
//     }

//     display() {
//         let cerr = this.head;
//         let result = "";

//         while (cerr !== null) {
//             result += cerr.data + " -> ";
//             cerr = cerr.next;
//         }

//         result += "null";
//         console.log("Linked List : ", result);
//     }
// }

// let linked = new LinkedList();

// linked.addEle(10);
// linked.addEle(20);
// linked.addEle(30);
// linked.addEle(40);
// linked.display();

// linked.deleteELe(20);
// linked.display(); 

// linked.deleteELe(10);
// linked.display();

// Linked List: 10 -> 20 -> 30 -> 40 -> null
// Linked List: 10 -> 30 -> 40 -> null
// Linked List: 30 -> 40 -> null


/* =================================================================================== */

// Q.5 WAP to implement insert and remove element from Queue using JavaScript.

// class Queue {
//     constructor() {
//         this.arr = [];
//     }

//     insert(ele) {
//         this.arr.push(ele);
//     }

//     remove() {
//         return this.arr.shift();
//     }

//     isEmpty() {
//         if (this.arr.length === 0) {
//             return console.log('this is empty');
//         }
//         else {
//             return console.log('this is not empty');
//         }
//     }

//     peak() {
//         return this.arr[0];
//     }

//     display() {
//         console.log(this.arr);
//     }
// }

// let q = new Queue();

// q.insert(10);
// q.insert(20);
// q.insert(30);
// q.insert(40);
// q.insert(50);
// q.display();
// q.remove();
// q.display();

// q.isEmpty();

// console.log(q.peak());

// output : 10,20,30,40,50
//          20,30,40,50
//          this is not empty [20,30,40,50]
//          20


/* =================================================================================== */