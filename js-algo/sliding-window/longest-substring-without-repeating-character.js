function lengthOfLongestSubstring(s) {
  let leftBoundary = 0;
  let rightBoundary = 0;
  let maxLength = 0;
  const set = new Set();

  while (rightBoundary < s.length) {
    if (!set.has(s[rightBoundary])) {
      set.add(s[rightBoundary]);
      maxLength = Math.max(maxLength, set.size);

      rightBoundary++;
    } else {
      set.delete(s[leftBoundary]);

      leftBoundary++;
    }
  }

  return maxLength;
}

console.log(lengthOfLongestSubstring('abca'));
