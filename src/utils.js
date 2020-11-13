export const calculateGrowth = (startYear, principal, rate, years) => {
  const result = [];
  let currentPrincipal = principal,
    currentYear = startYear,
    amount = 0;

  for (let i = 0; i < years; i++) {
    amount = currentPrincipal + (currentPrincipal * rate) / 100;
    const temp = {};
    temp.name = currentYear++;
    temp.amount = parseInt(amount);
    result.push(temp);
    currentPrincipal = amount;
  }
  return result;
};
