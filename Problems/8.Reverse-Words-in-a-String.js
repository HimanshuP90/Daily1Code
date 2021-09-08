/**
Given an input string s, reverse the order of the words.
A word is defined as a sequence of non-space characters. The words in s will be separated by at least one space.

Input: s = "the sky is blue"
Output: "blue is sky the"
Input: s = "  Bob    Loves  Alice   "
Output: "Alice Loves Bob"
 */


/**
 * @param {string} s
 * @return {string}
 */
 const reverseWords = (s) => {
    const ret = [];
    let word = [];
    for (let i = 0; i < s.length; ++i) {
      if (s.charAt(i) === ' ') {
          word.length > 0 && ret.unshift(word.join(''));
          word = [];
        }
      else {
        word.push(s.charAt(i));
      }
    }
    word.length > 0 && ret.unshift(word.join(''));
    return ret.join(' ');
  };
