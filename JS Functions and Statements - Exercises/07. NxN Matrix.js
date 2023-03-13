function matrix(num) {
    const matrix = Array(num).fill(Array(num).fill(num)).forEach(row => console.log(row.join(' ')));

}

matrix(7)