const grid = [
  ['W', 'L', 'W', 'W', 'W'],
  ['W', 'L', 'W', 'W', 'W'],
  ['W', 'W', 'W', 'L', 'W'],
  ['W', 'W', 'L', 'L', 'W'],
  ['L', 'W', 'W', 'L', 'L'],
  ['L', 'L', 'W', 'W', 'W'],
];

const minimumIsland = (grid) => {
  const visited = new Set();
  let minimumIsland = Infinity;

  for (let i = 0; i < grid.length; i++) {
    for (let j = 0; j < grid[i].length; j++) {
      const numberOfIslands = countIslands([i, j], grid, visited);
      if (numberOfIslands === 0) continue;
      minimumIsland = Math.min(minimumIsland, numberOfIslands);
    }
  }

  return minimumIsland;
};

const countIslands = (square, grid, visited) => {
  const [row, col] = square;
  if (row < 0 || row > grid.length - 1) return 0;
  if (col < 0 || col > grid[0].length - 1) return 0;

  if (grid[row][col] === 'W') return 0;

  if (visited.has(`${row},${col}`)) return 0;
  visited.add(`${row},${col}`);

  let count = 1;
  count += countIslands([row, col-1], grid, visited);
  count += countIslands([row, col+1], grid, visited);
  count += countIslands([row-1, col], grid, visited);
  count += countIslands([row+1, col], grid, visited);

  return count;
}

minimumIsland(grid); // -> 2
