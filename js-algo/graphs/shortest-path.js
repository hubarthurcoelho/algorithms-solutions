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

const breadthFirstShortestPath = (edges, nodeA, nodeB) => {
  const visited = new Set();
  const adjacentList = getAdjacentListFromEdges(edges);

  let shortestPath = breadthFirstStackShortestPath(nodeA, nodeB, adjacentList, visited);

  return shortestPath;
}

const breadthFirstStackShortestPath = (src, dst, graph, visited) => {
  let queue = [[src, 0]];

  while (queue.length > 0) {
    const [current, dist] = queue.shift();

    if (visited.has(current)) continue;
    visited.add(current);

    if (current === dst) return dist;
    for (const neighbor of graph[current]) {
      queue.push([neighbor, dist + 1]);
    } 
  }

  return -1;
}


// const shortestPath = (edges, nodeA, nodeB) => {
//   const visited = new Set();
//   const adjacentList = getAdjacentListFromEdges(edges);
//   let shortestPath = depthFirstStackShortestPath(nodeA, nodeB, adjacentList, visited);

//   return shortestPath || -1;
// };
//! NOT good here, because it can take a while to find a path, and it won't be the shortest
// const depthFirstStackShortestPath = (src, dst, graph, visited) => {
//   let stack = [[src, 0]];

//   while (stack.length > 0) {
//     const [current, dist] = stack.pop();
//     if (visited.has(current)) continue;
//     visited.add(current);

//     if (current === dst) return dist;

//     for (const neighbor of graph[current]) {
//       stack.push([neighbor, dist + 1]);
//     }
//   }

//   return minDist;
// }
