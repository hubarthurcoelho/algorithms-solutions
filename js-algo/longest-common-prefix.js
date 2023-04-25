// https://leetcode.com/problems/longest-common-prefix/description/

function longestCommonPrefix(strs) {
    let str = ""
    let start = 0
    let end = strs[0].length

    while (start < end) {
        const currentLetter = strs[0][start]
        let match = 1
        for (let i = 1; i < strs.length; i += 1) {
            const currentWord = strs[i]
            if (currentWord[start] === undefined) return str;
    
            if (currentLetter === currentWord[start]) {
                match += 1
            }
        }
        start++

        if (match === strs.length) {
            str += currentLetter
        } else {
            break;
        }
    }
    return str
};
