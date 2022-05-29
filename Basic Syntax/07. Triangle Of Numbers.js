function solve(n){
    for(i = 1; i <= n; i++){ 
        let numbers = '';
        for(j = 1; j <= i; j++){
            numbers += i + ' ';
        }
        console.log(numbers);
    }
}

solve(3);