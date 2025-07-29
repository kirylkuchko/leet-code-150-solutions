/**
 * @param {number[]} prices
 * @return {number}
 */
let maxProfitExponential = function(prices) {
    if (!prices || prices.length < 2) {
        return 0;
    }

    let bestDeal = 0;
    for (let i = 0; i < prices.length; i++) {
        for (let j = i + 1; j < prices.length; j++) {
            if (prices[j] - prices[i] > bestDeal) {
                bestDeal = prices[j] - prices[i];
            }
        }
    }

    return bestDeal;   
};

console.log(maxProfit([7,1,5,3,6,4]));
console.log(maxProfit([7,6,4,3,1]));

/**
 * @param {number[]} prices
 * @return {number}
 */
let maxProfitLinear = function(prices) {
    let buyPrice = prices[0];
    let bestDeal = 0;

    for (let i = 1; i < prices.length; i++) {
        if (buyPrice > prices[i]) {
            buyPrice = prices[i];
        }

        bestDeal = Math.max(bestDeal, prices[i] - buyPrice);
    }

    return bestDeal;     
};

console.log(maxProfitLiniar([7,1,5,3,6,4]));
console.log(maxProfitLiniar([7,6,4,3,1]));
