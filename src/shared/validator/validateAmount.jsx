export const validateAmount = (amount) => {
  const regex = /^(?:10[1-9]|1[1-9]\d|\d{3,})$/;
  return regex.test(amount);
};

export const validateAmountMessage = "La cantidad debe ser mayor a 100.";
