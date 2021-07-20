/**
  Problem statement:  Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.
  Example:
    Input: nums = [3,8,13,16,4], target = 19
    Output: [0,3]
    Output: Because nums[0] + nums[3] == 19, we return [0, 3].
 */


/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */

const twoSum = (nums, target) => {
    const map = {};
    const len = nums.length;
    for (let i = 0; i < len; i++) {
        if (map[nums[i]] >= 0) {
            return [map[nums[i]], i]
        }
        map[target - nums[i]] = i
    }
    return [];
};

console.log(twoSum([3,8,13,16,4], 19)) // [0, 3]

// Time Complexity: O(n)