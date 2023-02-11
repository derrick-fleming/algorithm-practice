export default function electionWinners(votes: number[], k: number): number {
  let max = votes[0];
  for (let i = 1; i < votes.length; i++) {
    if (votes[i] > max) {
      max = votes[i];
    }
  }
  const mostVotes = votes.map(candidate => candidate + k);
  const winners = mostVotes.filter(candidate => {
    if (k === 0) {
      return candidate === max
    } else {
      return candidate > max;
    }
  });
  if (k === 0 && winners.length > 1) return 0;
  return winners.length;
}
