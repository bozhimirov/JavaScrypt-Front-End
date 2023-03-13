function loadingBar(number) {
    let symbols = number / 10;
    if (number !== 100) {
        string = ""
        string += '%'.repeat(symbols)
        string += '.'.repeat(10-symbols)
        console.log(`${number}% [${string}]`)
        console.log('Still loading...')
    } else {
        console.log(`${number}% Complete!`)
        console.log('[%%%%%%%%%%]')
    }
} 

loadingBar(30);
loadingBar(50);
loadingBar(100);