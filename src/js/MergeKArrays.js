/**
 * A node containing values and indexes.
 * @param {number} index
 * @param {number} arrIndex
 * @param {number} value
 */
class QueueNode {
	constructor(index, arrIndex, value) {
	 this.index = index
	 this.arrIndex = arrIndex
	 this.value = value
	}

	getIndex() {
	 return this.index
	}

	getArrIndex() {
	 return this.arrIndex
	}

	getValue() {
	 return this.value
	}
}

define((require) => {
	let PriorityQ = require('./PriorityQ')
	/**
	 * Given k sorted arrays, merges 
	 * them into a single sorted array 
	 * @param {number[][]} arrays
	 * @return {number[]}
	 */
	function mergeKArrays(arrays) {
		let comparator = (nodeA, nodeB) => nodeA.getValue() > nodeB.getValue()
		let pq = new PriorityQ(comparator)
		let qNode, newIndex, arrIndex, result = [];
		for (let i = 0; i < arrays.length; i++) {
			if (arrays[i].length) {
				pq.add(new QueueNode(0, i, arrays[i][0]))
			}
		}

		for (let i = 0; !pq.isEmpty(); i++) {
			qNode = pq.pop()
			newIndex = qNode.getIndex() + 1
			arrIndex = qNode.getArrIndex()
			result[i] = qNode.getValue()

			if (newIndex < arrays[arrIndex].length) {
				pq.add(
					new QueueNode(
						newIndex,
						arrIndex,
						arrays[arrIndex][newIndex]
					)
				)
			}
		}

		return result
	}

	function test() {
		let arrays = [
			[1, 4],
			[2, 5, 8],
			[3, 6, 9]
		]

		return mergeKArrays(arrays)
	}

	console.log(test())

	return {
		test,
		mergeKArrays
	}
})