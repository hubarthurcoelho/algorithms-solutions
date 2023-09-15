var minWindow = function(s, t) {
  let sArray = s.split(''), tArray = t.split('');
  let substring = '', leftIndex = 0;

  for (let i = 0; i < sArray.length; i++) {
      while(tArray.every(item => sArray.slice(leftIndex,i+1).includes(item))) {
          substring = s.substring(leftIndex,i+1);
          leftIndex++;
      }
  }

  return substring;
};

console.log(minWindow('AA', 'AA'));
