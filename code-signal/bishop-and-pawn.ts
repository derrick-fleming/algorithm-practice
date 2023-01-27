export default function bishopAndPawn(bishop: string, pawn: string): boolean {
  const bishopChar = bishop.charCodeAt(0);
  const pawnChar = pawn.charCodeAt(0);
  const slope = Math.abs((bishopChar - pawnChar) / (Number(bishop[1]) - Number(pawn[1])))
  if (slope !== 1) return false;
  return true;
}

bishopAndPawn('d5', 'h1');
