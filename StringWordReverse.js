function reverseWord(str) {
    let words = str.split(" ");
    let reverse = "";

    for (let i = 0; i < words.length; i++) {
        let revWord = "";
        for (let j = words[i].length - 1; j >= 0; j--) {
            revWord += words[i][j];
        }
        reverse += revWord + " ";
    }
    return reverse.trim();
}

let str = prompt("Enter string: ");
console.log(reverseWord(str));
