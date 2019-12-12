class BSTNode {
	left
	right
	value
	childCount = 0
	
	constructor(value) {
		this.setValue(value)
	}
	
	setLeft(node) {
		this.left = node
		this.childCount++
	}
	
	setRight(node) {
		this.right = node
		this.childCount++
	}
	
	setValue(value) {
		this.value = value
	}
	
	incrementChildCount(count) {
		this.childCount++
	}
}

class BinarySearchTree {
	_root = null
	count = 0
	
	addNode(node) {
		let currNode = null;
		
		if (!this._root) {
			this._root = node
			this.count++
		} else {
			currNode = this._root
			while (currNode !== null) {
				if (node.value < currNode.value) {
					if (currNode.left) {
						currNode.incrementChildCount()
						currNode = currNode.left
					} else {
						currNode.setLeft(node)

						this.count++
						break;
					}
				}
				else if (node.value > currNode.value) {
					if (currNode.right) {
						currNode.incrementChildCount()
						currNode = currNode.right
					} else {
						currNode.setRight(node)
						this.count++
						break;
					}
				} else {
					break;
				}
			}
		}
	}
	
	getRandomNode() {
		function recursivelyGetRandomNode(node, count) {
			if (count === children(node.left)) return node
			if (count < children(node.left)) return recursivelyGetRandomNode(node.left, count)

			return recursivelyGetRandomNode(node.right, count - children(node.left) - 1)
		}
		
		function children(node) {
			if (!node) return 0
			return node.childCount + 1
		}
		
		let count = parseInt((Math.random() * 1000) % this.count - 1)
		return recursivelyGetRandomNode(this._root, count)
	}
}

function test() {
	let nodes = [5, 2, 7, 1, 3, 6, 8]
	let BST = new BinarySearchTree()
	
	for (let i = 0; i < nodes.length; i++) {
		BST.addNode(new BSTNode(nodes[i]))
	}
	
	let randNodeIndex = parseInt(Math.random() * 1000 % BST.count)
	//console.log(nodes[randNodeIndex])
	console.log(BST.getRandomNode())
}

define(() => ({ test, BinarySearchTree, BSTNode }))