function solve(n){
    number = Number(n);
    for(i = 0; i < number; i++){
        for(j = 0; j < number; j++){    
            for(k = 0; k < number; k++){
                console.log(`${String.fromCharCode(97+i)}${String.fromCharCode(97+j)}${String.fromCharCode(97+k)}`);
            }
        }
    }
}

solve(3);