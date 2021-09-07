
/**
Problem Statement:
Given a string s containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.
An input string is valid if:
    Open brackets must be closed by the same type of brackets.
    Open brackets must be closed in the correct order.

    Example:
    Input: s = "()[]{}"
    Output: true

    Input: s = "([)]"
    Output: false
 */

/**
 * @param {string} s
 * @return {boolean}
 */

const isValid = function(s) {
    const start = [];
       for (let i = 0; i < s.length; i++) {
           if (s[i] === '(' || s[i] === '[' || s[i] === '{') {
               start.push(s[i]);   
           } else {
               if (s[i] === ')') {
                   if (start.pop() !== '(') return false;
               } else if (s[i] === ']') {
                   if (start.pop() !== '[') return false;
               } else if (s[i] === '}') {
                   if (start.pop() !== '{') return false;
               }
           }
       };
       
    return true && !start.length;
};

console.log(isValid("()[]{}"))
