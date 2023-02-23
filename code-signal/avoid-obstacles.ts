function solution(inputArray: number[], elemToReplace: number, substitutionElem: number): number[] {
  const output = inputArray.map((element, index) => {
    if (elemToReplace === element) {
      inputArray[index] = substitutionElem
    }
    return inputArray[index];
  })
  return output;
}
