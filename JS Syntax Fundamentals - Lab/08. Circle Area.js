function solve(input){
    let result
    let type = typeof(input)
    if (type === 'number') {
        result = Math.pow(input, 2) * Math.PI;
        console.log(result.toFixed(2));
    } else {
        console.log(`We can not calculate the circle area, because we receive a ${type}.`)
    }
}

solve(5)
solve('name')