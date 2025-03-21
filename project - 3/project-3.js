// 1. Write a program to implement binary search to find the index of a target element in a sorted array.

// function binarySearch(arr, target) {
//     let left = 0;
//     let right = arr.length - 1;

//     while (left <= right) {
//         let mid = Math.floor((left + right) / 2);

//         if (arr[mid] == target) {
//             return mid;
//         }

//         if (arr[mid] < target) {
//             left = mid + 1;
//         } else {
//             right = mid - 1;
//         }
//     }

//     return -1;
// }

// let Arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// console.log(binarySearch(Arr, 7));
// console.log(binarySearch(Arr, 9));

// output : 6
// output : 8


/* ==================================================================================================== */


// 2. write a program to find the first and last occurrence of a target element using the lower and upper bound methods. 
// also return the count of occurrences.

// function lowerBound(arr, target) {
//     let low = 0, high = arr.length;
//     while (low < high) {
//         let mid = Math.floor((low + high) / 2);
//         if (arr[mid] < target) {
//             low = mid + 1;
//         } else {
//             high = mid;
//         }
//     }
//     return low;
// }

// function upperBound(arr, target) {
//     let low = 0, high = arr.length;
//     while (low < high) {
//         let mid = Math.floor((low + high) / 2);
//         if (arr[mid] <= target) {
//             low = mid + 1;
//         } else {
//             high = mid;
//         }
//     }
//     return low;
// }

// function findOccurrences(arr, target) {
//     let first = lowerBound(arr, target);
//     let last = upperBound(arr, target) - 1;

//     if (first <= last && arr[first] === target && arr[last] === target) {
//         let count = last - first + 1;
//         return { count, first, last};
//     }
//     return { count: 0 , first: -1, last: -1};
// }

// let arr = [1, 2, 2, 2, 3, 4, 5];

// console.log(findOccurrences(arr, 2));

// output : count : 3
//          first : 1
//          last  : 3


/* ================================================================================================== */


// 3. Write a program to find the pivot index where the rotation occurs in a rotated sorted array.

function findPivot(arr) {
    let low = 0;
    let high = arr.length - 1;

    while (low < high) {
        let mid = Math.floor((low + high) / 2);

        if (arr[mid] > arr[high]) {
            low = mid + 1;
        } else {
            high = mid;
        }
    }

    return low;
}

console.log(findPivot([4, 5, 6, 7, 0, 1, 2]));  // Output: 4
console.log(findPivot([3, 4, 5, 1, 2]));        // Output: 3


/* ============================================================================================= */