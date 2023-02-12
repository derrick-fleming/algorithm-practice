export default function differentSquares(matrix: number[][]): number {
  let matrixOutput = [];
  for (let innerArray = 0; innerArray < matrix.length - 1; innerArray++) {
    let string: string;
    for (let innerIndex = 0; innerIndex < matrix[innerArray].length - 1; innerIndex++) {
      string = (
        matrix[innerArray][innerIndex].toString() + matrix[innerArray][innerIndex + 1] +
        matrix[innerArray + 1][innerIndex] + matrix[innerArray + 1][innerIndex + 1]
      )
      if (!matrixOutput.includes(string)) matrixOutput.push(string);
    }
  }
  return matrixOutput.length;
}
