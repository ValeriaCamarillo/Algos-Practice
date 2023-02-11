//SORTING AN ARRAY//

const bubbleSort = (arr) => {
    let len = arr.length;
    for(let i = 0; i < len; i++){
        for(let j = 0; j < len; j++){
            if(arr[j] > arr[j + 1]){
                let temp = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = temp; 
            }

        }
    }
    return arr;
}
console.log(bubbleSort([4, 5, 3, 1, 2])) // [1, 2, 3, 4, 5]