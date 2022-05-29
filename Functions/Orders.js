function solve(product, quantity){
    let price = 0;
    let coffee = 1.50;
    let water = 1.00;
    let coke = 1.40;
    let snacks = 2.00;
    if(product == "coffee"){
        price = coffee * quantity;
    }else if(product == "water"){
        price = water * quantity;
    }else if(product == "coke"){
        price = coke * quantity;
    }else if(product == "snacks"){
        price = snacks * quantity;
    }
    console.log(price.toFixed(2));
}

solve("water", 5);
solve("coffee", 2);
