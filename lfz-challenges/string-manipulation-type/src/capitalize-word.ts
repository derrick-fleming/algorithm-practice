/* exported capitalizeWord */
export default function capitalizeWord (word: string) {
  const output = word[0].toUpperCase() + word.slice(1).toLowerCase();
  if (output === 'Javascript') return 'JavaScript';
  return output;
}
