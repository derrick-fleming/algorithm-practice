/* exported truncate */
export default function truncate(length: number, string: string) {
  return string.slice(0, length) + '...';
}
