/**
 * Tests go here for testing program or package.
 */

import createFranc from '../src/franc';
import {expect} from 'chai';
/**
 *  1) $5 + 10 CHF = $10 if rate is 2:1
 * X2) $5 * 2 = $10
 * X3)Make "amount" private
 * X4)Dollar side-effects?
 *  5)Money rounding?
 * X6)equals()
 *  7)hashCode()
 *  8)Equal null
 *  9)Equal object
 */

describe('Franc', () => {
  it('times', () => {
    const five = createFranc(5);
    expect(five.times(2).equals(createFranc(10))).to.be.true;
    expect(five.times(3).equals(createFranc(15))).to.be.true;
  });

  it('equals', () => {
    expect(createFranc(5).equals(createFranc(5))).to.be.true;
    expect(createFranc(5).equals(createFranc(6))).to.be.false;
  });
});