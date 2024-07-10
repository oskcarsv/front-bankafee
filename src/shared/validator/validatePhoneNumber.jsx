export const validatePhoneNumber = (phoneNumber) => {
    const regex = /^.{8,13}$/;
    return regex.test(phoneNumber);
}

export const validatePhoneNumberMessage = 'El numero de telefono debe tener entre 8 y 13 caracteres.'