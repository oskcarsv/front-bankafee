import { Link } from "react-router-dom";

import transferUser from "../../assets/iconTransfer/transferUser.svg";

import "../../styles/transferUser/formTransferUser.css";
import { useEffect } from "react";
import { useState } from "react";
import { Input } from "../Input";
import toast from "react-hot-toast";
import { validateDPI } from "../../shared/validator/validateDPI";
import { validateAccount, validateAccountMessage } from "../../shared/validator/validateAccount";

export const FormTransferUser = () => {
  const [selectAccount, setSelectAccount] = useState();
  const [accounts, setAccounts] = useState([]);
  const [form, setForm] = useState({
    noOwnerAccount: {
      value: "",
      showError: '',
      isValid: false
    },
    noDestinationAccount: {
      value: "",
      showError: '',
      isValid: false
    },
    DPI_DestinationAccount: {
      value: "",
      showError: '',
      isValid: false
    },
    amount: {
      value: "",
      showError: '',
      isValid: false
    },
    description: {
      value: "",
      showError: '',
      isValid: false
    }
  });

  useEffect(() => {
    const obtainAccounts = () => {
      accounts.push('Select account');
      const { no_Account } = JSON.parse(localStorage.getItem("token"));
      setAccounts(accounts.concat(no_Account));
    }
    obtainAccounts();
  }, []);

  const handleInputValueChange = (value, field) => {
    setForm((prevState) => ({
      ...prevState,
      [field]: {
        ...prevState[field],
        value
      }
    }))
  }

  const handleInputValidationOnBlur = (value, field) => {
    let isValid = false;
    switch (field) {
      case 'noDestinationAccount':
        isValid = validateAccount(value);
        break;
      case 'DPI_DestinationAccount':
        isValid = validateDPI(value);
        break;
      case 'amount':
        break;
      case 'description':
        break;
      default:
        break;
    }
    setForm((prevState) => ({
      ...prevState,
      [field]: {
        ...prevState[field],
        isValid,
        showError: !isValid
      }
    }))
  }

  const handleSelect = (event) => {
    event.preventDefault();
    setSelectAccount(event.target.value);
    if (event.target.value === 'Select account') {
      toast.error('Select an account');
    }
  }

  return (
    <main className="content-form-transfer-user">
      <section>
        <img src={transferUser} alt="img" className="img-transfer-user" />
        <h1 className="title-transfer-user">Transfer</h1>
      </section>
      <form className="form-transfer-user">
        <div className="box-transfer">
          <select className="box-select-transfer" onClickCapture={handleSelect}>
            {Array.isArray(accounts) && accounts.map((account, index) =>
            (<option key={index} value={account} className="input-text-transfer-user"
            >{account}</option>)
            )
            }
          </select>
          <Input
            field={'noDestinationAccount'}
            type={"text"}
            value={form.noDestinationAccount.value}
            placeholderText="Destination account"
            onChangeHandler={handleInputValueChange}
            onBlurHandler={handleInputValidationOnBlur}
            showErrorMessage={form.noDestinationAccount.showError}
            validationMessage={validateAccountMessage}
            classNameInput="input-text-transfer-user"
          />
          <label className="container">
            <input type="checkbox" />
            <svg height="24px" id="Layer_1" version="1.2" viewBox="0 0 24 24" width="24px" xml:space="preserve" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"><g><g><path d="M9.362,9.158c0,0-3.16,0.35-5.268,0.584c-0.19,0.023-0.358,0.15-0.421,0.343s0,0.394,0.14,0.521    c1.566,1.429,3.919,3.569,3.919,3.569c-0.002,0-0.646,3.113-1.074,5.19c-0.036,0.188,0.032,0.387,0.196,0.506    c0.163,0.119,0.373,0.121,0.538,0.028c1.844-1.048,4.606-2.624,4.606-2.624s2.763,1.576,4.604,2.625    c0.168,0.092,0.378,0.09,0.541-0.029c0.164-0.119,0.232-0.318,0.195-0.505c-0.428-2.078-1.071-5.191-1.071-5.191    s2.353-2.14,3.919-3.566c0.14-0.131,0.202-0.332,0.14-0.524s-0.23-0.319-0.42-0.341c-2.108-0.236-5.269-0.586-5.269-0.586    s-1.31-2.898-2.183-4.83c-0.082-0.173-0.254-0.294-0.456-0.294s-0.375,0.122-0.453,0.294C10.671,6.26,9.362,9.158,9.362,9.158z"></path></g></g></svg>
          </label>
        </div>
        <div className="content-input-alone-transfer">
          <Input
            field={'DPI_DestinationAccount'}
            type={"text"}
            value={form.DPI_DestinationAccount.value}
            placeholderText={"DPI destination"}
            onChangeHandler={handleInputValueChange}
            onBlurHandler={handleInputValidationOnBlur}
            showErrorMessage={form.DPI_DestinationAccount.showError}
            classNameInput="input-text-transfer-user"
          />
        </div>
        <div className="content-input-alone-transfer">
          <Input
            field={'amount'}
            type={"Number"}
            value={form.amount.value}
            placeholderText={"Amount"}
            onChangeHandler={handleInputValueChange}
            onBlurHandler={handleInputValidationOnBlur}
            showErrorMessage={form.amount.showError}
            classNameInput="input-text-transfer-user"
          />
        </div>
        <div className="content-input-alone-transfer">
          <Input
            field={'description'}
            type={"text"}
            value={form.description.value}
            placeholderText={"Description"}
            onChangeHandler={handleInputValueChange}
            onBlurHandler={handleInputValidationOnBlur}
            showErrorMessage={form.description.showError}
            classNameInput="input-text-transfer-user"
          />
        </div>
      </form>
      <section className="container-btn-transfer">
        <div className="btn-content-transfer">
          <Link to="/home" className="link-btn-transfer-user">
            <button className="btn-transfer cancel">Cancel</button>
          </Link>
          <Link to="/home" className="link-btn-transfer-user">
            <button className="btn-transfer">Transfer</button>
          </Link>
        </div>
      </section>
    </main>
  );
};
