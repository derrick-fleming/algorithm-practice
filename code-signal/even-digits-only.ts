function evenDigitsOnly(n: number) {
  const stringNumber = n.toString();
  const arrayNumber = stringNumber.split('');
  const odd = arrayNumber.filter(number => Number(number) % 2 !== 0);
  if (odd.length > 0) {
    return false;
  } else {
    return true;
  }
}

evenDigitsOnly(642386);
