// [-2,1,-3,4,-1,2,1,-5,4] -> 6

function maxSum(nums) {
  let sum = 0
  let max = nums[0]
  let start = 0
  let finish = nums.length
  while (start < finish) {
    sum += nums[start]
    max = Math.max(sum, max)
    while (sum > nums[start] && start < finish - 1) {
      start++
      sum += nums[start]
      max = Math.max(sum, max)
    };
    sum = nums[start]
    max = Math.max(sum, max)
    start++
  }
  return max
}

console.log(maxSum([-2, 1, -3, 4, -1, 2, 1, -5, 4]))
