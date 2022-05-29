function calculate(number_of_pages, pages_for_hour, days){
    let total_time = number_of_pages / pages_for_hour;
    let hours_per_day = total_time / days;
    console.log(hours_per_day);
}

calculate(432,
    15 ,
    4 )