function extractEachKth(inputArray: number[], k: number): number[] {
  const newArray = inputArray.filter((number, index) => (index + 1) % k !== 0)
  return newArray;
}

extractEachKth([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 3);
