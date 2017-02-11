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
        maxLineLength: maxLineLength(txt),
        averageWordLength: averageWordLength(txt),
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
    let lines = allLines.filter(nonEmpty);
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
function alphabetical(a, b) {
    if(a <= b)
        return -1;
    else
        return 1;
}


function longestWords(txt) {
    // sort words by length
    let words = getWords(txt);
    let uniqueWords = removeDuplicates(words);

    function lengthSort(a, b) {
        if(a.length === b.length)
            return alphabetical(a,b);
        else if (a.length < b.length)
            return 1;
        else
            return -1;
    }

    let sorted = uniqueWords.sort(lengthSort);
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

    function frequencySort(a, b) {
      if(a.count === b.count)
          return alphabetical(a.word,b.word);
      else if (a.count < b.count)
          return 1;
      else
          return -1;
    }

    let sorted = counts.sort(frequencySort);
    return sorted.slice(0,10).map(function(a){return a.word + "(" + a.count + ")"});
}
