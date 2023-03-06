function arrayRotation(numbers, rotations){
    rotations %= numbers.length;

    for (let i = 0; i < rotations; i++){
        let first = numbers.shift();
        numbers.push(first);
    }

    console.log(numbers.join(' '));
}

arrayRotation(
    [51, 47, 32, 61, 21], 2
);
arrayRotation(
    [32, 21, 61, 1], 4
);
arrayRotation(
    [2, 4, 15, 31], 5
);

