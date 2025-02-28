// 1. find maximum number in array.

function maximum(array) {
    let maximum = array[0]

    for (let i = 0; i < array.length; i++) {
        if (array[i] > maximum) {
            maximum = array[i];
        }        
    }
    return maximum;
}