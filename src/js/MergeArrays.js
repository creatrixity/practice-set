/**
 * Merges a smaller array into the larger array empty space.
 * @param {number[]} arrA
 * @param {number[]} arrB
 * @param {number} arrALength
 * @param {number} arrBLength
 * @return {number[]}
 */
function mergeArrays(arrA, arrB, arrALength, arrBLength) {
	if (!arrA.length || !arrB.length) return []
	let arrAPointer = arrALength - 1
	let arrBPointer = arrBLength - 1
	let mergePointer = (arrALength + arrBLength) - 1
	console.log(mergePointer)

	while (mergePointer > 0) {
		if (arrB[arrBPointer] > arrA[arrAPointer]) {
			arrA[mergePointer] = arrB[arrBPointer]
			arrBPointer--                
		} else {
			arrA[mergePointer] = arrA[arrAPointer]
			arrAPointer--
		}

		mergePointer--
	}

	return arrA
}

function test() {
	let arrA = [1, 3, 5, 0, 0, 0]
	let arrB = [2, 4, 6]

	return mergeArrays(arrA, arrB, 3, 3)
}

define(() => ({ test, mergeArrays }))