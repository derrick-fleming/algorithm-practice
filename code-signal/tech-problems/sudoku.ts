function sudokuPuzzle(grid: string[][]): boolean {


  function rowSafe(grid: string[], num: string, numIndex: number) {
    for (let i = 0; i < 9; i++) {

      if (numIndex !== i && grid[i] === num) {
        return false;

      }
    }
    return true;
  }

  function colSafe(grid: string[][], index: number, num: string, row: number) {
    for (let i = 0; i < 9; i++) {
      if (i !== row && grid[i][index] === num) {
        return false
      }
    }
    return true;
  }

  for (let i = 0; i < 9; i++) {
    for (let j = 0; j < 9; j++) {
      if (grid[i][j] !== ".") {
        const isRowSafe = rowSafe(grid[i], grid[i][j], j);
        if (!isRowSafe) return false;
        const isColSafe = colSafe(grid, j, grid[i][j], i);
        if (!isColSafe) return false;
      }

    }
  }

  for (let i = 0; i < 9; i += 3) {
    for (let j = 0; j < 9; j += 3) {
      let subGrid = [];
      for (let row = 0; row < 3; row++) {
        for (let col = 0; col < 3; col++) {
          if (subGrid.includes(grid[i + row][j + col])) return false;
          if (grid[i + row][j + col] !== ".") subGrid.push(grid[i + row][j + col]);
        }
      }
    }
  }


  return true;
}
