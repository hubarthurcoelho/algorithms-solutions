// https://leetcode.com/problems/roman-to-integer/description/

function romanToInt(s) {
  let result = 0 
  for (let i = 0; i < s.length; i += 1) {
      switch (s[i]) {
          case 'I':
              result += 1;
              break;
          case 'V':
              result += 5;
              if (i-1 >= 0 && s[i-1] === 'I') result -= 2;
              break;
          case 'X':
              result += 10;
              if (i-1 >= 0 && s[i-1] === 'I') result -= 2;
              break;
          case 'L':
              result += 50;
              if (i-1 >= 0 && s[i-1] === 'X') result -= 20;
              break;
          case 'C':
              result += 100;
              if (i-1 >= 0 && s[i-1] === 'X') result -= 20;
              break;
          case 'D':
              result += 500;
              if (i-1 >= 0 && s[i-1] === 'C') result -= 200;
              break;
          case 'M':
              result += 1000;
              if (i-1 >= 0 && s[i-1] === 'C') result -= 200;
              break;
      }
  }

  return result
};
