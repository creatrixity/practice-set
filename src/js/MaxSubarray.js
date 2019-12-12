const sumArray = (arr) => arr.reduce((sum, current) => current + sum, 0)

/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubarray = function(nums) {
	let maxKnownValue = nums[0]
	// Initialize max known sub array to first array member
	let maxKnownSubArray = [nums[0]]
	
	for (let i = 1; i < nums.length; i++) {
		if (nums[i] > sumArray([...maxKnownSubArray, nums[i]])) {
			maxKnownSubArray = [nums[i]]
		} else {
			maxKnownSubArray.push(nums[i])
		}
		
		maxKnownValue = Math.max(maxKnownValue, sumArray(maxKnownSubArray))
	}
		
	return Math.max(maxKnownValue, sumArray(maxKnownSubArray))
};

var maxSubarrayDC = function(nums) {
	const findMaxCrossingSubarray = (arr, low, mid, high) => {
		let sum = 0	
		let leftSum = -Infinity
		let rightSum = -Infinity
		
		for (let i = mid; i >= low; i--) {
			sum = sum + arr[i]
			if (sum > leftSum) {
				leftSum = sum
			}
		}
		
		sum = 0		
		for (let i = mid + 1; i < high; i++) {
			sum = sum + arr[i]
			if (sum > rightSum) {
				rightSum = sum
			}
		}
		
		return leftSum + rightSum
	}
	
	const findMaxSubarray = (arr, low, high) => {
		// We have only a single item in the array
		// Also, we are at the last
		if (low === high) return arr[high]
		
		let mid = Math.floor((high + low) / 2)
		
		let leftMaxSubarray = findMaxSubarray(arr, low, mid)
		let maxCrossingSubarray = findMaxCrossingSubarray(arr, low, mid, high)
		let rightMaxSubarray = findMaxSubarray(arr, mid + 1, high)
		
		return Math.max(leftMaxSubarray, maxCrossingSubarray, rightMaxSubarray)
	}
	
	return findMaxSubarray(nums, 0, nums.length - 1)
}


const test = () => {
	console.log(maxSubarrayDC([-2, 1, -3, 4, -1, 2, 1, -5, 4]))
}

define(() => ({ test, maxSubarray }))
