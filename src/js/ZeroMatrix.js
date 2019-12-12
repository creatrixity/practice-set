/**
 * Updates a matrix so that if any cell is true, all the cells 
 * in that row and column are true.
 * @param {boolean[]} matrix
 * @return {boolean[]}
 */
function zeroMatrix(matrix) {
    let rowZero = false
    let colZero = false    
    let goThroughRow = (row, cb) => {
        for (let col = 0; col < matrix[row].length; col++) {
            cb(matrix[row][col], col)
        }
    }

    let goDownCol = (col, cb) => {
        for (let row = 0; row < matrix.length; row++) {
            cb(matrix[row][col], row)
        }
    }

    let goThroughMatrix = (start = 0, cb) => {
        for (let row = start; row < matrix.length; row++) {
            for (let col = start; col < matrix.length; col++) {
                cb(matrix[row][col], row, col)
            }
        }
    }
        
    goThroughRow(0, (item) => rowZero = rowZero || item)
    goDownCol(0, (item) => colZero = colZero || item)

    goThroughMatrix(1, (item, rowIndex, colIndex) => {
        if (item) {
            matrix[rowIndex][0] = true
            matrix[0][colIndex] = true
        }
    })
    

    for (let row = 1; row < matrix.length; row++) {
        if (matrix[row][0]) {
            for (let col = 1; col < matrix[0].length; col++) {
                matrix[row][col] = true
            }
        }
    }

    for (let col = 1; col < matrix[0].length; col++) {
        if (matrix[0][col]) {
            for (let row = 1; row < matrix.length; row++) {
                matrix[row][col] = true
            }
        }
    }

    if (rowZero) {
        goThroughRow(0, (item, colIndex) => {
            matrix[0][colIndex] = true
        })
    }

    if (colZero) {
        goDownCol(0, (item, rowIndex) => {
            matrix[rowIndex][0] = true
        })
    }

    return matrix
}

function test() {
    let matrix = [
        [true, false, false],
        [false, false, false],
        [false, false, true],
    ]

    return zeroMatrix(matrix)
}

define(() => ({ zeroMatrix, test }))