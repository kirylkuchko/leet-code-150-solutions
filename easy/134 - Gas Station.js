/**
 * @param {number[]} gas
 * @param {number[]} cost
 * @return {number}
 */
let canCompleteCircuit = function(gas, cost) {
    let startIndex = 0;
    let sumGasUsage = 0;
    let currentGas = 0;
    for (let i = 0; i < gas.length; i++) {
        let travelCost = gas[i] - cost[i];
        sumGasUsage += travelCost;
        currentGas += travelCost;

        if (currentGas < 0) {
            currentGas = 0;
            startIndex = i + 1;
        }
    }

    return sumGasUsage < 0 ? -1 : startIndex;
}

console.log(canCompleteCircuit([1,2,3,4,5]));
console.log(canCompleteCircuit([2,3,4]));