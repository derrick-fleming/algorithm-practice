function absoluteValuesSumMinimzation(a: number[]): number {
  let absolute: number[] = [];
  for (let x = 0; x < a.length; x++) {
    let sum = 0;
    for (let i = 0; i < a.length; i++) {
      sum = sum + Math.abs(a[i] - a[x])
    }
    absolute.push(sum);
  }
  let smallestNumber = [0, absolute[0]];
  for (let i = 1; i < absolute.length; i++) {
    if (absolute[i] < smallestNumber[1]) {
      smallestNumber[0] = i;
      smallestNumber[1] = absolute[i]
    }
  }
  return a[smallestNumber[0]]
}

absoluteValuesSumMinimzation([1, 1, 3, 4])
