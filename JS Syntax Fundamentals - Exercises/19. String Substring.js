function substring(word, text){
    return text.toLowerCase()
        .split(' ')
        .some((w) => w === word.toLowerCase()) ? word : `${word} not found!`
}


function stringSubstring(word, text){
    let wordLower = word.toLowerCase();
    let textArray = text.split(' ');

    for (const text of textArray) {
        if (text.toLowerCase() === wordLower) {
            return word
        }
        
    }

    return ` ${word} not found!`;
}
console.log(
    substring(
    'javascript',
    'JavaScript is the best programming language'
));