function solution(inputArray) {
  for (let i = 2; i <= 1000; i++) {
    const value = inputArray.some(index => index % i === 0);
    if (!value) {
      return i;
    }
  }
  return 1001;
}

solution();
