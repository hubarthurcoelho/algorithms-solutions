function characterReplacement(s, k) {
  let map = {}, leftIndex = 0, maxCharLength = 0, maxFullLength = 0;

  for (let i = 0; i < s.length; i++) {
    map[s[i]] = (map[s[i]] || 0) + 1;

    maxCharLength = Math.max(maxCharLength, map[s[i]]);

    // when to shrink the window
    if (i - leftIndex + 1 - maxCharLength > k) {
      map[s[leftIndex]]--;
      leftIndex++;
    }

    maxFullLength = Math.max(maxFullLength, i - leftIndex + 1);
  }

  return maxFullLength;
};

console.log(characterReplacement('ABCDEF', 2));

// 'AABB', K = 2 -> 4
// when should the window close, or shrink?
// if the window size is greater than the most repeated character + k available replacements
// if windowSize > mostRepeatedChar + k
// if windowSize - mostRepeatedChar > k
// what is the max length?
// 'AAAA' -> maxCharLength = 4, maxFullLength = 4, k = 2
// 'AABB' -> maxCharLength = 4, maxFullLength = 4, k = 2
