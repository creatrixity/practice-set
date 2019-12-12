function createZerosMatrix(matrix) {
	return Array
			.from(matrix)
			.fill(0)
			.map(() => Array.from(matrix[0]).fill(0))        
}

/**
 * Given a 2D matrix of 1s and 0s, returns the length of the
 * of the largest square submatrix.
 * @param {number[][]} matrix
 * @return {number}
 */
function squareSubmatrix(matrix) {
	if (!matrix.length) return 0
	let rowsCount = matrix.length

	if (!matrix[0].length) return 0
	let colsCount = matrix[0].length
	let sumMatrix = createZerosMatrix(matrix)
	let max = 0

	for (let row = 0; row < rowsCount - 1; row++) {
		for (let col = 0; col < colsCount - 1; col++) {
			if (row === 0 || col === 0) {
				sumMatrix[row][col] = matrix[row][col]
			} else {
				sumMatrix[row][col] = Math.min(
					Math.min(
						matrix[row - 1][col],
						matrix[row - 1][col - 1]
					),
					matrix[row][col - 1]
				) + 1
			}

			max = Math.max(max, sumMatrix[row][col])
		}
	}

	return max
}

function test() {
	let matrix = [
		[1, 1, 1, 0],
		[1, 1, 1, 1],
		[1, 1, 0, 0]
	]

	return squareSubmatrix(matrix)
}

return test()
	
define(() => ({ squareSubmatrix, test }))