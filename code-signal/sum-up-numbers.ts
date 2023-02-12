export default function sumUpNumbers(inputString: string): number {
  const isNumber = /\d+/g;
  const numbers = inputString.match(isNumber);
  let total = 0;
  if (numbers === null) return total;
  numbers.forEach(number => total = total + Number(number))
  return total;
}
