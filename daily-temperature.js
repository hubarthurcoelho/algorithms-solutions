// Input: temperatures = [73,74,   75,71,69,72,76      ,73]
// Output: [1,1,4,2,1,1,0,0]
// Quantos dias devo esperar para ter um dia mais quente

function dailyTemperatures(temperatures) {
  const obj = {};
  const stack = [];

  for (let i = 0; i < temperatures.length; i++) {
    while (temperatures[i] > stack[stack.length - 1]?.value) {
      const topStack = stack[stack.length - 1]
      const days = i - topStack.index;
      obj[topStack.index] = days;
      stack.pop();
    }
    if (temperatures[i] < temperatures[i + 1]) {
      obj[i] = 1;
      continue;
    }
    stack.push({value: temperatures[i], index: i});
    obj[i] = 0;
  }
  return Object.values(obj)
}

console.log(dailyTemperatures([89,62,70,58,47,47,46,76,100,70]))
