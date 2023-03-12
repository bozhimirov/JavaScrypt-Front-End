function charactersInRange(char1, char2) {
    const asciiCode = char => char.charCodeAt(0);
    let first = Math.min(asciiCode(char1), asciiCode(char2));
    let last = Math.max(asciiCode(char1), asciiCode(char2));

    let chars = [];

    for (let index = first + 1; index < last; index++) {
        
        chars.push(String.fromCharCode(index))
    }
    
    console.log(chars.join(' '))
}

charactersInRange('a',
'd'
)