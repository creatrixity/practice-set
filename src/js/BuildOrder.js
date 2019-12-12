function buildOrder(processes) {
   let permMarks = new Set()
   let tempMarks = new Set()
   let result = []

   const visit = process => {
	   if (tempMarks.has(process)) throw new Error('Runtime exception caught')
	   if (!permMarks.has(process)) {
		   tempMarks.add(process)
		   for (let p in processes[process]) {
			   visit(p)
		   }

		   permMarks.add(process)
		   tempMarks.delete(process)
		   result.push(process)
	   }           
   }

   for (let process in processes) {
	   if (!permMarks.has(process)) {
		   visit(process)
	   }               
   }

   return result
}

function test() {
   let processes = [
	[], [0], [0], [1, 2], [3]
   ]

   return buildOrder(processes)
}
   
define(() => ({ test, buildOrder }))