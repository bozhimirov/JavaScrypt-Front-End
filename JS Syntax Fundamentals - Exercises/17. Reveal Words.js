function reveal(searchedWords, text) {
    let words = searchedWords.split(', ') 

    while (text.includes('*')) {
        for (const word of words) {
            text = text.replace('*'.repeat(word.length), word);
        }
        
    }
    console.log(text);
}

reveal('great, learning',
'softuni is ***** place for ******** new programming languages'
)