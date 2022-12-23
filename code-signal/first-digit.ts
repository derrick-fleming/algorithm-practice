function firstDigit(inputString: string): string {
  for (let i = 0; i < inputString.length; i++) {
    if (Number.isInteger(Number(inputString[i])) && inputString[i] !== ' ') {
      return inputString[i]
    }
  }
}

firstDigit('var_1__Int');
