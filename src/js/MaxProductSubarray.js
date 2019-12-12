const arrayProduct = (arr) => arr.reduce((product, current) => product * current, 1)

/**
 * @param {number[]} nums
 * @return {number}
 */
var maxProduct = function(nums) {
	let max = []
	let min = []
	let result = nums[0]
	
	max.push(result)
	min.push(result)
	
	for (let i = 1; i < nums.length; i++) {
		if (nums[i] > 0) {
			max[i] = Math.max(nums[i], max[i - 1] * nums[i])
			min[i] = Math.min(nums[i], min[i - 1] * nums[i])
		} else {
			max[i] = Math.max(nums[i], min[i - 1] * nums[i])			
			min[i] = Math.min(nums[i], max[i - 1] * nums[i])			
		}		
		result = Math.max(result, max[i])
	}
		
	return result
};

function test(nums = [3, -1, 4]) {	
	console.log(maxProduct(nums))
}

define(() => ({ test, maxProduct }))