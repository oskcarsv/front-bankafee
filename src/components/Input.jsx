
export const Input = ({
    field,
    label,
    placeholderText,
    value,
    onChangeHandler,
    type,
    classNameInput,
    showErrorMessage,
    validationMessage,
    onBlurHandler,
    ...restProps
}) => {
    const handleValueChange = (event) => {
        onChangeHandler(event.target.value, field);
    };
    const handleInputBlur = (event) => {
        onBlurHandler(event.target.value, field);
    };

    return (
        <>
            <input
                type={type}
                value={value}
                onChange={handleValueChange}
                onBlur={handleInputBlur}
                className={classNameInput}
                placeholder={placeholderText}
                {...restProps}
            >
            </input>
            <span>
                {showErrorMessage && validationMessage}
            </span>
        </>
    )
}