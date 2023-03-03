function vacation(count, type, day) {
    let total;

    switch(type){
        case "Students":
            if (day === 'Friday'){
                total = count * 8.45;
            } else if (day === 'Saturday'){
                total = count * 9.8;
            } else {
                total = count * 10.46
            }

            if (count >= 30) {
                total -= total * 0.15
            }
        break;
        case "Business":
            if (count >= 100) {
                count -= 10
            }
            if (day === 'Friday'){
                total = count * 10.90;
            } else if (day === 'Saturday'){
                total = count * 15.60;
            } else {
                total = count * 16
            }
            
        break;
        case 'Regular':
            if (day === 'Friday'){
                total = count * 15;
            } else if (day === 'Saturday'){
                total = count * 20;
            } else {
                total = count * 22.50
            }

            if (count >= 10 && count <= 20) {
                total -= total * 0.05
            }
        break;

    }
    console.log(`Total price: ${total.toFixed(2)}`)
}

vacation(30,
    "Students",
    "Sunday"
    )
vacation(40,
    "Regular",
    "Saturday"
    )