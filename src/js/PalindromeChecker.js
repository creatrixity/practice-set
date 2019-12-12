define(() => {
  function PalindromeChecker(str) {		
		const implementations = {
			iterative,
			recursive
		}
			
		return function(implementation) {
			return implementations[implementation](str, 0, str.length - 1)
		}
	}	

	function iterative(str, headPointer, tailPointer) {
		let isPalindrome = false;
		let headValue
		let tailValue		
		
		while (headPointer !== tailPointer) {
			headValue = str[headPointer]
			tailValue = str[tailPointer]		

			if (headPointer >= str.length - 1 && tailPointer <= 0) {
				isPalindrome = headValue === tailValue
				break;
			}
			
			if (headValue !== tailValue) {
				isPalindrome = false;
				break;
			}
			
			headPointer++
			tailPointer--
		}
		
		return isPalindrome;
	}
	
	function recursive(str, headPointer, tailPointer) {
		const headValue = str[headPointer]
		const tailValue = str[tailPointer]
		const pairIsPalindromic = headValue === tailValue
		
		if (headPointer === tailPointer) return pairIsPalindromic
		if (headValue !== tailValue) return false
		
		if (headPointer <= str.length - 1 && tailPointer <= 0) return pairIsPalindromic
		
		return recursive(str, headPointer + 1, tailPointer - 1)
	} 

	function test(str = 'saas') {
		const palindromeCheckerInstance = PalindromeChecker(str)
		const iterativePalindrome = palindromeCheckerInstance('iterative')
		const recursivePalindrome = palindromeCheckerInstance('recursive')

		console.log(`${str} is ${iterativePalindrome ? 'a': 'not a'} palindrome`)
	}

	return {
		test,
		PalindromeChecker
	};
})