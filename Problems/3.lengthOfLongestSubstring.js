/**
 *  Problem statement: Given a string s, find the length of the longest substring without repeating characters.
    Example:
        Input: s = "abcabcbb"
        Output: 3
        Explanation: The answer is "abc", with the length of 3.
 */

/**
 * @param {string} s
 * @return {number}
 */

 const lengthOfLongestSubstring = (s) =>  {
     const map = new Map();
     let start = 0;
     let maxLen = 0;
     
     for(let i = 0; i < s.length; i++) {
         if(map.has(s[i])) start = Math.max(map.get(s[i]) + 1, start)
         map.set(s[i], i);
         maxLen = Math.max(i - start + 1, maxLen);
     } 
     
     return maxLen;  
 };
console.log(lengthOfLongestSubstring("abcabcbb")) // 3

// Time Complexity = O(N)
// Space Complexity = O(N)
