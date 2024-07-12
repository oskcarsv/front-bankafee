export const validateAlias = (alias) => {
  const regex = /^.{1,50}$/;
  return regex.test(alias);
};

export const validateAliasMessage = "El alias debe tener 50 caracteres maximo.";
