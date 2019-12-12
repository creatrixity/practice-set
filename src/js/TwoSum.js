/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
	for (let i = 0; i <= nums.length - 1; i++) {
		for (let j = 1; j <= nums.length - 1; j++) {
			if (i !== j){
				if ((nums[i] + nums[j]) === target) {
					return [i, j]
				}				
			}
		}
	}
	
	throw new Error('Failed to find any valid indices')
};

function test(nums = [2, 5, 5, 11]) {	
	console.log(twoSum(nums, 10))
}

define(() => ({ test, twoSum }))
