function solve(number){
    let sum_nums = 0;
    number = number.toString(); 
    for(i = 0 ; i < number.length; i++){
        sum_nums += Number(number[i]);
    }
    console.log(sum_nums);
}

solve(97561);