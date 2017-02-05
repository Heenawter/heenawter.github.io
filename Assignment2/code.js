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
        palindromes: palindromes(txt),
        longestWords: longestWords(txt),
        mostFrequentWords: mostFrequentWords(txt)
    };
}

function getWords(txt) {
    // replace any non-alphanumeric characters with ' ',
    // split on ' ', and remove any 'empty' whitespace strings
    let lowerCase = txt.toLowerCase();
    let allAlphanumeric = lowerCase.replace(/[^a-z0-9]/g, ' '); // http://stackoverflow.com/questions/388996/
    let words = allAlphanumeric.split(' ').filter(nonEmpty);
    // console.log("words: ", words);
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

    for(let i = 0; i < lines.length; i++) {
        let lineLength = lines[i].length;
        if(lineLength > max)
            max = lineLength;
    }
    return max;
}

function removeDuplicates(words) {
    let uniqueWords = [];
    for(let word of words) {
        if(uniqueWords.indexOf(word) === -1)
            uniqueWords.push(word);
    }
    return uniqueWords;
}

function palindromes(txt) {
    let words = getWords(txt);
    let uniqueWords = removeDuplicates(words);
    let palindromes = [];
    for(let i = 0; i < uniqueWords.length; i++) {
        let word = uniqueWords[i];
        if(word.length > 2) {
            let reversedWord = word.split("").reverse().join("");
            if(word === reversedWord)
                palindromes.push(word);
        }
    }
    return palindromes;
}

// reference: http://www.w3schools.com/jsref/jsref_sort.asp
function longestWords(txt) {
    // sort words by length
    let words = getWords(txt).sort(); // .reverse()
    let uniqueWords = removeDuplicates(words);
    let sorted = uniqueWords.sort(function(a,b){return b.length - a.length});
  //  console.log("Sorted: ", sorted);
    return sorted.slice(0, 10);
}


function mostFrequentWords(txt) {
    // sort words by frequency
    let words = getWords(txt).sort();
    let uniqueWords = removeDuplicates(words);
    let counts = [];

    let j = 0;
    let count = 0;
    for(let i = 0; i < uniqueWords.length; i++) {
        while(words[j] === uniqueWords[i]) {
            j++;
            count++;
        }
        counts.push({ word: uniqueWords[i], count: count });
        count = 0;
    }

    let sorted = counts.sort(function(a,b){return b.count - a.count});
    let sorted2 = sorted.map(function(a){return a.word + "(" + a.count + ")"});
    console.log("counts: ", sorted2);

    return sorted2.slice(0,10);
}
