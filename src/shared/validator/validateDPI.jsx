export const validateDPI = (DPI) => {
    const regex = /^.{13}$/;
    return regex.test(DPI);
}

export const validateDPIMessage = 'El DPI debe tener 13 caracteres.'