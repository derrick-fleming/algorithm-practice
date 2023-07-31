export default function discoverPath(pyramid: number[][], target: number) {

  const pyramidLength = pyramid.length - 1;

  function pathTester(row: number, column: number, currentProduct: number, path: string, pyramidLength: number) {

    if (row === pyramidLength && currentProduct === target) {
      return path;
    } else if (row === pyramidLength) {
      return null;
    }

    const leftSide = pathTester(row + 1, column, currentProduct * pyramid[row + 1][column], path + 'L', pyramidLength);
    if (leftSide) return leftSide

    const rightSide = pathTester(row + 1, column + 1, currentProduct * pyramid[row + 1][column + 1], path + 'R', pyramidLength);

    if (rightSide) return rightSide
    return null;
  }

  const leftPath = pathTester(0, 0, pyramid[0][0], '', pyramidLength);
  if (leftPath) return leftPath;

  const rightPath = pathTester(0, 1, pyramid[0][0], '', pyramidLength);
  if (rightPath) return rightPath;

  return null;

}
