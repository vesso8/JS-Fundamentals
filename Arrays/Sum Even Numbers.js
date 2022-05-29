function solve(arr){
    let sumNums = 0;
    for (i = 0; i < arr.length; i++){
        arr[i] = Number(arr[i]);
        if(arr[i] % 2 == 0){
            sumNums += arr[i];
        }

    }
    console.log(sumNums);
}

solve(['2','4','6','8','10']);