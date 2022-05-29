function solve(arr){
    var sumOriginal = 0;
    var sumModified = 0;
    for(i = 0; i < arr.length; i++){
        if(arr[i] % 2 == 0){
            sumOriginal += arr[i];
            arr[i] = arr[i] + i;
            sumModified += arr[i];
        }else{
            sumOriginal += arr[i];
            arr[i] = arr[i] - i;
            sumModified += arr[i];
        }
    }
    console.log(arr);
    console.log(sumOriginal);
    console.log(sumModified);
}

solve([5, 15, 23, 56, 35]);
solve([-5, 11, 3, 0, 2]);