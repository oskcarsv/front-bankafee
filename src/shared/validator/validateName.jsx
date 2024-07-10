export const validateName = (name) => {
    const regex = /^.{45,}$/;
    return regex.test(name);
}

export const validateNameMessage = 'El nombre debe tener 45 caracteres maximo.'