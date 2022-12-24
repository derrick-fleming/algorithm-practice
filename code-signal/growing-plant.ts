function growingPlant(upSpeed: number, downSpeed: number, desiredHeight: number): number {
  let dayTotal = upSpeed;
  let day = 1;
  while (dayTotal < desiredHeight) {
    dayTotal = dayTotal + upSpeed - downSpeed;
    day++;
  }
  return day;

}

growingPlant(5,2,7)
