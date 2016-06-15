/**
 * Tests go here for testing program or package.
 */

import createDollar from '../src/dollar';
import {expect} from 'chai';

describe('Dollar', () => {
  it('times', () => {
    const five = createDollar(5);
    expect(five.times(2).equals(createDollar(10))).to.be.true;
    expect(five.times(3).equals(createDollar(15))).to.be.true;
  });

  it('equals', () => {
    expect(createDollar(5).equals(createDollar(5))).to.be.true;
    expect(createDollar(5).equals(createDollar(6))).to.be.false;
  });
});