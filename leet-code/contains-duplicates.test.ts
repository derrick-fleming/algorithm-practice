import { expect } from 'chai';
import containsDuplicate from './contains-duplicates';

describe ('containsDuplicate(nums)', function() {

  this.beforeEach(function () {
    expect(containsDuplicate).to.be.a('function');
  });

  it ('determines that [1, 1, 2, 3, 4, 5] contains a duplicate', function () {
    const input = Object.freeze([1, 1, 2, 3, 4, 5]);
    const output = containsDuplicate(input);
    expect(output).to.deep.equal(true);
  });

  it('determines that [10, 11, 12, 13, 15, 15, 16] contains a duplicate', function () {
    const input = Object.freeze([10, 11, 12, 13, 15, 15, 16]);
    const output = containsDuplicate(input);
    expect(output).to.deep.equal(true);
  });

  it('determines that [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12] does not contain a duplicate', function () {
    const input = Object.freeze([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]);
    const output = containsDuplicate(input);
    expect(output).to.deep.equal(false);
  });
})
