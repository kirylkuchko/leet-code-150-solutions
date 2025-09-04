/**
 * @param {number[]} prices
 * @return {number}
 */
let maxProfit = function(prices) {
    let buyPrice = prices[0];
    let profit  = 0;

    for (let i = 1; i < prices.length; i++) {
        if (prices[i] > buyPrice) {
            profit += (prices[i] - buyPrice);
            
        }

        buyPrice = prices[i];  
    }

    return profit ;       
};

console.log(maxProfit([7,1,5,3,6,4]));
console.log(maxProfit([7,6,4,3,1]));