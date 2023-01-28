export default function isDigit(symbol: string): boolean {
  if (Number.isNaN(Number(symbol))) {
    return false
  }
  return true;
}
