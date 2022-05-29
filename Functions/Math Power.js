function solve(number, power){
    let numSum = 1;
    for(i = 0; i < power; i++){
        numSum *= number;
    }
    console.log(numSum);
}

solve(2, 8);
solve(3, 4);