/**
 * @param {number[]} citations
 * @return {number}
 */
let hIndexWithSort = function(citations) {
    citations.sort((a, b) => b - a);
    let hIndex = 0;
    for (let citationsNumber of citations) {
        if (citationsNumber > hIndex) {
            hIndex++;
        }
    }

    return hIndex;
};

console.log(hIndexWithSort([3,0,6,1,5]));

let hIndexWithStore = function(citations) {
    
    let hIndex = 0;
    for (let citationsNumber of citations) {
        if (citationsNumber > hIndex && citationsNumber >= ) {
            hIndex++;
        }
    }

    return hIndex;
};

console.log(hIndexWithSort([3,0,6,1,5]));