/**
 * Finds an item in a sorted 2d matrix.
 * @param {number[]} matrix
 * @param {number} item
 */
function matrixSearch(matrix, item) {
	let row = 0;
	let col = matrix[0].length - 1

	while (row < matrix[0].length && col >= 0) {
		if (matrix[row][col] === item) return true
		item > matrix[row][col] ? row++ : col--
	}

	return false
}

function test() {
	let matrix = [
		[1, 2,  3,  4 ],
		[5, 6,  7,  8 ],
		[9, 10, 11, 12]
	]

	return matrixSearch(matrix, 12)
}

define(() => ({ test, matrixSearch }))