export default function validTime(time: string): boolean {
  const timeArray = time.split(':');
  if (Number(timeArray[0]) < 0 || Number(timeArray[0]) >= 24) return false;
  if (Number(timeArray[1]) < 0 || Number(timeArray[1]) > 59) return false;
  return true;
}
