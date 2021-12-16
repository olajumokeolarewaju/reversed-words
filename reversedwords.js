function reversedWords(string) {
    let arr = string.split('');

    let arrayOfReversedWords = [];
    arr.forEach(word => {
        let reversedWords = '';
        for(let i = word.length - 1; i >= 0; i--) {
            reversedWords += word[i];
        }

        arrayOfReversedWords.push(reversedWords);
    });

    return arrayOfReversedWords.join('');
}

console.log(reversedWords('hello word'));
