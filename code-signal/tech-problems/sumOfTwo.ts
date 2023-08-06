function sumOfTwo(a: number[], b: number[], v: number): boolean {

  const aArray = new Set(a);

  for (const number of b) {
    const diff = v - number;
    if (aArray.has(diff)) {
      return true;
    }
  }

  return false;

}
