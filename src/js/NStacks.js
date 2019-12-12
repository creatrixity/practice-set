/**
 * Creates N number of stacks of given capacity
 */
 class NStacks {
	 nextAvailable = 0

	 constructor (numStacks, capacity) {
		this.topOfStack = new Array(numStacks).fill(-1)
		this.stackData = new Array(capacity).fill(0)
		let nextIndex = new Array(capacity).fill(0).map((item, i) => i + 1)
		nextIndex[nextIndex.length - 1] = -1
		this.nextIndex = nextIndex
	 }

	 push(stack, item) {
		 if (stack < 0 || stack > this.topOfStack.length) throw new Error('Supply valid args')
		 if (this.nextAvailable < 0) throw new Error('Cannot add nothing new');

		 let currentIndex = this.nextAvailable
		 this.nextAvailable = this.nextIndex[currentIndex]
		 this.stackData[currentIndex] = item
		 this.nextIndex[currentIndex] = this.topOfStack[stack]
		 this.topOfStack[stack] = currentIndex
	 }

	 pop(stack) {
		 if (stack < 0 || stack > this.topOfStack.length || this.topOfStack[stack] < 0) throw new Error('Out of bounds')             
		 let currentIndex = this.topOfStack[stack]
		 let item = this.stackData[currentIndex]
		 let nextIndex = this.nextIndex[currentIndex]
		 this.nextIndex[currentIndex] = this.nextAvailable
		 this.topOfStack[stack] = nextIndex
		 this.nextAvailable = currentIndex
		 
		 return item
	 }
 }

function test() {
	let nStacks = new NStacks(2, 3)
	nStacks.push(0, 5)
	return nStacks.pop(0)
}

define(() => ({ test, nStacks }))