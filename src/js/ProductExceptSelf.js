/**
 * @param {number[]} nums
 * @return {number[]}
 */
var productExceptSelf = function(nums) {
	let products = [1]
	let rightProductCumulative = 1
	
	for (let i = 1; i < nums.length; i++) {
		products[i] = products[i - 1] * nums[i - 1]
	}
	
	for (let i = nums.length - 1; i >= 0; i--) {
		products[i] = products[i] * rightProductCumulative
		rightProductCumulative *= nums[i]
	}
	
	return products
};

const test = () => {
	console.log(productExceptSelf([4,3,2,1,2]))
}

define(() => ({ test, productExceptSelf }))
