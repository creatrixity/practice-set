define((require) => {
	let { LinkedListNode, LinkedList } = require('./LinkedList')
	
	function shortestPathDirected(startNode, destNode) {
		if (!startNode || !destNode) return false
		let toVisit = new LinkedList()
		let parents = {}
		let current;
		
		toVisit.add(startNode)
		parents[startNode.getValue()] = null
		
		while (!toVisit.isEmpty()) {
			current = toVisit.removeLast()
			
			if (current.getValue() === destNode.getValue()) break;
			if (current.getChildren().isEmpty()) continue
			
			current.getChildren().iterateThrough(node => {
				if (!parents[node.getValue()]) {
					toVisit.add(node)
					parents[node.getValue()] = current
				}
			})			
		}
		
		let destNodeParent = parents[destNode.getValue()]
		if (!destNodeParent) return null
		
		let out = []		
		let n = parents[destNode.getValue()]
		out.push(n.getValue())
		out.push(destNode.getValue())
		
		while (n) {
			n = parents[n.getValue()]
			if (n) out.push(n.getValue())
		}
		
		return out.reverse().join(' --> ')
	}
	
	function test() {
		let startNode = 2
		let destNode = 3
		let nodes = [
			[2, 3],
			[5],
			[],
			[1, 3],
			[4]
		]
		
		let listNodes = nodes.map((node,i) => new LinkedListNode(i + 1))
		
		for (listNode in listNodes) {
			if (nodes[listNode].length) {
				for (node in nodes[listNode]) {
					let childNode = listNodes[nodes[listNode][node] - 1]
					//console.log(listNodes[listNode] ,childNode)
					listNodes[listNode].addChild(childNode)
				}				
			}
		}
		
		console.log(
			shortestPathDirected(listNodes[startNode - 1], listNodes[destNode - 1])
		)
	}
	
	return {
		test
	}
})
