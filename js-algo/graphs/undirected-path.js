const getAdjacentListFromEdges = (edges) => {
  return edges.reduce((acc, edge) => {
    const [ firstNode, secondNode ] = edge;
    
    if (!(firstNode in acc)) acc[firstNode] = [];
    if (!(secondNode in acc)) acc[secondNode] = [];
    
    acc[firstNode].push(secondNode);
    acc[secondNode].push(firstNode);

    return acc;
  }, {});
}

const depthFirstRecursiveUndirectedPath = (edges, nodeA, nodeB) => {
  const adjacentList = getAdjacentListFromEdges(edges);
  const visited = new Set();

  return hasRecursivePath(adjacentList, nodeA, nodeB, visited);
}

const hasRecursivePath = (graph, current, dst, visited) => {
  if (visited.has(current)) return false;
  visited.add(current);

  if (current === dst) return true;

  for (const neighbor of graph[current]) {
    if (hasRecursivePath(graph, neighbor, dst, visited)) return true;
  }

  return false;
}

const depthFirstStackUndirectedPath = (edges, nodeA, nodeB) => {
  const adjacentList = getAdjacentListFromEdges(edges);

  const stack = [nodeA];
  const visited = new Set();

  while(stack.length > 0) {
    const current = stack.pop();

    if (visited.has(current)) continue;
    visited.add(current);

    if (current === nodeB) return true;
    for (const neighbor of adjacentList[current]) {
      stack.push(neighbor);
    }
  }

  return false;
};

const breadthFirstUndirectedPath = (edges, nodeA, nodeB) => {
  const adjacentList = getAdjacentListFromEdges(edges);

  const queue = [nodeA];
  const visited = new Set();

  while (queue.length > 0) {
    const current = queue.shift();
    if (visited.has(current)) continue;
    visited.add(current);

    if (current === nodeB) return true;
    for (const neighbor of adjacentList[current]) {
      queue.push(neighbor);
    }
  }

  return false;
}
