export default function isMac48Address(inputString: string): boolean {
  const hexArray = inputString.split('-');
  if (hexArray.length !== 6) return false;
  const upperCase = /[A-F]/;
  const digit = /\d/;
  for (let i = 0; i < hexArray.length; i++) {
    if (hexArray[i].length !== 2) return false;
    for (let index = 0; index < hexArray[0].length; index++) {
      if (upperCase.test(hexArray[i][index]) || digit.test(hexArray[i][index])) {
        continue
      } else {
        return false;
      }
    }
  };
  return true;
}
