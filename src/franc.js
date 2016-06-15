/**
 * Code goes here for program or package.
 */

function createFranc(amount) {
  const times = value => createFranc(amount * value);
  const getAmount = () => amount;
  const equals = franc => amount === franc.getAmount();

  return {
    times,
    getAmount,
    equals
  }
}


export default createFranc