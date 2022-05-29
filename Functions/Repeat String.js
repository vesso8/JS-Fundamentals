function solve(string, n){
    let newString = '';
    for(i = 0 ; i < n; i++){
        newString += string;
    }
    console.log(newString);
}


solve("abc", 3);
solve("String", 2);