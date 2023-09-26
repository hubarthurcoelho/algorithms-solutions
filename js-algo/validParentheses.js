var isValid = function(s) {
  let counterparts = {
    '{': '}',
    '(': ')',
    '[': ']'
  }

  let stack = []

  for (const par of s) {
    if (!counterparts[par]) {
      let guy = stack.pop();
      if (guy !== par) {
        return false;
      }
    } else {
      stack.push(counterparts[par])
    }
  }

  return stack.length === 0;
};

console.log(isValid('()'))