/**
 * Code goes here for program or package.
 */

function createDollar(amount) {
  const times = value => createDollar(amount * value);
  const getAmount = () => amount;

  return {
    getAmount,
    times
  }
}


export default createDollar