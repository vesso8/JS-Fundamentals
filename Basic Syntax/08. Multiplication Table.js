function solve(n){
    let result = 0;
    for(i = 1; i <= 10; i++){
        result = n * i;
        console.log(`${n} X ${i} = ${result}`);
    }
}

solve(5);