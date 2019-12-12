
/**
 * Compares to strings to see if they are anagrams
 * @param {string} stringA
 * @param {string} stringB
 * @return {boolean}
 */
function isAnagram(stringA, stringB) {
	if (stringA === stringB) return true
	if (stringA.length !== stringB.length) return false
	let letters = {}

	for (let letter in stringA) {
		letters[stringA[letter]] = 1
	}

	for (let letter in stringB) {
		letters[stringB[letter]] -= 1
	}

	for (letter in letters) {
		if (letters[letter] > 0) return false
	}

	return true
}

function test() {
	return isAnagram('cat', 'tac')
}

define(() => ({ test, isAnagram }))