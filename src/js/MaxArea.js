/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function(height) {
	let maxKnownArea = 0
	let left = 0
	let right = height.length - 1
	
	while (left < right) {
		maxKnownArea = Math.max(maxKnownArea, Math.min(height[left], height[right]) * (right - left))
		
		if (height[left] > height[right]){
			right--
		} else {
			left++
		}
	}
	
	return maxKnownArea
}


const test = () => {
	console.log(maxArea([1, 2, 1]))
}

define(() => ({ test, maxArea }))
