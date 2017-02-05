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
        nChars: txt.length,
        nWords: getWords(txt).length,
        nLines: getLines(txt).length,
        nNonEmptyLines: nNonEmptyLines(txt),
        averageWordLength: averageWordLength(txt),
        maxLineLength: maxLineLength(txt),
        palindromes: ["12321", "kayak", "mom"],
        longestWords: ["xxxxxxxxx", "123444444"],
        mostFrequentWords: [ "hello(7)", "world(1)" ]
    };
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

function getLines(txt) {
    let lines = txt.split("\n");
    return lines;
}

function nNonEmptyLines(txt) {
    let allLines = getLines(txt);
  //  console.log("allLines: ", allLines);
    let lines = allLines.filter(nonEmpty);
  //  console.log("nonEmpty: ", lines);
    return lines.length;
}

function averageWordLength(txt) {
    let totalLength = 0;
    let words = getWords(txt);
    for(let i = 0; i < words.length; i++) {
        totalLength += words[i].length;
    }
    return totalLength / words.length;
}

function maxLineLength(txt) {
    let max = 0;
    let lines = getLines(txt);
    let lineLength;

    for(let i = 0; i < lines.length; i++) {
        lineLength = lines[i].length;
        if(lineLength > max)
            max = lineLength;
    }
    return max;
}

function palindromes(txt) {

}

function longestWords(txt) {

}

function mostFrequentWords(txt) {

}
