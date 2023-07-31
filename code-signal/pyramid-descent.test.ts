import { expect } from 'chai';
import path from './pyramid-descent';

describe('Pyramid Descent Challenge', () => {
  it('should return "LR" for first pyramid', () => {
    const pyramid = [
      [1],
      [2, 3],
      [4, 1, 1]
    ];
    const value = path(pyramid, 2);

    expect(value).equal('LR');

  });

  it('should return "LRLL" for the second pyramid', () => {
    const pyramid = [
      [2],
      [4, 3],
      [3, 2, 6],
      [2, 9, 5, 2],
      [10, 5, 2, 15, 5]
    ];

    const value = path(pyramid, 720);
    expect(value).equal('LRLL');
  })
});
