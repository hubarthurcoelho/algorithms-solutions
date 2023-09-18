const grid = [
  ['W', 'L', 'W', 'W', 'W'],
  ['W', 'L', 'W', 'W', 'W'],
  ['W', 'W', 'W', 'L', 'W'],
  ['W', 'W', 'L', 'L', 'W'],
  ['L', 'W', 'W', 'L', 'L'],
  ['L', 'L', 'W', 'W', 'W'],
];



const islandCount = (grid) => {
  let count = 0, visited = new Set();

  for (let i = 0; i < grid.length; i++) {
    for (let j = 0; j < grid[i].length; j++) {
      if (islandFound([i, j], grid, visited)) {
        count++;
      }
    }
  }

  return count;
};

const islandFound = (square, grid, visited) => {
  const [row, col] = square;
  if (visited.has(`${row},${col}`) || grid[row][col] === 'W') return false;

  let stack = [square];

  while (stack.length > 0) {
    const current = stack.pop();
    const [row, col] = current;
    if (visited.has(`${row},${col}`) || grid[row][col] === 'W') continue;
    visited.add(`${row},${col}`);

    for (const neighbor of getNeighbors(current, grid)) {
      stack.push(neighbor);
    }
  }

  return true;
}

const getNeighbors = (square, grid) => {
  const [row, col] = square;
  const neighbors = [];

  if (col > 0) {
    neighbors.push([row, col - 1]);
  }
  if (col < grid[0].length - 1) {
    neighbors.push([row, col + 1]);
  }
  if (row > 0) {
    neighbors.push([row - 1, col]);
  }
  if (row < grid.length - 1) {
    neighbors.push([row + 1, col]);
  }

  return neighbors;
}

islandCount(grid); // -> 3

// 0 0 1 0
// 0 0 1 0 
// 0 0 1 0 
