
/**
    Problem Statement:
    Given an array of strings strs, group the anagrams together. You can return the answer in any order.
    An Anagram is a word formed by rearranging the letters of a different word, typically using all the original letters exactly once.
    Example:
        Input: strs = ["eat","tea","tan","ate","nat","bat"]
        Output: [["bat"],["nat","tan"],["ate","eat","tea"]] 
 */

/**
 * @param {string[]} strs
 * @return {string[][]}
 */

const groupAnagrams = function(strs) {
    const obj = {};
    for (const str of strs) {
        const sortedStr = str.split('').sort().join('');
        if (!obj[sortedStr]) {
            obj[sortedStr] = [];        
        }
        obj[sortedStr].push(str);
    }
    
    return Object.values(obj);
};

console.log(groupAnagrams(["eat","tea","tan","ate","nat","bat"]))


// Time Complexity: O(n*klog(k)) where n is the length of input array and k is the maximum length of a string in input array
// Space Complexity: O(n)