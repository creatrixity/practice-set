/**
 * @param {number[]} coins
 * @param {number} amount
 * @return {number}
 */
var coinChange = function(coins, amount) {
    let max = amount + 1
    let memo = new Array(amount + 1)
    memo.fill(max)
    memo[0] = 0

    for (let amt = 1; amt <= amount; amt++) {
        for (let coin = 0; coin < coins.length; coin++) {
            if (coins[coin] <= amt) {
                memo[amt] = Math.min(memo[amt], memo[amt - coins[coin]] + 1)
            }
        }
    }

    return memo[amount]
};

function test() {
	console.log(coinChange([1, 2, 5], 11))
}

define(() => ({ test, coinChange }))