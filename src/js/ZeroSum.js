
/**
 * Returns the subset of an array that add up to zero.
 * @param {number[]} arr
 * @return {number[]}
 */
function zeroSum(arr) {
	let hashMap = {}
	let sum = 0
	let oldIndex;

	for (let i = 0; i <= arr.length; i++) {
		oldIndex = hashMap[sum]

		if (!oldIndex && i === arr.length)  return null
		else if (!oldIndex) {
			hashMap[sum] = i
			sum += arr[i]
		} else return arr.slice(oldIndex, i)
	}

	return []
}

function test() {
	let arr = [1, 2, -5, 1, 2, -1]
	console.log(zeroSum(arr))
} 

define(() => ({ zeroSum, test }))
