function rotateImage(a: number[][]): number[][] {
  let row = a.length;
  let col = a[0].length;
  for (let i = 0; i < row; i++) {
    for (let j = i; j < col; j++) {
      let swapValue = a[i][j];
      console.log(swapValue);
      a[i][j] = a[j][i];
      a[j][i] = swapValue;
    }
  }

  for (let i = 0; i < row; i++) {
    a[i].reverse();
  }
  return a;
}
