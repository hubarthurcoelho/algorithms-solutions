var combinationSum = function(candidates, target) {
  const result = [];

  function dfs(start, target, subset) {
    if (target === 0) {
      result.push([...subset]);
      return;
    }

    for (let i = start; i < candidates.length; i++) {
      if (candidates[i] <= target) {
        subset.push(candidates[i]);
        dfs(i, target - candidates[i], subset);
        subset.pop();
      }
    }
  }

  dfs(0, target, []);

  return result;
};

console.log(combinationSum([1,3,6,7], 7));
