function knapsackLight(value1: number, weight1: number, value2: number, weight2: number, maxW: number): number {
  if (maxW >= weight1 + weight2) {
    return value1 + value2
  }
  if ((value1 >= value2 && maxW >= weight1)) {
    return value1
  }
  if (value2 >= value1 && maxW >= weight2) {
    return value2
  }
  if (value1 <= value2 && weight2 >= maxW && weight1 <= maxW) {
    return value1
  }
  if (value2 <= value1 && weight1 >= maxW && weight2 <= maxW) {
    return value2
  }
  return 0
}

knapsackLight(10, 5, 6, 4, 8);
