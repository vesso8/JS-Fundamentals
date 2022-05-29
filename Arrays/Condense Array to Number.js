function solve(arr){
    let sum_nums = 0;
    let index = 0;
    let condensed = [];
    while(index < arr.length-1){
        condensed[index] = arr[index] + arr[index+1];
        index +=1 
    }
    console.log(condensed);
}

solve([2,10,3]);
solve([5,0,4,1,2]);
solve([1]);

