function chessBoardCellColor(cell1, cell2) {
  const charOne = cell1.charCodeAt(0);
  const charTwo = cell2.charCodeAt(0);
  let colorOne;
  let colorTwo;
  if (charOne % 2 === 0) {
    if (cell1[1] % 2 === 0) {
      colorOne = 'black';
    } else {
      colorOne = 'white';
    }
  } else {
    if (cell1[1] % 2 === 0) {
      colorOne = 'white';
    } else {
      colorOne = 'black';
    }
  }
  if (charTwo % 2 === 0) {
    if (cell2[1] % 2 === 0) {
      colorTwo = 'black';
    } else {
      colorTwo = 'white';
    }
  } else {
    if (cell2[1] % 2 === 0) {
      colorTwo = 'white';
    } else {
      colorTwo = 'black';
    }
  }
  if (colorOne === colorTwo) {
    return true;
  }
  return false;
}

chessBoardCellColor('D4', 'E7');
