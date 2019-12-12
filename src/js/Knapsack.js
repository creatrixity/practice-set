/**
 * @param {number[]} values
 * @param {number[]} weights
 * @param {number} capacity
 * @return {number[]}
 */
var knapsack = function(values, weights, capacity) {
	function recursiveKnapsack(index, W) {
		if (index == 0 || W == 0) return 0
		
		if (weights[index - 1] > W) return recursiveKnapsack(index - 1, W)
			
		return Math.max(
			recursiveKnapsack(index - 1, W),
			values[index - 1] + recursiveKnapsack(index - 1, W - weights[index - 1])
		)
	}
	
	return recursiveKnapsack(weights.length, capacity)
}

var countEvenPassed = (arr, index = 0, result = 0) => {
	if (index >= arr.length) return result
	
	if ((arr[index] % 2) === 0) return countEvenPassed(arr, index + 1, result + 1)
	return countEvenPassed(arr, index + 1, result)		
}

var countEvenBuiltUp = (arr, index) => {
	if (index >= arr.length) return 0
	
	let result = countEvenBuiltUp(arr, index + 1)
	console.log({ result, index })
	if ((arr[index] % 2) === 0) result++
	
	return result
}

const test = () => {
	let vals = [60, 100, 120]
	let wts = [10, 20, 30]
	let capacity = 50
	console.log(knapsack(vals, wts, capacity))
	// console.log(countEvenBuiltUp([1, 2, 3, 4], 0))
}

define(() => ({ test, knapsack }))
