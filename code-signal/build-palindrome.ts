export default function buildPalindrome(st: string): string {
  let newString = st;
  for (let i = 0; i < st.length; i++) {
    let half = Math.floor(newString.length / 2);
    if (newString.length % 2 === 0) {
      if (newString.slice(0, half) === newString.slice(half).split('').reverse().join('')) return newString;
      newString = st;
      newString += recursiveString(newString, i)
    } else {
      if (newString.slice(0, half) === newString.slice(half + 1).split('').reverse().join('')) return newString;
      newString = st;
      newString += recursiveString(newString, i)
    }
  }
}

function recursiveString(string: string, index: number) {
  if (index === 0) return string[index]
  return string[index] + recursiveString(string, index - 1);
};
