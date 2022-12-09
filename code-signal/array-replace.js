function arrayReplace(inputArray, elemToReplace, substitutionElem) {
  const output = inputArray.map((element, index) => {
    if (elemToReplace === element) {
      inputArray[index] = substitutionElem;
    }
    return inputArray[index];
  });
  return output;
}

arrayReplace([1, 2, 1]);
