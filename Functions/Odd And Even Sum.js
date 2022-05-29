function solve(num){
    let arr = String(num).split('');
    let sumEven = 0;
    let sumOdd = 0;
    for(i = 0 ; i < arr.length; i++){
        const n = Number(arr[i]);
        if( n % 2 == 0){
            sumEven += n;
        }else{
            sumOdd += n;
        }
    }
    return `Odd sum = ${sumOdd}, Even sum = ${sumEven}`
}

console.log(solve(1000435));
console.log(solve(3495892137259234));