import { Link } from "react-router-dom";

import { Input } from "../Input";

import "../../styles/requestAccount/formRequestAccount.css";

import { useState } from "react";

import {

  validateEmail,

  validateEmailMessage,

  validateName,

  validateNameMessage,

  validatePhoneNumber,

  validatePhoneNumberMessage,

  validateUsername,

  validateUsernameMessage,

  validateDPI,

  validateDPIMessage,

  validateWorkPlace,

  validateWorkPlaceMessage,

  validateMonthyIncome,

  validateMonthyIncomeMessage

} from '../../shared/validator'

import { useClientPetition } from '../../shared/hooks/'

export const FormRequestAccount = () => {

  const { clientPetition, isLoading } = useClientPetition();

  const [formState, setFormState] = useState({

    name: {

      value: "",
      isValid: false,
      showError: false,

    },

    username: {

      value: "",
      isValid: false,
      showError: false,

    },

    DPI: {

      value: "",
      isValid: false,
      showError: false,

    },

    adress: {

      value: "",
      isValid: false,
      showError: false,

    },

    email: {

      value: "",
      isValid: false,
      showError: false,

    },

    phoneNumber: {

      value: "",
      isValid: false,
      showError: false,

    },

    workPlace: {

      value: "",
      isValid: false,
      showError: false,

    },

    monthlyIncome: {

      value: "",
      isValid: false,
      showError: false,

    },

    aliasAccount: {

      value: "",
      isValid: false,
      showError: false,

    },

    typeAccount: {

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

  }

  const handleInputValidationOnBlur = (value, field) => {

    let isValid = false;

    switch (field) {

      case "name":

        isValid = validateName(value);

        break;

      case "username":

        isValid = validateUsername(value);

        break;

      case "DPI":

        isValid = validateDPI(value);

        break;

      case "email":

        isValid = validateEmail(value);

        break;

      case "phoneNumber":

        isValid = validatePhoneNumber(value);

        break;

      case "workPlace":

        isValid = validateWorkPlace(value);

        break;

      case "monthlyIncome":

        isValid = validateMonthyIncome(value);

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

  }

  const handleClientPetition = (event) => {

    event.preventDefault();

    clientPetition(

      formState.name.value,

      formState.username.value,

      formState.DPI.value,

      formState.adress.value,

      formState.email.value,

      formState.phoneNumber.value,

      formState.workPlace.value,

      formState.monthlyIncome.value,

      formState.aliasAccount.value,

      formState.typeAccount.value

    );

  }

  const isSubmitButtonDisabled =

    isLoading ||

    !formState.name.isValid ||

    !formState.username.isValid ||

    !formState.DPI.isValid ||

    !formState.adress.isValid ||

    !formState.email.isValid ||

    !formState.phoneNumber.isValid ||

    !formState.workPlace.isValid ||

    !formState.monthlyIncome.isValid;

  return (
    <main className="info-form-caccount-user">
      <section className="content-title-request">
        <h1 className="title-request-account">Request Account</h1>
      </section>
      <form className="form-request" onSubmit={handleClientPetition}>
        <div className="input-request-alone">
          <Input
            field="name"
            value={formState.name.value}
            onChangeHandler={handleInputValueChange}
            type="text"
            placeholder="Name"
            onBlurHandler={handleInputValidationOnBlur}
            showErrorMessage={formState.name.showError}
            validationMessage={validateNameMessage}
            className="input-text-request-account"
          />
        </div>
        <div className="input-request-alone">
          <Input
            field="username"
            value={formState.username.value}
            onChangeHandler={handleInputValueChange}
            type="text"
            placeholder="Username"
            onBlurHandler={handleInputValidationOnBlur}
            showErrorMessage={formState.username.showError}
            validationMessage={validateUsernameMessage}
            className="input-text-request-account"
          />
        </div>
        <div className="input-request-alone">
          <Input
            field="DPI"
            value={formState.DPI.value}
            onChangeHandler={handleInputValueChange}
            type="Number"
            placeholder="DPI"
            onBlurHandler={handleInputValidationOnBlur}
            showErrorMessage={formState.DPI.showError}
            validationMessage={validateDPIMessage}
            className="input-text-request-account"
          />
        </div>
        <div className="input-request-alone">
          <Input
            field="adress"
            value={formState.adress.value}
            onChangeHandler={handleInputValueChange}
            type="text"
            placeholder="Adress"
            onBlurHandler={handleInputValidationOnBlur}
            showErrorMessage={formState.adress.showError}
            className="input-text-request-account"
          />
        </div>
        <div className="input-request-together">
          <Input
            field="email"
            value={formState.email.value}
            onChangeHandler={handleInputValueChange}
            type="text"
            placeholder="Email"
            onBlurHandler={handleInputValidationOnBlur}
            showErrorMessage={formState.email.showError}
            validationMessage={validateEmailMessage}
            className="input-text-request-account"
          />
          <Input
            field="phoneNumber"
            value={formState.phoneNumber.value}
            onChangeHandler={handleInputValueChange}
            type="text"
            placeholder="Phone Number"
            onBlurHandler={handleInputValidationOnBlur}
            showErrorMessage={formState.phoneNumber.showError}
            validationMessage={validatePhoneNumberMessage}
            className="input-text-request-account"
          />
        </div>
        <div className="input-request-alone">
          <Input
            field="workPlace"
            value={formState.workPlace.value}
            onChangeHandler={handleInputValueChange}
            type="text"
            placeholder="WorkPlace"
            onBlurHandler={handleInputValidationOnBlur}
            showErrorMessage={formState.workPlace.showError}
            validationMessage={validateWorkPlaceMessage}
            className="input-text-request-account"
          />
        </div>
        <div className="input-request-alone">
          <Input
            field="monthlyIncome"
            value={formState.monthlyIncome.value}
            onChangeHandler={handleInputValueChange}
            type="Number"
            placeholder="MonthlyIncome"
            onBlurHandler={handleInputValidationOnBlur}
            showErrorMessage={formState.monthlyIncome.showError}
            validationMessage={validateMonthyIncomeMessage}
            className="input-text-request-account"
          />
        </div>
        <div className="input-request-alone">
          <Input
            field="aliasAccount"
            value={formState.aliasAccount.value}
            onChangeHandler={handleInputValueChange}
            type="text"
            placeholder="AliasAccount"
            onBlurHandler={handleInputValidationOnBlur}
            showErrorMessage={formState.aliasAccount.showError}
            className="input-text-request-account"
          />
        </div>
        <div className="input-request-alone">
          <select
            name="typeAccount"
            value={formState.typeAccount.value}
            onChange={handleInputValueChange}
            onBlur={handleInputValidationOnBlur}
            className="input-text-request-account"
          >
            <option value="" disabled>Seleccione una opción</option>
            <option value="Monetaria">Monetaria</option>
            <option value="Ahorro">Ahorro</option>
          </select>
          {formState.typeAccount.showError && (
            <span className="error-message">/* Mensaje de error aquí */</span>
          )}
        </div>
      </form>
      <div className="content-btn-request">
        <Link to="/" className="link-btn-request-account">
          <button className="btn-account-cancel">Cancel</button>
        </Link>
        <Link to="/" className="link-btn-request-account">
          <button className="btn-request-account" type="submit" onClick={handleClientPetition}>Request</button>
        </Link>
      </div>
    </main>
  );
};
