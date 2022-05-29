function vacation(group_of_people, type_of_group, day_of_the_week){
    let total_price = 0;
    if(day_of_the_week == "Friday"){
        if(type_of_group == "Students"){
            if(group_of_people >= 30){
                total_price += (8.45 * group_of_people) * 0.85;
            }else{ 
            total_price += 8.45 * group_of_people;
            }
        } else if(type_of_group == "Business"){
            if(group_of_people >= 100){
                total_price += 10.90 * (group_of_people - 10);
            }else{
                total_price += 10.90 * group_of_people;
            } 
        } else if(type_of_group == "Regular"){
            if(group_of_people >= 10 && group_of_people <= 20){
                total_price += (15 * group_of_people) * 0.95;
            }else{ 
            total_price += 15 * group_of_people;
            }
        }
    } else if(day_of_the_week == "Saturday"){
        if(type_of_group == "Students"){
            if(group_of_people >= 30){
                total_price += (9.80 * group_of_people) * 0.85;
            }else{ 
            total_price += 9.80 * group_of_people;
            }
        } else if(type_of_group == "Business"){
            if(group_of_people >= 100){
                total_price += 15.60 * (group_of_people - 10);
            }else{ 
            total_price += 15.60 * group_of_people;
            }
        } else if(type_of_group == "Regular"){
            if(group_of_people >= 10 && group_of_people <= 20){
                total_price += (20 * group_of_people) * 0.95;
            }else{ 
            total_price += 20 * group_of_people;
            }
        }
    } else if(day_of_the_week == "Sunday"){
        if(type_of_group == "Students"){
            if(group_of_people >= 30){
                total_price += (10.46 * group_of_people) * 0.85;
            } else{
            total_price += 10.46 * group_of_people;
            }
        } else if(type_of_group == "Business"){
            if(group_of_people >= 100){
                total_price += 16 * (group_of_people - 10);
            } else{
            total_price += 16 * group_of_people;
            }
        } else if(type_of_group == "Regular"){
            if(group_of_people >= 10 && group_of_people <= 20){
                total_price += (22.50 * group_of_people) * 0.95;
            } else{
            total_price += 22.50 * group_of_people;
            }
        }
    }
    console.log(`Total price: ${total_price.toFixed(2)}`);
}

vacation(40,
    "Regular",
    "Saturday");