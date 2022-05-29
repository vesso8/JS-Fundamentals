function solve(n){
    i = 1;
    const nums = [];
    let sum = 0;
    while(n>0){
        if(i % 2 != 0){
            console.log(i);
            nums.push(i);
            n--;
        } 
        i += 1;
    }
    for (let i =0; i< nums.length; i++){
        sum += nums[i];
    }
    console.log(`Sum: ${sum}`);
}

solve(3);
