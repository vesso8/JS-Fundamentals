function solve(arr){
    let isnotEqual = true;
    for(let i = 0; i < arr.length; i++){
        let leftSum = 0;
        let rightSum = 0;
        if(i !== 0){
            for(let j = i - 1; j >= 0; j--){
                leftSum += arr[j];
            }
        }
        if(i !== arr.length-1){
            for(let k = i + 1; k < arr.length; k++){
                rightSum += arr[k];
            }
        }
        if(leftSum === rightSum){
            isnotEqual = false;
            console.log(i);
            break;
        }
    }
    if(isnotEqual == true){
        console.log('no');
    }
}

solve([1, 2, 3, 3]);
solve([1, 2]);
solve([1]);
solve([1, 2 , 3]);
solve([10, 5, 5, 99, 3, 4, 2, 5, 1, 1, 4]);