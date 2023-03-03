function sumDigits(num){
    let output
    if ( num >= 0 && num <= 2){
        output ='baby';
    } else if(num >= 3 && num <= 13){
        output ='child';
    } else if (num >= 14 && num <= 19){
        output ='teenager';
    } else if (num >= 20 && num <= 65){
        output ='adult';
    } else if (num >= 66){
        output ='elder';
    } else{
        output ='out of bounds';
    }
    console.log(output);
}

sumDigits(20);
sumDigits(1);
sumDigits(-1);
sumDigits(100);
