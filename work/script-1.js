function SortedSearch(arr, target){
    let low = 0, high = arr.length -1;

    while(low<= high){
        let mid = Math.floor((low + high) / 2);

        if(arr[mid] == target){
            return mid;
        }
        else if(arr[low] <= arr[mid]){
            if(arr[low]<=target && target<arr[mid]){
                high = mid - 1;
            }else{
                low = mid + 1
            }
        }else{
            if(arr[mid]< target && target <= arr[high]){
                low = mid + 1;
            }else{
                high = mid - 1;
            }
        }
    }

    return -1;
}

let data = [4,5,7,8,0,1,3]

console.log(SortedSearch(data, 4))