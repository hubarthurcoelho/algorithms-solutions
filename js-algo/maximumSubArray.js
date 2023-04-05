// Given an integer array nums, find the subarray which has the largest sum and return its sum.

// Input: nums = [-2, 1, -3, 4, -1, 2, 1, -5, 4]
// Output: 6
// Explanation: [4, -1, 2, 1] has the largest sum = 6.

// function maxSubArrayLessTroll(nums) {
//   if (nums.length === 1) return nums[0];
//   let sum1 = nums[0];
//   for (let k = 1; k < nums.length; k++) {
//     sum1 += nums[k];
//   }
//   max1 = sum1;
//   console.log(sum1);
//   let start = 1;
//   let finish = nums.length;
//   while (start < finish) {
//     const xd = Math.min(nums[start - 1], nums[finish - 1]);
//     console.log('NUMS', nums[start - 1], nums[finish - 1]);
//     sum1 -= xd;
//     if (sum1 > max1) max1 = sum1;
//     if (nums[start - 1] < nums[finish - 1]) {
//       console.log(`${nums[start - 1]} menor que ${nums[finish - 1]}`);
//       console.log(sum1);
//       start++;
//     } else finish--;
//   }
//   return max1;
// }



function maxSubArrayLessTroll(nums) {
  if (nums.length === 1) return nums[0];
  const sum = nums[0];
  // const middle = Math.floor(nums.length / 2);
  // const leftArray = nums.slice(0, middle);
  // const rightArray = nums.slice(middle, nums.length);
  return sum + maxSubArrayLessTroll(nums);
}


console.log(maxSubArrayLessTroll([1, 2, -1, -2, 2, 1, -2, 1, 4, -5, 4]));

function maxSubArrayTroll(nums) {
  if (nums.length === 1) return nums[0];
  let sum;
  let max = nums[0];
  for (let k = 0; k < nums.length; k++) {
    sum = nums[k];
    for (let i = k + 1; i < nums.length; i++) {
      sum += nums[i];
      if (nums[i] > sum && nums[i] > max) {
        max = nums[i];
        break;
      }
      if (sum > max) max = sum;
    }
  }
  return max;
}