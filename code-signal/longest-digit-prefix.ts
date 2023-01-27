export default function longestDigitPrefix(inputString: string): string {
  let outputString: string = ''
  for (let i = 0; i < inputString.length; i++) {
    if (Number.isInteger(Number(inputString[i])) && inputString[i] !== ' ') {
      outputString = outputString + inputString[i]
    } else {
      return outputString;
    }
  }
  return outputString;
}

longestDigitPrefix("the output is 42");
