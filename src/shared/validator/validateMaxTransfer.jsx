export const validateMaxTransfer = (amount = "") => {
    if (amount > 2000) {
        return false
    }else{
        return true
    }
};

export const validateMaxTransferMessage = 'La cantidad máxima es de Q2000.00'
