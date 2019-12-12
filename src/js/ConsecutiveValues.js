/**
 * Counts the number of consecutive values in an array
 * @param {number[]} nums
 * @return {number}
 */
function consecutiveValues(nums) {
    let hashSet = new Set()
    for (let i = 0; i < nums.length; i++) {
        hashSet.add(nums[i])
    }
    
    let max = 0
    for (let item of hashSet) {
        if (hashSet.has(item - 1)) continue
        let length = 0

        while(hashSet.has(item++)) length++
        max = Math.max(max, length)
    }

    return max
}

const test = () => {
    console.log(consecutiveValues([5, 5, 3, 1]))
}

define(() => ({ test, consecutiveValues }))
