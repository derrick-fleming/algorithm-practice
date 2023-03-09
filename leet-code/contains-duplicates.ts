export default function containsDuplicate(nums: number[]): boolean {
  let otherArray = [];
  for (let i = 0; i < nums.length; i++) {
    if (otherArray.includes(nums[i])) {
      return true;
    }
    otherArray.push(nums[i])
  }
  return false;
};
