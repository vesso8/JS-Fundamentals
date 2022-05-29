function solve(arr){
    let newArr = [];
    for(let i = 0; i < arr.length; i++){
        let currentSeq = [arr[i]];
        for(let j = i + 1; j < arr.length; j++){
            if(arr[i] === arr[j]){
                currentSeq.push(arr[j]);
            }else{
                break;
            }
        }
        if( newArr.length < currentSeq.length ){
            newArr = currentSeq;
        }
    }
    console.log(newArr.join(' '));
}
solve([2, 1, 1, 2, 3, 3, 2, 2, 2, 1]);
solve([1, 1, 1, 2, 3, 1, 3, 3]);
solve([4, 4, 4, 4]);
solve([0, 1, 1, 5, 2, 2, 6, 3, 3]);