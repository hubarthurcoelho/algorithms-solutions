function lengthOfLongestSubstring(s) {
  let maxLength = 0, map = {}, leftIndex = 0
    
  for (let i = 0; i < s.length; i++) {

    map[s[i]] = (map[s[i]] || 0) + 1;

    while(map[s[i]] > 1) {
      map[s[leftIndex]]--;
      leftIndex++;
    }

    maxLength = Math.max(maxLength, i - leftIndex + 1);
  }

  return maxLength;
}

console.log(lengthOfLongestSubstring('pwwkew'));
