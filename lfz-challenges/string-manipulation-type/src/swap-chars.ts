export default function swapChars (a: number, b: number, string: string) {
  const output = string.split('');
  output[a] = string[b];
  output[b] = string[a];

  return output.join('');
}
