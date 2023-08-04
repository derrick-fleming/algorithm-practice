function areFollowingPatterns(strings: string[], patterns: string[]): boolean {

  for (let i = 0; i < strings.length; i++) {
    for (let j = i; j < strings.length; j++) {
      if (strings[i] !== strings[j + 1] && patterns[i] === patterns[j + 1]) {
        return false;
      }
      if (strings[i] === strings[j + 1] && patterns[i] !== patterns[j + 1]) {
        return false
      }
    }


  }

  return true;

}
