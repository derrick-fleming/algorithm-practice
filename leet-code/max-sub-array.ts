export default function maxSubArray(nums: number[]): number {
  let max = nums[0];
  let prev = 0;
  for (let i = 0; i < nums.length; i++) {
    prev = Math.max(prev + nums[i], nums[i]);
    max = Math.max(max, prev);
  }
  return max;
};
