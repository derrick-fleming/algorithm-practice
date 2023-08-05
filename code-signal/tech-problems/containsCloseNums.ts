function containsCloseNums(nums: number[], k: number): boolean {
  const map = {}
  for (let i = 0; i < nums.length; i++) {
    if (map[nums[i]] !== undefined) {
      const array = map[nums[i]];
      for (let j = 0; j < array.length; j++) {
        if (i - array[j] <= k) {
          return true;
        }
      }
      map[nums[i]].push(i);

    } else {
      map[nums[i]] = [i];
    }
  }

  return false;
}
