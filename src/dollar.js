/**
 * Code goes here for program or package.
 */
export default (amount) => {
  const times = (value) => {
    amount *= value;
  };
  
  const getAmount = () => amount;



  return {
    getAmount,
    times
  }
}