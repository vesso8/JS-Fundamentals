function solve(firstArray, secondArray){
    thirdArray = [];
    for(i = 0; i < firstArray.length; i++){
        let num = 0;
        if(i % 2 == 0){
            num = Number(firstArray[i]) + Number(secondArray[i]);
            thirdArray.push(num);
        }else{
            num = firstArray[i] + secondArray[i];
            thirdArray.push(num);
        }
    }
    console.log(thirdArray.join(" - "));
}

solve(['5', '15', '23', '56', '35'],
['17', '22', '87', '36', '11']);
solve(['13', '12312', '5', '77', '4'],
['22', '333', '5', '122', '44']);