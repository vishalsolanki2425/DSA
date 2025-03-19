// 1. find maximum number in array.

// let array = [10,20,30,40,50,60];

// function maximum(array) {
//     let maximum = array[0]

//     for (let i = 0; i < array.length; i++) {
//         if (array[i] > maximum) {
//             maximum = array[i];
//         }        
//     }
//     return maximum;
// }

// console.log(maximum(array));

// 2. remove repateElement in array

// transpose array 


// let arr = [2, 45, 32, 45, 66, 77, 32]


//   function len (arr, target) {
//     for (let i =0; i < arr.length; i++){
//         if(arr[i] == target){
//             return i
//         }
//     }
//     return -1

//   }

//   console.log(len(arr, (76)))



let arr = [1, 2, 3, 4, 5, 6 ]

function binary (arr, target) {
    let left = 0;
    let right = arr.length - 1;


    while(left <= right){
        
    let mid =  Math.floor((left + right) / 2)
        if(arr[mid] == target){
            return mid
        }
        else if(arr[mid] < target){
            left = mid + 1
        }
        else if(arr[mid] > target){
            right = mid - 1
        }

    }
}

console.log(binary(arr, (5)))

