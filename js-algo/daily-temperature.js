// Input: temperatures = [73,74,   75,71,69,72,76      ,73]
// Output: [1,1,4,2,1,1,0,0]
// Quantos dias devo esperar para ter um dia mais quente

function dailyTemperatures(temperatures) {
  const daysTohigherTemp = [];
  const stack = [];

  for (let i = 0; i < temperatures.length; i++) {
    while (stack[stack.length - 1] && temperatures[i] > stack[stack.length - 1].value) {
      const topStack = stack[stack.length - 1];
      daysTohigherTemp[topStack.index] = i - topStack.index; // days
      stack.pop();
    }
    if (temperatures[i] < temperatures[i + 1]) {
      daysTohigherTemp[i] = 1;
      continue;
    }
    stack.push({value: temperatures[i], index: i});
    daysTohigherTemp[i] = 0;
  }
  return daysTohigherTemp;
}

console.log(dailyTemperatures([89,62,70,58,47,47,46,76,100,70]))
// [8, 1, 5, 4, 3, 2, 1, 1, 0, 0]
