function depositProfit(deposit: number, rate: number, threshold: number) {
  let year = 1;
  const percent = rate / 100;
  let growthAmount = deposit + (deposit * percent);
  while (growthAmount < threshold) {
    year++;
    growthAmount = growthAmount + (growthAmount * percent);
  }
  return year;
}

depositProfit(100, 20, 180);
