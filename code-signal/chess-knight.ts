export default function chessKnight(cell: string): number {
  if (cell[0] === 'a' || cell[0] === 'h') {
    if (Number(cell[1]) > 2 && Number(cell[1]) < 7) return 4;
    if (Number(cell[1]) === 2 || Number(cell[1]) === 7) return 3;
    return 2;
  } else if (cell[0] === 'b' || cell[0] === 'g') {
    if (Number(cell[1]) > 2 && Number(cell[1]) < 7) return 6;
    if (Number(cell[1]) === 2 || Number(cell[1]) === 7) return 4;
    return 3;
  } else {
    if (Number(cell[1]) > 2 && Number(cell[1]) < 7) return 8;
    if (Number(cell[1]) === 2 || Number(cell[1]) === 7) return 6;
    return 4;
  }
}
