function addSubtract(first, second, third) {
    // function sum(num1, num2){
    //     return num1 + num2;
    // }
    const sum = (a, b) => a + b;
    // function subtract(num1, num2) {
    //     return num1 - num2;
    // }
    const subtract = (sum, num) => sum - num;

    return subtract(sum(first, second), third);
}