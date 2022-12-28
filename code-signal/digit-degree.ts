function digitDegree(n: number): number {
  let replace = 0;
  let sumString = n.toString()
  let sumLength = sumString.length;
  while (sumLength > 1) {
    let sum = 0;
    for (let i = 0; i < sumLength; i++) {
      sum = sum + Number(sumString[i])
    }
    replace++;
    sumString = sum.toString();
    sumLength = sumString.length;
  }
  return replace;
}

digitDegree(99);
