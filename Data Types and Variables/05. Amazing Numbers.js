function solve(number){
    number = number.toString();
    let sum = 0;
    for(i = 0; i < number.length; i++){
        sum += Number(number[i]);
    }
    let result = sum.toString().includes('9');
    if(result == true){
        console.log(`${number} Amazing? True`);
    }else{
        console.log(`${number} Amazing? False`);
    }
}


solve(999);