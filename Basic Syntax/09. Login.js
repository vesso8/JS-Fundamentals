function solve(arr){
    let username = arr.shift();
    let password = username.split('').reverse().join('');
    for(i = 0; i < arr.length ; i++){
        if(password != arr[i]){
            if(i == 3){
                console.log(`User ${username} blocked!`);
                break;
            }else{
                console.log(`Incorrect password. Try again.`);
            }
        }else{
            console.log(`User ${username} logged in.`)
            break;
        }
    }

}

solve(['Acer','login','go','let me in','recA']);