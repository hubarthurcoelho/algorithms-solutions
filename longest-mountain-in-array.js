// Input: arr = [2,1,4,7,3,2,5]
// Output: 5
// Explanation: The largest mountain is [1,4,7,3,2] which has length 5.

var longestMountain = function(arr) {
  let start = 0
 let finish = arr.length - 1
 let mountain = 0
 let maxSize = 0
 while (start < finish) {
   if (arr[start] > arr[start + 1] && mountain === 0) {
     start++
     continue
   }
   if (arr[start + 1] > arr[start]) {
     mountain++
     start++
     continue
   }
   if (arr[start + 1] < arr[start]) {
     mountain++
     maxSize = Math.max(mountain, maxSize)
     if (arr[start + 1] < arr[start + 2]) mountain = 0
     start++
     continue
   }
    start++
    mountain = 0
 };
 if (maxSize === 0) return 0
 return maxSize + 1;
}

console.log(longestMountain([40,51,29,19,50,25]))
