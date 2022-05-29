function solve(starting_yield){
    let yield = starting_yield;
    let total_amount_spice = 0;
    let total_days = 0;
    while(yield >= 100){
        total_amount_spice += yield;
        total_days += 1;
        total_amount_spice -= 26;
        yield -= 10;

    }
    if(total_amount_spice >= 26){
        total_amount_spice -= 26;
    }
    console.log(total_days);
    console.log(total_amount_spice);
}

solve(450);