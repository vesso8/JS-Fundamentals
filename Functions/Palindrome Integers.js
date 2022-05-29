function solve(arr){
    let result = '';
    for(let num of arr){
        let isPalindrome = 'true';
        num = String(num);
        let mid = parseInt(num.length / 2);
        for(let i = 0; i <= mid; i++){
            let lastIndex = num.length - 1;
            if(num[i] !== num[lastIndex - i]){
                isPalindrome = 'false';
                break;
            }
        }
        result += isPalindrome + "\n";
    }
    return result;
}

console.log(solve([123,323,421,121]));
console.log(solve([32,2,232,1010]));