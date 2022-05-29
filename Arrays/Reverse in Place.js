function solve(arr){
    new_arr = [];
    for(let i = 0; i< arr.length / 2; i++){
        new_arr[i] = arr[arr.length - 1 - i];
        new_arr[arr.length - 1 - i] = arr[i];
    }
    console.log(new_arr.join(' '));
    
}

solve(['a', 'b', 'c', 'd', 'e']);