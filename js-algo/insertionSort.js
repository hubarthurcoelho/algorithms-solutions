// https://www.hackerrank.com/challenges/insertionsort1/problem
// https://www.hackerrank.com/challenges/insertionsort2/problem

function insertionSort1(n, arr) {
  const e = arr[n-1];
  let i = n-2;
  while (i >= 0 && arr[i] > e) {
    arr[i+1] = arr[i];
    console.log(arr.join(' '));
    i--;
  }
  arr[i+1] = e;
  console.log(arr.join(' '));
  return arr;
}

function insertionSort2(n, arr) {
  for (var i = 1; i < n; i++) {
    if(arr[i] < arr[i-1]) {
      const elem = arr[i];
      var j = i;
      while(elem < arr[j - 1]) {
        arr[j] = arr[j - 1];
        j--;
      }
      arr[j] = elem;
    }
    console.log(arr.join(' '))
  }
}
