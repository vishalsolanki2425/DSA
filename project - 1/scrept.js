// 1. WAP for array data sorting descending order using selection sort.

// let arr = [64,34,25,12,22,11,90];

// function descending(arr) {
//     let len = arr.length;
//     for (let i = 0; i < len; i++) {
//         for (let j = i + 1; j < len; j++) {
//             if (arr[i] < arr[j]) {
//             let sort;
//             sort = arr[i];
//             arr[i] = arr[j];
//             arr[j] = sort;
//             }
//         }
//     }
// }
// console.log("Before sorting:", arr);

// descending(arr);

// console.log("After sorting:",arr);


// output:
//  Original array: 64 34 25 12 22 11 90
// Sorted array in descending order: 90 64 34 25 22 12 11

/* ======================================================================================================= */

// 2. WAP for array data sorting ascending order using Merge sort.

// let arr = [64, 34, 25, 12, 22, 11, 90];

// function mergeSort(arr) {
//     if (arr.length <= 1) {
//         return arr;
//     }

//     const mid = Math.floor(arr.length / 2);
//     const left = mergeSort(arr.slice(0, mid));
//     const right = mergeSort(arr.slice(mid));

//     return merge(left, right);
// }

// function merge(left, right) {
//     let sortedArray = [];
//     while (left.length && right.length) {
//         if (left[0] < right[0]) {
//             sortedArray.push(left.shift());
//         } else {
//             sortedArray.push(right.shift());
//         }
//     }
//     return [...sortedArray, ...left, ...right];
// }

// console.log("Original array: ",arr);

// arr = mergeSort(arr);

// console.log("Sorted array in ascending order: ",arr);

// output: Original array: 64 34 25 12 22 11 90
//         Sorted array in ascending order: 11 12 22 25 34 64 90

/* ======================================================================================================= */

// 3. WAP for 2-D array print and also print it's square array

// let arr = [
//     [1, 2, 3],
//     [4, 5, 6],
//     [7, 8, 9]
// ];

// function print2DArray(arr) {
//     for (let i = 0; i < arr.length; i++) {
//         let array = "";
//         for (let j = 0; j < arr[i].length; j++) {
//             array += arr[i][j] + " ";
//         }
//         console.log(array);
//     }
// }

// function square2DArray(arr) {
//     let squareArr = [];
//     for (let i = 0; i < arr.length; i++) {
//         squareArr[i] = [];
//         for (let j = 0; j < arr[i].length; j++) {
//             squareArr[i][j] = arr[i][j] * arr[i][j];
//         }
//     }
//     return squareArr;
// }

// console.log("Original 2D Array: ",arr);
// print2DArray(arr);

// let squareArr = square2DArray(arr);
// console.log("Squared 2D Array:");
// print2DArray(squareArr);

// output: Original 2D Array: 1 2 3
                          //  4 5 6
                          //  7 8 9

       //   Squared 2D Array: 1 4 9
                         //  16 25 36
                         //  49 64 81

/* ======================================================================================================= */

//4. WAP for array operations (like push and pop, slice) without its method                         

// let arr = [ 1, 2, 3, 4, 5 ]

// function pop(arr){
//     arr.length = arr.length-1;
// }

// pop(arr);
// console.log("pop",arr);


// function push(arr,value){
//     arr[arr.length]=value;
//     return arr;
// }

// push(arr,10);
// console.log("push",arr);

// function slice(arr,start=0,end=arr.length){
    
//     let newArr = [];
//     for(let i=start;i<end;i++){
//         newArr[i-start]=arr[i];
//         }
//         return newArr;
//  }

// console.log("slice",slice(arr));
// console.log("slice",slice(arr,1));

// output:
// POP [ 1, 2, 3, 4 ]
// PUSH [ 1, 2, 3, 4, 10 ]
// SLICE [ 1, 2, 3, 4, 10 ]
// SLICE [ 1, 2, 3 ]
// SLICE [ 2, 3, 4, 10 ]

/* ======================================================================================================= */