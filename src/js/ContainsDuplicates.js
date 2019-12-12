/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function(nums) {
	if (nums.length < 2) return false;
	
	let foundDuplicates = false;
	let hashmap = {}
	
	for (let i = 0; i < nums.length; i++) {
			if (hashmap[nums[i]]) {
				foundDuplicates = true;
				return foundDuplicates
			}
			
			hashmap[nums[i]] = true
	}
		
	return foundDuplicates;
};

/**
 * Returns the duplicates as long as 0 <= n < nums.length
 * @param {number[]} nums
 * @return {number[]}
 */
function findDuplicates(nums) {
    let dupes = [];
    let index;

    for (let i = 0; i < nums.length; i++) {
        index = Math.abs(nums[i])

        if (nums[index] < 0) {
            dupes.push(index)
        } else {
            nums[index] = -nums[index]
        }
    }

    return dupes
}

const test = () => {
	console.log(containsDuplicate([0,4,5,0,3,6]))
}

define(() => ({ test, containsDuplicate }))
