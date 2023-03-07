function pascalCaseSplitter(text) {
    let string = '';
    string += text[0]
    for (const symbol of text.slice(1)) {
      const asciiCode = symbol.charCodeAt(0);
      if (asciiCode >= 65 && asciiCode <= 90) {
        string += ', ';
        string += symbol;
      } else {
        string += symbol
      } 
    }

// function regexSplitter(text) {
//     return text.split(/(?=[A-Z])/g)
// }

    console.log(string)
}

pascalCaseSplitter(
    'SplitMeIfYouCanHaHaYouCantOrYouCan'
    )