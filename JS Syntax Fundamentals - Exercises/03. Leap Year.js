function leapYear(num){
    if (num % 400 === 0  || (num % 4 === 0 && num % 100 !== 0)){
        console.log('yes');
        
    } else {
        console.log('no');
    }
}

leapYear(1984);
leapYear(2003);
leapYear(4);