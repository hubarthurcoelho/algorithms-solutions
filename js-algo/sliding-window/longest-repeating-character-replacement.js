function characterReplacement(s, k) {
  let left = 0;
  let right = 0;
  let maxLength = 0;
  let map = {};
  let cMost = s[0];

  while(right < s.length) {
    map[s[right]] = (map[s[right]] || 0) + 1;
    //   if(!map[s[right]]) {
    //       map[s[right]] = 0;
    //   }
    //   map[s[right]]++;

    // cMost = Math.max(map[s[right]], map[cMost])
    if (map[s[right]] >= map[cMost]) {
        cMost = s[right]
    }

    if (right - left + 1 - map[cMost] > k) {
      map[s[left]]--;
      left++;
    }

    //   while(right - left+1 > map[cMost] + k) {
    //       map[s[left]]--;
    //       left++;
    //       cMost = Object.keys(map).reduce((a, b) => map[a] > map[b] ? a : b);
    //   }

    maxLength = Math.max(maxLength, right-left+1);

    right++;
  }

  return maxLength;
};

console.log(characterReplacement('ABCDEF', 2));
