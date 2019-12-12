/**
 * Orders items by priority determined by comparator callback.
 * @param {function} comparator
 */
 class PriorityQ {
	 constructor(comparator) {
		if (!comparator) throw new Error('Supply a comparator')
		this.array = []
		this.comparator = comparator
	 }

	 add(item) {
		 let size = this.getSize()
		 for (let i = 1; i < size; i++) {
			 if (this.comparator(this.array[i - 1], this.array[i])) {
				 this.array.splice(i, 0, item)
				 return;
			 }
		 }

		 this.array[size] = item;
	 }

	 pop() {
		 return this.array.shift()
	 }

	 peek() {
		 return this.array[0]
	 }

	 getSize() {
		 return this.array.length
	 }

	 isEmpty() {
		 return !this.getSize()
	 }
 }
 
define(() => PriorityQ)