function displayAndSumNums(num1, num2){
    let sum = 0
    numbers = []
    for (let i = num1; i <= num2; i++ ){
        sum += i;
        numbers.push(i);
    }
    console.log(`${numbers.join(' ')}`);
    console.log(`Sum: ${sum}`);
}

displayAndSumNums(5, 10)
displayAndSumNums(0, 26)