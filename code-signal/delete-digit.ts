export default function deleteDigit(n: number): number {
  const stringN = n.toString();
  const arrayN = stringN.split('');
  let largest = Number(arrayN.slice(1).join(''));
  for (let i = 0; i < arrayN.length; i++) {
    const newArray = arrayN.filter((n, index) => index !== i)
    const newNumber = Number(newArray.join(''))
    if (largest < newNumber) largest = newNumber
  }
  return largest;
}
