import { expect } from 'chai';
import twoSum from './two-sums';

describe('twoSum(nums)', function () {

  this.beforeEach(function () {
    expect(twoSum).to.be.a('function');
  });

  it('determines that twoSum of 9 for array [1, 1, 2, 3, 4, 5] is [4, 5]', function () {
    const input = [1, 1, 2, 3, 4, 5];
    const output = twoSum(input, 9);
    expect(output).to.deep.equal([4, 5]);
  });

  it('determines that twoSum of 9 for array [2,7,11,15] is [2, 7]', function () {
    const input = [2, 7, 11, 15];
    const output = twoSum(input, 9);
    expect(output).to.deep.equal([0, 1]);
  });

  it('determines that twoSum of 6 for array [3, 2, 4] is [2, 4]', function () {
    const input = [3, 2, 4];
    const output = twoSum(input, 6);
    expect(output).to.deep.equal([1, 2]);
  });


});
