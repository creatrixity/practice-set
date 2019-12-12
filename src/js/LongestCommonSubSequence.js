/**
 * Finds the longest common subsequence between two strings.
 * For two strings: ["Brand", "Braxton"], the LCS is "Bra
 * @param {string} stringA
 * @param {string} stringB
 * @return {string}
 */
var longestCommonSubsequence = function(stringA, stringB) {
	function recursivelyFindLCS(indexA, indexB, memo) {
		if (indexA == 0 || indexB == 0) return ''
		console.log({ indexA, indexB })
		console.log({ memo })

		if (memo[indexA][indexB]) return memo[indexA][indexB]
		
		if (stringA[indexA] === stringB[indexB])
			memo[indexA][indexB] = recursivelyFindLCS(indexA - 1, indexB - 1, memo) + stringA[indexA - 1]
		
		let subLeft = recursivelyFindLCS(indexA - 1, indexB, memo)
		let subRight = recursivelyFindLCS(indexA, indexB - 1, memo)
		
		memo[indexA][indexB] = subLeft.length > subRight.length ? subLeft: subRight
		
		return memo[indexA][indexB]
	}
	let memo = [...Array(stringA.length)]
	memo = Array.from(stringA).map(() => ([]))
	
	return recursivelyFindLCS(stringA.length - 1, stringB.length - 1, memo)
}

function test(strings) {	
	console.log(longestCommonSubsequence('Itachi', 'Uchiha'))
}

define(() => ({ test, longestCommonSubsequence }))