/**
 * 
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var arraySearchDC = function(nums, target) {
	function findRecursively(start, end) {
		if (target === nums[start]) return start
		if (target === nums[end]) return end
		if ( start === end ||
			start < 0 ||
			start > nums.length ||
			end < 0 ||
			end > nums.length
		) return -1
		
		console.log({ start, end })
		
		return findRecursively(start + 1, end - 1)
	}
	 
	let midIndex = Math.floor(nums.length / 2)
	if (nums[midIndex] === target) return midIndex;
	
	let left = findRecursively(0, midIndex)
	let right = findRecursively(midIndex + 1, nums.length)
	
	return Math.max(left, right)
};

function test(nums = [4, 5, 6, 7, 0, 1, 2]) {	
	console.log(arraySearchDC(nums, 22))
}

define(() => ({ test, arraySearchDC }))