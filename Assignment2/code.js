/*
    Name:             Hannah Wright
    ID:               10171450
    Tutorial Section: B02
*/

//
// this is just a stub for a function you need to implement
//
function getStats(txt) {
    return {
        nChars: nChars(txt),
        nWords: nWords(txt),
        nLines: nLines(txt),
        nNonEmptyLines: nNonEmptyLines(txt),
        averageWordLength: 3.3,
        maxLineLength: 33,
        palindromes: ["12321", "kayak", "mom"],
        longestWords: ["xxxxxxxxx", "123444444"],
        mostFrequentWords: [ "hello(7)", "world(1)" ]
    };
}

function nChars(txt) {
    return txt.length;
}

function getWords(txt) {
    // replace any non-alphanumeric characters with ' '
    // split on ' ' and remove any 'empty' whitespace strings

    let temp = txt.replace(/[^a-z0-9]/gi, ' '); // http://stackoverflow.com/questions/388996/
    let words = temp.split(' ').filter(nonEmpty);
    console.log("words: ", words);
    return words;
}

function nonEmpty(txt) {
    let allWhitespace = /^\s+$/g;
    return !(txt === "" || allWhitespace.test(txt));
}

function nWords(txt) {
    let words = getWords(txt);
    return words.length;
}

function nLines(txt) {
    let lines = getLines(txt);
    return lines.length;
}

function getLines(txt) {
    let lines = txt.split("\n");
    return lines;
}

function nNonEmptyLines(txt) {
    let allLines = getLines(txt);
    console.log("allLines: ", allLines);
    let lines = allLines.filter(nonEmpty);
    console.log("nonEmpty: ", lines);
    return lines.length;
}

function averageWordLength(txt) {

}

function maxLineLength(txt) {

}

function palindromes(txt) {

}

function longestWords(txt) {

}

function mostFrequentWords(txt) {

}
