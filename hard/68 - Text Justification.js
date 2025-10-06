/**
 * @param {string[]} words
 * @param {number} maxWidth
 * @return {string[]}
 */
let fullJustify = function(words, maxWidth) {
    let resultTextJustification = [];
    let i = 0;

    while (i < words.length) {
        let currentLineWordsWidth = words[i].length;
        let currentLineWords = 1;

        while (i + currentLineWords < words.length) { 
            if (currentLineWordsWidth + words[i + currentLineWords].length + (currentLineWords) > maxWidth) {
                break; 
            } 
            
            currentLineWordsWidth += words[i + currentLineWords].length; currentLineWords++ 
        }
        
        resultTextJustification.push(getJustifiedLine(words, i, currentLineWords, currentLineWordsWidth, maxWidth));
        i += currentLineWords;
    }

    return resultTextJustification;
};

let getJustifiedLine = function (words, startIndex, currentLineWords, currentLineWordsWidth, maxWidth) {
    let isLeftAlign = startIndex + currentLineWords === words.length && currentLineWords > 1;
    let [oneSpaceWidth, additionalSpaceWidth] = getSpacesValues(currentLineWords, currentLineWordsWidth, maxWidth, isLeftAlign);
    let justifiedLine = '';

    for (let j = startIndex; j < startIndex + currentLineWords; j++) {
        justifiedLine += words[j];
        if (currentLineWords !== 1 && j + 1 === startIndex + currentLineWords) {
            break;
        }
            
        justifiedLine += ' '.repeat(oneSpaceWidth);
        if (additionalSpaceWidth > 0) {
            justifiedLine += ' ';
            additionalSpaceWidth--;
        }
    }

    if (isLeftAlign) {
        justifiedLine += ' '.repeat(maxWidth - currentLineWordsWidth - (currentLineWords - 1));
    }

    return justifiedLine;
}

let getSpacesValues = function(currentLineWords, currentLineWordsWidth, maxWidth, isLeftAlign) {
    const allSpacesWidth = maxWidth - currentLineWordsWidth;
    let oneSpaceWidth, additionalSpacesWidth;
    if (isLeftAlign) {
        oneSpaceWidth = 1;
        additionalSpacesWidth = 0;
    } else {
        oneSpaceWidth = currentLineWords !== 1 
            ? Math.floor(allSpacesWidth / (currentLineWords - 1))
            : allSpacesWidth;
        additionalSpacesWidth = allSpacesWidth % (oneSpaceWidth * (currentLineWords - 1));
    }

    return [oneSpaceWidth, additionalSpacesWidth];
}

console.log(fullJustify(["This", "is", "an", "example", "of", "text", "justification."], 16));
console.log(fullJustify(["What","must","be","acknowledgment","shall","be"], 16));
console.log(fullJustify(["Science","is","what","we","understand","well","enough","to","explain","to","a","computer.","Art","is","everything","else","we","do"], 20));
console.log(fullJustify(["My","momma","always","said,","\"Life","was","like","a","box","of","chocolates.","You","never","know","what","you're","gonna","get."], 20));
