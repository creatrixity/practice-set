/**
 * @param {number[]} prices
 * @return {number[]}
 */
var arraysMedian = function(arrayA, arrayB) {
	if (arrayA.length !== arrayB.length) throw new Error('Illegal argument')

	return findMedian(arrayA, arrayB)
};

function findMedian(arrA, arrB) {
	if (arrA.length === 0) return 0
	if (arrA.length === 1) return (arrA[0] + arrB[0]) / 2
	if (arrA.length === 2) {
		return Math.max(arrA[0], arrB[0]) +  Math.min(arrA[1], arrB[1]) / 2
	}
	
	let mid = getMid(arrA)
	let medianA = calcMedian(arrA)
	let medianB = calcMedian(arrB)
	
	if (medianA == medianB) return medianA
	if (medianA > medianB)
		return findMedian(
			arrA.slice(0, mid),
			arrB.slice(mid + 1, arrA.length)
		)
	
	return findMedian(
		arrA.slice(mid + 1, arrA.length),
		arrB.slice(0, mid)
	)
}

function calcMedian(arr) {
	let mid = getMid(arr)
	return arr % 2 ?
		arr[mid] / 2 :
		(arr[mid] + arr[mid - 1]) / 2
}

const getMid = arr => Math.floor(arr.length / 2)

function test() {	
	console.log(
		arraysMedian([1, 3, 5], [2, 4, 6])
	)
}

define(() => ({ arraysMedian, test }))