/**
 * Returns all permutations for an array of numbers
 * @param {number[]} nums
 * @return {number[][]}
 */
function permutations(arr) {
	function recursivePermutation(start, results) {
		if (start >= arr.length) results.push([...arr])
		else {
			for (let i = start; i < arr.length; i++) {
				swap(i, start)
				recursivePermutation(i + 1, results)
				swap(i, start)
			}
		}
	}
	
	function swap(i, j) {
		if (i === j) return;
		let temp = arr[i]
		arr[i] = arr[j]
		arr[j] = temp
	}
	
	let results = []
	recursivePermutation(0, results)
	return results
}

function test() {
	let arr = [1, 2, 3]
	console.log(permutations(arr))
}

define(() => ({ permutations, test }))