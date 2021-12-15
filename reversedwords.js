function reversedWords(string) {
    let arr = string.split('');

    let arrayOfReservedWords = [];
    arr.forEach(word => {
        let reversedWords = '';
        for(let i = word.length - 1; i >= 0; i--) {
            reversedWords += word[i];
        }

        arrayOfReservedWords.push(reversedWords);
    });

    return arrayOfReservedWords.join('');
}

console.log(reversedWords('hello word'));