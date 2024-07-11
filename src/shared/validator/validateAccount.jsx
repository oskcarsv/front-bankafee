export const validateAccount = (account) => {
  const regex = /^[0-9]+$/;
  return regex.test(account);
};
export const validateAccountMessage = " La cuenta debe tener solo números.";
