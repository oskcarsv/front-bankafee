export const validateMonthyIncome = (monthlyIncome) => {
  const regex = /^(?:10[1-9]|1[1-9]\d|\d{3,})$/;
  return regex.test(monthlyIncome);
};

export const validateMonthyIncomeMessage =
  "Su sueldo mensual debe ser mayor a 100.";
