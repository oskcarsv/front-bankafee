
export const validatePassword = (password) => {
    const regex = /^.{6,}$/;
    return regex.test(password);
}

export const validatePasswordMessage = 'The password must have at least 6 characters.';