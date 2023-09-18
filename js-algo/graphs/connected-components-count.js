const recursiveDepthFirstConnectedComponentsCount = (graph) => {
  let count = 0, visited = new Set();

  for (const node in graph) {
    if (visited.has(node)) continue;
    recursiveExploreNode(node, graph, visited);
    count++;
  }

  return count;
};

const recursiveExploreNode = (node, graph, visited) => {
  if (visited.has(String(node))) return false;
  visited.add(String(node));

  for (const neighbor of graph[node]) {
    recursiveExploreNode(neighbor, graph, visited);
  }
};

const depthFirstStackConnectedComponentsCount = (graph) => {
  let count = 0, visited = new Set();

  for (const node in graph) {
    if (visited.has(node)) continue;
    depthFirstStackExploreNode(node, graph, visited);
    count++;
  }
}

const depthFirstStackExploreNode = (node, graph, visited) => {
  let stack = [node];

  while(stack.length > 0) {
    const current = stack.pop();
    if (visited.has(current)) continue;
    visited.add(String(current));

    for (const neighbor of graph[current]) {
      stack.push(neighbor);
    }
  }
}

const breadthFirstConnectedComponentsCount = (graph) => {
  let count = 0, visited = new Set();

  for (const node in graph) {
    if (breadthExploreComponent(node, graph, visited) === true) {
      count++;
    }
  }

  return count;
}

const breadthExploreComponent = (node, graph, visited) => {
  if (visited.has(node)) return false;

  let queue = [node];

  // FIFO queue
  while(queue.length > 0) {
    const current = queue.shift();
    // guard against infinite loops
    if (visited.has(String(current))) continue;
    visited.add(String(current));

    for (const neighbor of graph[node]) {
      queue.push(neighbor);
    }
  }

  return true;
}
