function circleOfNumbers(n: number, firstNumber: number): number {
  const halfPoint = n / 2;
  if (firstNumber >= halfPoint) {
    return firstNumber - halfPoint
  } else {
    return firstNumber + halfPoint
  }
}
circleOfNumbers(15, 3);
