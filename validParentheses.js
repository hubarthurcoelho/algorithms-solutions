var isValid = function(s) {
  if (s[0] === ')' || s[0] === '}' || s[0] === ']') return false;
  const parentheses = []
  const notClosed = []
  const counterParts = {
   '(': ')',
   '{': '}',
   '[': ']'
  }
  
  for (let i = 0; i < s.length; i++) {
    if (s[i] === '(' || s[i] === '{' || s[i] === '[') parentheses.push(s[i])
    else if (s[i] === counterParts[parentheses[parentheses.length - 1]]) {
      parentheses.pop()
    } else {
      notClosed.push(s[i])
    }
  }

  return parentheses.length === 0 && notClosed.length === 0
};

console.log(isValid('()'))