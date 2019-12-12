/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function(nums) {
	let result = []
	if (nums.length < 3) return result
	let hashmap = {}
	nums.sort()
	
	for (let i = 0; i < nums.length; i++) {
		if (nums[i] > 0) break; // Positive numbers don't add up to triplets.
		//if (i > 0 && nums[i + 1] === nums[i]) continue
		let left = i + 1
		let right = nums.length - 1
		
		while (left < right) {
			let current = nums[left] + nums[right]
			
			if (current === -nums[i]) {
				let hash = `${nums[i]}${nums[left]}${nums[right]}`
				if (!hashmap[hash]) {
					result.push([nums[i], nums[left], nums[right]])					
				}
				hashmap[hash] = 1
				
				while (left < right && nums[left] === nums[left + 1]) left++
				left++
				while (left < right && nums[right] === nums[right - 1]) right--
				right--
			} else if (current > -nums[i]) {
				right--
			} else {
				left++
			}
		}
 	}
	
	return result
};

function test(nums = [-1,-2,-3,4,1,3,0,3,-2,1,-2,2,-1,1,-5,4,-3]) {	
	console.log(threeSum(nums))
}

define(() => ({ test, threeSum }))
