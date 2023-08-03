function firstNonRepeatingChar(s: string): string {
  const repeatObj = {};
  const stringLength = s.length;
  for (let i = 0; i < stringLength; i++) {
    if (repeatObj[s[i]]) {
      repeatObj[s[i]] += 1;
    } else {
      repeatObj[s[i]] = 1;
    }
  }

  for (let key in repeatObj) {
    if (repeatObj[key] === 1) {
      return key;
    }
  }

  return "_"
}
