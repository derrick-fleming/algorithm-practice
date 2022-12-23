function differentSymbolsNaive(s: string): number {
  let differentChar: string[] = []
  for (let i = 0; i < s.length; i++) {
    if (!differentChar.includes(s[i])) {
      differentChar.push(s[i])
    }
  }
  return differentChar.length;
}

differentSymbolsNaive('bcaba');
