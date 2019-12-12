/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
	let lowPrice = Infinity
	let profit = 0;
	
	for (var i = 0; i < prices.length - 1; i++) {
		if (prices[i] < lowPrice) {
			lowPrice = prices[i]
		}
		
		if (prices[i] - lowPrice > profit) {
			profit = prices[i] - lowPrice
		}
	}
	
	return profit
};

function test(prices = [3,3,5,0,0,3,1,4]) {	
	console.log(maxProfit(prices))
}

define(() => ({ maxProfit, test }))