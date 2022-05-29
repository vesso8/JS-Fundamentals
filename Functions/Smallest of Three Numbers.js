function smallestNum(firstNum, secondNum, thirdNum){
    let smallest = Number.MAX_SAFE_INTEGER;
    smallest = smaller(firstNum, smallest);
    smallest = smaller(secondNum, smallest);
    smallest = smaller(thirdNum, smallest);

    function smaller(num, smaller){
        if(num < smaller){
            smaller = num;
        }
        return smaller;
    }
    return smallest;
}

console.log(smallestNum(2, 5, 3));
console.log(smallestNum(600, 342, 123));
console.log(smallestNum(25, 21, 4));
console.log(smallestNum(2, 2 , 2));