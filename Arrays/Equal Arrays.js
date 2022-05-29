function solve(arr1, arr2){
    for(let i = 0; i < arr1.length; i++){
        arr1[i] = Number(arr1[i]);
        
    }
    for(let j = 0; j < arr2.length; j++){
        arr2[j] = Number(arr2[j]);
    }

    let index = 0;
    let sum_nums = 0;
    let areEqual = true;
    for(let k = 0; k < arr1.length; k++){
        if(arr1[index] != arr2[index]){
            areEqual = false;
            console.log(`Arrays are not identical. Found difference at ${index} index`)
            break;
        }else{
            sum_nums += arr1[index];
        }
        index += 1
    }
    if(areEqual == true){
        console.log(`Arrays are identical. Sum: ${sum_nums}`)
    }
}

solve(['10','20','30'], ['10','20','30']);
solve(['1','2','3','4','5'], ['1','2','4','4','5']);
solve(['1'], ['10']);
