/* exported capitalizeWords */
export default function capitalizeWords(strings: string) {
  const words = strings.toLowerCase().split(' ');
  for (let i = 0; i < words.length; i++) {
    words[i] = words[i][0].toUpperCase() + words[i].slice(1);
  }
  return words.join(' ');
  }
