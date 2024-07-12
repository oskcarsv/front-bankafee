import { Link } from "react-router-dom";
import { useState } from "react";
import { useAuth } from "../../shared/hooks/";
import signIn from "../../assets/iconLogin/SignIn.svg";
import logo from "../../assets/iconLanding/logo.svg";
import { Input } from "../Input";

import "../../styles/loginCss/form.css";

export const Form = () => {
  const { login, isLoading } = useAuth();
  const [form, setForm] = useState({
    username: {
      value: "",
      isValid: false,
      errorMessage: "",
    },
    password: {
      value: "",
      isValid: false,
      errorMessage: "",
    },
  });

  const handleInputValueChange = (value, field) => {
    setForm((prevState) => ({
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
      case "username":
        isValid = value.length > 0;
        break;
      case "password":
        isValid = value.length > 0;
        break;
      default:
        break;
    }
    setForm((prevState) => ({
      ...prevState,
      [field]: {
        ...prevState[field],
        isValid,
        showError: !isValid,
      },
    }));
  };

  const handleLogin = (event) => {
    event.preventDefault();
    login(form.username.value, form.password.value);
  };

  const buttonDisabled =
    isLoading || !form.username.isValid || !form.password.isValid;

  return (
    <main className="main-content">
      <div className="content-login">
        <div className="content-login-logo">
          <img src={logo} alt="logo-login" className="img-login" />
          <div className="content-info">
            <h1 className="h1-login">BankAfee</h1>
            <h2 className="h2-login">Tu banco de confianza</h2>
          </div>
        </div>
      </div>
      <div className="content-form">
        <form className="form-login">
          <img src={signIn} alt="img" className="img-sign" />
          <div className="h1-sign">
            <h1>Sing In</h1>
          </div>
          <div className="sign-in-input-container">
            <Input
              field="username"
              type="text"
              value={form.username.value}
              placeholderText="Username"
              classNameInput="input-login username"
              onChangeHandler={handleInputValueChange}
              onBlurHandler={handleInputValidationOnBlur}
              showErrorMessage={form.username.showError}
              validationMessage="The username is required."
            />
            <Input
              field="password"
              type="password"
              value={form.password.value}
              placeholderText="Password"
              classNameInput="input-login"
              onChangeHandler={handleInputValueChange}
              onBlurHandler={handleInputValidationOnBlur}
              showErrorMessage={form.password.showError}
              validationMessage="The password is required."
            />
          </div>
          <div className="btn-container">
            <button
              type="submit"
              className="btn-login"
              onClick={handleLogin}
              disabled={buttonDisabled}
            >
              Sign In
            </button>
          </div>
        </form>
      </div>
    </main>
  );
};
