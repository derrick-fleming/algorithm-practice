function arrayReplace(inputArray: Number[], elemToReplace: number, substitutionElem: number) {
  const output = inputArray.map((element, index) => {
    if (elemToReplace === element) {
      inputArray[index] = substitutionElem;
    }
    return inputArray[index];
  });
  return output;
}
