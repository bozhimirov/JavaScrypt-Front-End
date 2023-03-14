function factorialDivision(num1, num2) {
    
    return (getFactorial(num1) / getFactorial(num2)).toFixed(2)

    function getFactorial(number) {
    if (number === 1) {
        return number;
    }
    return number * getFactorial(number - 1);
    }
}