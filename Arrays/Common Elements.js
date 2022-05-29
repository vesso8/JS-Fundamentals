function solve(arr1, arr2){
    for(const el of arr1){
        let isCommon = arr2.includes(el);
        if( isCommon ){
            console.log(el);
        }
    }
}

solve(['S', 'o', 'f', 't', 'U', 'n', 'i', ' '],
['s', 'o', 'c', 'i', 'a', 'l']);