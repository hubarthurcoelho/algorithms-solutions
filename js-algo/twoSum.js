var twoSum = function(nums, target) {
  const indexMap = new Map();

  for (let i = 0; i < nums.length; i++) {
      const complement = target - nums[i];
      if (indexMap.has(complement) && indexMap.get(complement) !== i) {
          return [indexMap.get(complement), i]
      }
      indexMap.set(nums[i], i);
  }

  return []
};

console.log(twoSum([2,7,11,15], 9));
