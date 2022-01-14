import { useState } from "react";

const SimpleInput = (props) => {
  const [inputName, setInputName] = useState("");
  const [isInputNameTouched, setIsInputNameTouched] = useState(false);
  const [email, setEmail] = useState("");
  const [isEmailTouched, setIsEmailTouched] = useState(false);

  const isInputNameValid = inputName.trim() !== "";
  const nameInputIsInvalid = isInputNameTouched && !isInputNameValid;
  const isEmailValid = email.trim() !== "" && email.includes("@");
  const emailIsInvalid = isEmailTouched && !isEmailValid;
  let isFormValid = false;
  if (isInputNameValid && isEmailValid) {
    isFormValid = true;
  }

  const inputNameChangeHandler = (event) => {
    setInputName(event.target.value);
  };

  const inputNameBlurHandler = (event) => {
    setIsInputNameTouched(true);
  };

  const emailChangeHandler = (event) => {
    setEmail(event.target.value);
  };

  const emailBlurHandler = (event) => {
    setIsEmailTouched(true);
  };

  const formSubmitHandler = (event) => {
    event.preventDefault();
    setIsInputNameTouched(true);
    setIsEmailTouched(true);
    if (!isInputNameValid || !isEmailValid) {
      return;
    }
    console.log(inputName);
    console.log(email);
    setInputName("");
    setEmail("");
    setIsInputNameTouched(false);
    setIsEmailTouched(false);
  };

  const nameInputClasses = nameInputIsInvalid
    ? "form-control invalid"
    : "form-control";

  const emailClasses = emailIsInvalid ? "form-control invalid" : "form-control";

  return (
    <form onSubmit={formSubmitHandler}>
      <div className={nameInputClasses}>
        <label htmlFor="name">Your Name</label>
        <input
          type="text"
          id="name"
          onChange={inputNameChangeHandler}
          onBlur={inputNameBlurHandler}
          value={inputName}
        />
        {nameInputIsInvalid && (
          <p className="error-text">Name must not be empty!</p>
        )}
      </div>
      <div className={emailClasses}>
        <label htmlFor="email">Your Email</label>
        <input
          type="email"
          id="email"
          onChange={emailChangeHandler}
          onBlur={emailBlurHandler}
          value={email}
        />
        {emailIsInvalid && <p className="error-text">Email ID is not valid!</p>}
      </div>
      <div className="form-actions">
        <button disabled={!isFormValid}>Submit</button>
      </div>
    </form>
  );
};

export default SimpleInput;
