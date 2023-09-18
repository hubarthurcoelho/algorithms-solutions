const depthFirstRecursiveLargestComponent = (graph) => {
  let largest = 0, visited = new Set();

  for (const node in graph) {
    largest = Math.max(largest, recursiveTraverseLength(node, graph, visited));
  }

  return largest;
};

const recursiveTraverseLength = (node, graph, visited) => {
  if (visited.has(String(node))) return 0;
  visited.add(String(node));
  let count = 1; // current node

  for (const neighbor of graph[node]) {
    count += recursiveTraverseLength(neighbor, graph, visited);
  }

  return count;
}

const depthFirstStackLargestComponent = (graph) => {
  let largest = 0, visited = new Set();

  for (const node in graph) {
    largest = Math.max(largest, depthFirstStackTraverseLength(node, graph, visited));
  }

  return largest;
}

const depthFirstStackTraverseLength = (node, graph, visited) => {
  if (visited.has(String(node))) return 0;

  let stack = [node];
  let count = 0;
  while(stack.length > 0) {
    const current = stack.pop();
    if (visited.has(String(current))) continue;
    visited.add(String(current));
    count++;

    for (const neighbor of graph[current]) {
      stack.push(neighbor);
    }
  }

  return count;
}

const exampleInput = {
  0: ['8', '1', '5'],
  1: ['0'],
  5: ['0', '8'],
  8: ['0', '5'],
  2: ['3', '4'],
  3: ['2', '4'],
  4: ['3', '2']
};
