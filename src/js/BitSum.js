/**
 * @param {number} a
 * @param {number} b
 * @return {number}
 */
var getSum = function(a, b) {
	let sum = a ^ b
	let carry = (a & b) << 1
		
	if (sum & carry) {
		return getSum(sum, carry)
	} else {
		return sum ^ carry
	}
};

/**
 * @param {number} n - a positive integer
 * @return {number}
 */
var getHammingWeight = function(n) {
	let bits = 0
	let mask = 1
	
	for (let i = 0; i < 32; i++) {
		if ((n & mask)) {
			console.log(mask.toString(2))
			bits++
		}
		mask <<= 1
	}
	
	return bits
};

/**
 * @param {number} num
 * @return {number[]}
 */
var countBits = function(num) {
	let results = []
	let computeHammingWeight = n => {
		let sum = 0
		
		while (n !== 0) {
			sum++
			n &= n - 1
		}
		
		return sum
	}
	
	for (let i = 0; i < num + 1; i++) {
		results.push(computeHammingWeight(i))
	}
	
	return results
}

/**
 * @param {number[]} nums
 * @return {number}
 */
var missingNumber = function(nums) {
    let maxNum = Math.max(...nums)
		let requiredMaxSum = 0
		let actualSum = nums.reduce((sum, current) =>sum + current, 0)
		
		for (let i = nums.length; i > 0; i--) {
			requiredMaxSum += i
		}
		
		return requiredMaxSum - actualSum
};

let reverseBits = n => {
	let result = 0 // Let's initialize reverse to 0
	
	// We need to go through every bit in the digit
	for (let i = 0; i < 32; i++) {		
		result <<= 1 // Shift result to left by one (same as multiplication by 2)
		result += n & 1 // Is an odd bit
		
		n >>= 1 // shift result right by one (same as division by 2)
	}
	
	return result
}

const test = () => {
	// console.log(getSum(-1, -1))
	// console.log(getHammingWeight(00000000000000000000000000001011))
	// console.log(countBits(2))	
	// console.log(missingNumber([9,6,4,2,3,5,7,0,1]))
	console.log(reverseBits(00000010100101000001111010011100))
}

define(() => ({
	test,
	bitSum: getSum,
	getHammingWeight,
	reverseBits
}))
