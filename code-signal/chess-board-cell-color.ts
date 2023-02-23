function chessBoardCellColor(cell1: string, cell2: string): boolean {
  const charOne = cell1.charCodeAt(0)
  const charTwo = cell2.charCodeAt(0)
  let colorOne: string;
  let colorTwo: string;
  if (charOne % 2 === 0) {
    if (Number(cell1[1]) % 2 === 0) {
      colorOne = 'black'
    } else {
      colorOne = 'white'
    }
  } else {
    if (Number(cell1[1]) % 2 === 0) {
      colorOne = 'white'
    } else {
      colorOne = 'black'
    }
  }
  if (charTwo % 2 === 0) {
    if (Number(cell2[1]) % 2 === 0) {
      colorTwo = 'black'
    } else {
      colorTwo = 'white'
    }
  } else {
    if (Number(cell2[1]) % 2 === 0) {
      colorTwo = 'white'
    } else {
      colorTwo = 'black'
    }
  }
  if (colorOne === colorTwo) {
    return true
  }
  return false
}


chessBoardCellColor('D4', 'E7');
