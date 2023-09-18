const depthFirstRecursiveHasPath = (graph, src, dst) => {
  if (src === dst) return true;
  
  for (const neighbor of graph[src]) {
    if (hasPath(graph, neighbor, dst) === true) {
      return true;
    }
  }
  
  return false;
};

// Think as a stack (add to the top, remove from the top)
const depthFirstStackHasPath = (graph, src, dst) => {
  const stack = [src];
  
  while(stack.length > 0) {
    const current = stack.pop();
    if (current === dst) return true;
    for (const neighbor of graph[current]) {
      stack.push(neighbor);
    }
  }
  
  return false;
};

// think as a FIFO queue (shift and push)
const breadthFirstHasPath = (graph, src, dst) => {
  const queue = [src];
  
  while(queue.length > 0) {
    const current = queue.shift();
    if (current === dst) return true;
    
    for (const neighbor of graph[current]) {
      queue.push(neighbor);
    }
  }
  
  return false;
}
