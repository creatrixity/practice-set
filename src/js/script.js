define(require => {	
	const modules = [
		'Fibonacci',
		'PalindromeChecker',
		'TwoSum',
		'MaxProfit',
		'ContainsDuplicates',
		'ProductExceptSelf',
		'MaxSubarray',
		'MaxProductSubarray',
		'ArraySearchDC',
		'ThreeSum',
		'MaxArea',
		'BitSum',
		'Knapsack',
		'LongestCommonSubSequence',
		'ArraysMedian',
		'MatrixMaxProduct',
		'MergeKArrays',
		'Permutations',
		'ShortestPathDirected',
		'BinarySearchTree'
	]
		
	const canTestModule = (module) => {
		return module == modules[modules.length - 1]
	}
	
	require(modules.filter(canTestModule), function () {
		let args = [].slice.call(arguments)		
		args.map((arg) => arg.test())
	})
})