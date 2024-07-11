export const validateDescriptionTransfer = (description) => {
    if(description.length >50){
        return false;
    }else{
        return true;
    }
}

export const validateDescriptionTransferMessage =
'La debe ser menor a 50 caracteres.'