function sortNumbers(numbers){
    let sorted = [...numbers].sort((a, b) => a-b);
    let step = 0;
    let result = [];
    while (sorted.length > 0) {
        if (step % 2 === 0) {
            let first = sorted.shift();
            result.push(first);
        } else {
            let last = sorted.pop();
            result.push(last);
        }
        step++;
    }
    return result;
}

console.log(
    sortNumbers(
        [1, 65, 3, 52, 48, 63, 31, -3, 18, 56]
    )
);