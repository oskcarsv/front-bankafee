import { Link } from "react-router-dom";

import cAccountByUser from "../../assets/iconCAccountByUser/cAccountByUser.svg";

import "../../styles/createAccountByUser/cAccountByUser.css";

import { Input } from "../Input";

import { useState } from "react";

import {
  validateDPI,
  validateDPIMessage,
  validateAlias,
  validateAliasMessage,
  validateAmount,
  validateAmountMessage,
} from "../../shared/validator";

import { useAccountPetition } from "../../shared/hooks";

export const FormCAccount = () => {
  const { postAccountPetition, isLoading } = useAccountPetition();

  const [selectTypeAccount, setSelectTypeAccount] = useState();

  const [formState, setFormState] = useState({
    type: {
      value: "",
      isValid: false,
      showError: false,
    },

    DPI_Owner: {
      value: "",
      isValid: false,
      showError: false,
    },

    alias: {
      value: "",
      isValid: false,
      showError: false,
    },

    amount: {
      value: "",
      isValid: false,
      showError: false,
    },
  });

  const handleInputValueChange = (value, field) => {
    setFormState((prevState) => ({
      ...prevState,

      [field]: {
        ...prevState[field],

        value,
      },
    }));
  };

  const handleInputValidationOnBlur = (value, field) => {
    let isValid = false;

    switch (field) {
      case "DPI_Owner":
        isValid = validateDPI(value);

        break;

      case "alias":
        isValid = validateAlias(value);

        break;

      case "amount":
        isValid = validateAmount(value);

        break;

      default:
        isValid = true;

        break;
    }

    setFormState((prevState) => ({
      ...prevState,

      [field]: {
        ...prevState[field],

        isValid,

        showError: !isValid,
      },
    }));
  };

  const handleSelect = (event) => {
    event.preventDefault();

    setSelectTypeAccount(event.target.value);

    console.log(selectTypeAccount);
  };

  const handleAccountPetition = (event) => {
    event.preventDefault();

    postAccountPetition(
      selectTypeAccount,

      formState.DPI_Owner.value,

      formState.alias.value,

      formState.amount.value,
    );
  };

  const isSubmitButtonDisabled =
    isLoading ||
    !formState.DPI_Owner.isValid ||
    !formState.alias.isValid ||
    !formState.amount.isValid;

  return (
    <main className="info-form-caccount-user">
      <section className="img-caccount">
        <img src={cAccountByUser} alt="img" className="img-caccount-user" />
        <h1 className="title-create-account">Crear Cuenta</h1>
      </section>
      <form className="form-caccount-user" onSubmit={handleAccountPetition}>
        <div className="input-text-create-account">
          <Input
            field="alias"
            value={formState.alias.value}
            onChangeHandler={handleInputValueChange}
            type="text"
            className="input-text"
            placeholder="Alias"
            onBlurHandler={handleInputValidationOnBlur}
            showErrorMessage={formState.alias.showError}
            validationMessage={validateAliasMessage}
          />
          <Input
            field="amount"
            value={formState.amount.value}
            onChangeHandler={handleInputValueChange}
            type="Number"
            className="input-text"
            placeholder="Monto"
            onBlurHandler={handleInputValidationOnBlur}
            showErrorMessage={formState.amount.showError}
            validationMessage={validateAmountMessage}
          />
        </div>
        <div className="content-input-dpi">
          <Input
            field="DPI_Owner"
            value={formState.DPI_Owner.value}
            onChangeHandler={handleInputValueChange}
            type="text"
            className="input-text"
            placeholder="DPI"
            onBlurHandler={handleInputValidationOnBlur}
            showErrorMessage={formState.DPI_Owner.showError}
            validationMessage={validateDPIMessage}
          />
        </div>
        <div className="box-select-container">
          <select
            name="type"
            onChange={handleInputValueChange}
            onBlur={handleInputValidationOnBlur}
            onClick={handleSelect}
            className="input-text-request-account"
          >
            <option value="">Seleccione una opción</option>
            <option value="CURRENT">Monetario</option>
            <option value="CREDIT">Credito</option>
            <option value="SAVINGS">Ahorro</option>
          </select>
          {formState.type.showError && (
            <span className="error-message">/* Mensaje de error aquí */</span>
          )}
        </div>
      </form>
      <section className="container-btn-account">
        <div className="btn-container-cAccount">
          <Link to="/home" className="link-btn-caccount">
            <button className="btn-account cancel">Cancel</button>
          </Link>
        </div>
        <div className="btn-container-cAccount">
          <Link to="/home" className="link-btn-caccount">
            <button
              className="btn-account"
              type="sumbit"
              onClick={handleAccountPetition}
              disabled={isSubmitButtonDisabled}
            >
              Create
            </button>
          </Link>
        </div>
      </section>
    </main>
  );
};
