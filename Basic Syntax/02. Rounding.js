function solve(number, precision){
    let numberToBeFixed = "";
    if(precision >= 0 && precision <= 15){
        numberToBeFixed = number.toFixed(precision);
    } else{
        numberToBeFixed = number.toFixed(15);
    }
    console.log(parseFloat(numberToBeFixed));
}

solve(10.5,3)