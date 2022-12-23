// [-2,1,-3,4,-1,2,1,-5,4] -> 6

function maxSum(nums) {
  let sum = nums[0];
  let max = sum;
  let start = 1;
  let finish = nums.length
  while (start < finish) {
    sum += nums[start]
    max = Math.max(sum, max)
    while (sum > nums[start] && start < finish - 1) {
      start++
      sum += nums[start]
      if (sum > max) max = sum
    };
    max = Math.max(sum, max)
    sum = nums[start];
    max = Math.max(sum, max)
    start++;
  }
  return max;
}


console.log(maxSum([1,2,-1,-2,2,1,-2,1]));