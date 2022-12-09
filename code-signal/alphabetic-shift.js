function alphabeticShift(inputString) {
  const inputArray = inputString.split('');
  const updatedUniCode = inputArray.map(letter => {
    let code = letter.charCodeAt(0) + 1;
    if (code === 123) {
      code = 97;
    }
    return code;
  });
  const updatedLetters = updatedUniCode.map(code => String.fromCharCode(code));
  return updatedLetters.join('');
}

alphabeticShift('codesignal');
