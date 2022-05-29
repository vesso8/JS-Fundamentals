function division(number){
    let divider = 0;
    let not_divisible = false;
    if(number % 10 === 0){
        divider += 10;
    }else if(number % 7 === 0){
        divider += 7;
    } else if(number % 6 === 0){
        divider += 6;
    }else if(number % 3 === 0){
        divider += 3;
    }else if(number % 2 === 0){
        divider += 2;
    }else{
        not_divisible = true;
    }
    if(not_divisible == true){
        console.log("Not divisible");
    }else{
        console.log(`The number is divisible by ${divider}`);
    }
}

division(1643);