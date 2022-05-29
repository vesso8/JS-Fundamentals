function solve(first, ch, second){
    let result = first.replace("_" , ch);

    if(result === second){
        console.log("Matched");
    }else{
        console.log("Not Matched");
    }
}


solve('Str_ng', 'I', 'Strong')