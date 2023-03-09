import { expect } from 'chai';
import maxSubArray from './max-sub-array';

describe ('maxSubArray(nums)', function() {
  this.beforeEach(function () {
    expect(maxSubArray).to.be.a('function');
  });

  it('determines that maxSubArray sum of [-2,1,-3,4,-1,2,1,-5,4] is 6', function () {
    const input = [-2, 1, -3, 4, -1, 2, 1, -5, 4];
    const output = maxSubArray(input);
    expect(output).to.deep.equal(6);
  });

  it('determines that maxSubArray sum of [1] is 1', function () {
    const input = [1]
    const output = maxSubArray(input);
    expect(output).to.deep.equal(1);
  });

  it('detmines that maxSubArray sum of [15, -14, 16, 12, 14, -5, 11, 10] is 59', function() {
    const input = [15, -14, 16, 12, 14, -5, 11, 10];
    const output = maxSubArray(input);
    expect(output).to.deep.equal(59);
  })
})
