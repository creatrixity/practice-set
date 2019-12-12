/**
 * @param {number[][]} matrix
 * @return {number}
 */
var matrixMaxProduct = function(matrix) {
	let createZerosMatrix = () => Array.from(matrix).fill(0).map(() => Array.from(matrix[0]).fill(0))
	let minCache = createZerosMatrix()
	let maxCache = createZerosMatrix()
	let maxValue
	let minValue
	let tempMax
	let tempMin
	
	for (let row = 0; row < matrix.length; row++) {
		for (let col = 0; col < matrix[0].length; col++) {
			maxValue = -Infinity
			minValue = Infinity
			
			if (row === 0 && col === 0) {
				maxCache[row][col] = matrix[row][col]
				minCache[row][col] = matrix[row][col]
				continue;
			}
			
			if (row > 0) {
				tempMax = Math.max(
					matrix[row][col] * maxCache[row - 1][col],
					matrix[row][col] * minCache[row - 1][col],
				)
								
				maxValue = Math.max(maxValue, tempMax)				

				tempMin = Math.min(
					matrix[row][col] * maxCache[row - 1][col],
					matrix[row][col] * minCache[row - 1][col],
				)
				
				minValue = Math.min(minValue, tempMin)
			}
			
			if (col > 0) {
				tempMax = Math.max(
					matrix[row][col] * maxCache[row][col - 1],
					matrix[row][col] * minCache[row][col - 1],
				)
								
				maxValue = Math.max(maxValue, tempMax)
				
				tempMin = Math.min(
					matrix[row][col] * maxCache[row][col - 1],
					matrix[row][col] * minCache[row][col - 1],
				)
				
				minValue = Math.min(minValue, tempMin)

			}
			
			minCache[row][col] = minValue
			maxCache[row][col] = maxValue
		}
		
	}
	
	return maxCache[matrix.length - 1][matrix[0].length - 1]
}

function test() {
	let matrix = [
        [-1, 2,  3],
        [ 4, 5, -6],
        [ 7, 8,  9]
	]
	console.log(matrixMaxProduct(matrix))
}

define(() => ({ matrixMaxProduct, test }))