  function Fibonacci (n) {		
		const implementations = {
			iterative,
			recursive
		}
			
		return function(implementation, startValues = [0, 1]) {
			return implementations[implementation](n, startValues)
		}
	}	
	
	function iterative(n, startValues) {
		let results = []
		let pointer = 0
		let start = startValues[0];
		let next = startValues[1];
		
		results = results.concat([start, next])
		
		while (results.length < n) {
			next = results[pointer] + next			
			results.push(next)
			pointer++
		}
		
		return results
	}
	
	function recursive(n, startValues) {
		if (startValues.length >= n) return startValues
		
		startValues.push(
			startValues[startValues.length - 1] + startValues[startValues.length - 2]
		)
		
		return recursive(n, startValues)
	}
	
	function test(n = 10) {
		const fibInstance = Fibonacci(n)
		
		const recursiveFib = fibInstance('recursive')
		const iterativeFib = fibInstance('iterative')
		
		console.log(`Fibonacci values for ${n}: ${iterativeFib.join(', ')}`)
	}

define(() => ({ test, Fibonacci }))