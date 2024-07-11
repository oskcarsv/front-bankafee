export const validateWorkPlace = (workPlace) => {
  const regex = /^.{1,120}$/;
  return regex.test(workPlace);
};

export const validateWorkPlaceMessage =
  "El lugar de trabajo debe tener entre 1 y 120 caracteres.";
