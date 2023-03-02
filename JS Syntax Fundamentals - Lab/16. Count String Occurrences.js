function solve(string, sword){
    let words = string.split(' ');
    let counter = 0
    for (let word of words) {
        if (word === sword){
            counter += 1
        }
    }
    console.log(counter)
}

solve('This is a word and it also is a sentence',
'is'
)