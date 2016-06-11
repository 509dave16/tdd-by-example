/**
 * Code goes here for program or package.
 */

function createDollar(amount) {
  const times = value => createDollar(amount * value);
  const getAmount = () => amount;
  const equals = dollar => amount === dollar.getAmount();

  return {
    times,
    getAmount,
    equals
  }
}


export default createDollar