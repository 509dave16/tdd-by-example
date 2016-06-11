/**
 * Tests go here for testing program or package.
 */

import createDollar from '../src/dollar';
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

describe('Dollar', () => {
  it('times', () => {
    const five = createDollar(5);
    let product = five.times(2);
    expect(product.getAmount()).to.equal(10);
    product = five.times(3);
    expect(product.getAmount()).to.equal(15);
  });

  it('equals', () => {
    expect(createDollar(5).equals(createDollar(5))).to.be.true;
    expect(createDollar(5).equals(createDollar(6))).to.be.false;
  });
});