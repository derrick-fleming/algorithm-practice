function minesweeper(matrix: Number[][]) {
  const matrixXCoordinateMax = matrix[0].length - 1;
  const matrixYCoordinateMax = matrix.length - 1;

  const minesArray = [];
  for (let i = 0; i <= matrixYCoordinateMax; i++) {
    minesArray.push([]);
  }
  for (let yCoordinate = 0; yCoordinate <= matrixYCoordinateMax; yCoordinate++) {
    for (let xCoordinate = 0; xCoordinate <= matrixXCoordinateMax; xCoordinate++) {
      let mines = 0;
      if (yCoordinate !== 0) {
        if (xCoordinate !== 0) {
          if (matrix[yCoordinate - 1][xCoordinate - 1]) {
            mines++;
          }
        }
        if (matrix[yCoordinate - 1][xCoordinate]) {
          mines++;
        }
        if (xCoordinate !== matrixXCoordinateMax) {
          if (matrix[yCoordinate - 1][xCoordinate + 1]) {
            mines++;
          }
        }
      }
      if (xCoordinate !== 0) {
        if (matrix[yCoordinate][xCoordinate - 1]) {
          mines++;
        }
      }
      if (yCoordinate !== matrixYCoordinateMax) {
        if (matrix[yCoordinate + 1][xCoordinate - 1]) {
          mines++;
        }
        if (xCoordinate !== matrixXCoordinateMax) {
          if (matrix[yCoordinate + 1][xCoordinate + 1]) {
            mines++;
          }
        }
        if (matrix[yCoordinate + 1][xCoordinate]) {
          mines++;
        }
      }
      if (xCoordinate !== matrixXCoordinateMax) {
        if (matrix[yCoordinate][xCoordinate + 1]) {
          mines++;
        }
      }
      minesArray[yCoordinate].push(mines);
    }

  }
  return minesArray;

}

minesweeper([[1, 2, 1],
  [2, 1, 1],
  [1, 1, 1]]);
