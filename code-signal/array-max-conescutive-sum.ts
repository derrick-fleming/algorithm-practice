function arrayMaxConsecutiveSum(inputArray: number[], k: number): number {
  let largestSum = 0;
  for (let i = 0; i <= (inputArray.length - k); i++) {
    let sum = inputArray[i];
    for (let kIndex = 1; kIndex < k; kIndex++) {
      sum = sum + inputArray[i + kIndex]
    }
    if (sum > largestSum) {
      largestSum = sum;
    }
  }
  return largestSum;
}

arrayMaxConsecutiveSum([2, 3, 5, 1, 6], 2);
