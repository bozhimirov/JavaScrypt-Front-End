function solve(day, age) {
    if (age >= 0 && age <= 18) {
        switch (day){
            case 'Weekday':
                console.log("12$");
            break;
            case 'Weekend':
                console.log("15$");
            break;
            case 'Holiday':
                console.log("5$");
            break;
        }
    } else if (age <= 64 && age > 18) {
        switch (day){
            case 'Weekday':
                console.log("18$");
            break;
            case 'Weekend':
                console.log("20$");
            break;
            case 'Holiday':
                console.log("12$");
            break;
        }
    } else if (age > 64 && age <= 122){
        switch (day){
            case 'Weekday':
                console.log("12$");
            break;
            case 'Weekend':
                console.log("15$");
            break;
            case 'Holiday':
                console.log("10$");
            break;
        }
    } else {
        console.log("Error!")
    }
}
    

solve('Weekday', 42)
solve('Holiday', -12)
solve('Holiday', 15)
