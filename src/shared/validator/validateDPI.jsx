export const validateDPI = (DPI) => {
  const length = DPI.length;

  if (length != 13) {
    return false;
  }

  return true;
};

export const validateDPIMessage = "El DPI debe tener 13 caracteres.";
