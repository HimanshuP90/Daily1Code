
/**
    Problem Statement:
    Given a string containing digits from 2-9 inclusive, return all possible letter combinations that the number could represent.
    Return the answer in any order.
    Example:
        Input: digits = "23"
        Output: ["ad","ae","af","bd","be","bf","cd","ce","cf"]

        Input: digits = ""
        Output: []
 */

/**
 * @param {string} digits
 * @return {string[]}
 */
 const letterCombinations1 = (digits) => {
    let output = [];
    if (digits) {
        output = [''];
        for (const digit of digits) {
            output = backtrack(output, digit);
        }
    }
    return output;
};

const map = new Map([
    ['2', 'abc'],
    ['3', 'def'],
    ['4', 'ghi'],
    ['5', 'jkl'],
    ['6', 'mno'],
    ['7', 'pqrs'],
    ['8', 'tuv'],
    ['9', 'wxyz']
]);

const backtrack = (input, nextDigit) => {
    const output = [];
    for (const letter of map.get(nextDigit)) {
        for (const combination of input) {
            output.push(combination + letter);
        }
    }
    return output;
}


var letterCombinations2 = function(digits) {
    const mapping = {
        "2": ["a", "b", "c"],
        "3": ["d","e","f"],
        "4": ["g", "h", "i"],
        "5": ["j", "k", "l"],
        "6": ["m", "n", "o"],
        "7": ["p", "q", "r", "s"],
        "8": ["t","u", "v"],
        "9": ["w", "x", "y", "z"]
    }
    digits = digits.split("")
    let result = []
    for(const digit of digits) {
        result = charStringMutiply(mapping[digit], result)
    }
    return result
};

var charStringMutiply = function(chars, strings) {
    const result = []
    if(strings.length ==0) {
        return chars
    }
    for (const character of chars) {
        for (const st of strings) {
            result.push(st+character)
        }
    }
    return result
}