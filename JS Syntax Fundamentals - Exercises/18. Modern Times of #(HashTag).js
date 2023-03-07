// function hashtag(string){
//     let words = string.split(' ');
//     let result = []
//     for (const word of words){
//         if (word.startsWith('#') && word.length > 1 && checkValid(word)){
//             result.push(word.slice(1));
//         }
//     }

//     console.log(result.join('\n'))

//     function checkValid(word){
//         let lower = word.toLowerCase()
//             .slice(1);

//         for (const symbol of lower) {
//             let asciCode = symbol.charCodeAt(0);
//             if (!(asciCode >=97 && asciCode <= 122)) {
//                 return false
//             }
//         }

//         return true;
//     }
// }

function hashtag(text){
 return text.split(' ')
    .filter((word) => word.startsWith('#') && containsOnlyLetters(word))
    .map((word) => word.slice(1))
    .filter((word) => word !== '')
    .join('\n');
    
    function containsOnlyLetters(word){
        return [...word.toLowerCase()]
            .slice(1)
            .map((symbol) => symbol.charCodeAt(0))
            .every((charCode) => charCode >= 97 && charCode <=122);
    }
}


console.log(
    hashtag(
    'Nowadays everyone uses # to tag a #special word in #socialMedia'
    )
)
