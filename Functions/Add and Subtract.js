function solve(numOne, numTwo, numThree){
    let result = 0;
    result = sum(numOne, numTwo);
    result = subtract(result, numThree);
    function sum(a, b){
        return a + b;
    }

    function subtract(res, c){
        return res - c;
    }
    return result;
}

console.log(solve(23,
    6,
    10));

console.log(solve(1,
    17,
    30));

console.log(solve(42,
    58,
    100));