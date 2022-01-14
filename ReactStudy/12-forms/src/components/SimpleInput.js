import { useState } from "react";

const SimpleInput = (props) => {
  const [inputName, setInputName] = useState("");
  const [isInputNameTouched, setIsInputNameTouched] = useState(false);
  const [emailID, setEmailID] = useState("");
  const [isEmailIDTouched, setIsEmailIDTouched] = useState(false);

  const isInputNameValid = inputName.trim() !== "";
  const nameInputIsInvalid = isInputNameTouched && !isInputNameValid;
  const isEmailIDNotEmpty = emailID.trim() !== "";
  const isEmailIDValid = emailID.trim() !== "" && emailID.includes("@");
  const emailIDIsInvalid =
    isEmailIDTouched && (!isEmailIDNotEmpty || !isEmailIDValid);
  let isFormValid = false;
  if (isInputNameValid && isEmailIDValid) {
    isFormValid = true;
  }

  const inputNameChangeHandler = (event) => {
    setInputName(event.target.value);
  };

  const inputNameBlurHandler = (event) => {
    setIsInputNameTouched(true);
  };

  const emailIDChangeHandler = (event) => {
    setEmailID(event.target.value);
  };

  const emailIDBlurHandler = (event) => {
    setIsEmailIDTouched(true);
  };

  const formSubmitHandler = (event) => {
    event.preventDefault();
    setIsInputNameTouched(true);
    setIsEmailIDTouched(true);
    if (!isInputNameValid || !isEmailIDValid) {
      return;
    }
    console.log(inputName);
    console.log(emailID);
    setInputName("");
    setEmailID("");
    setIsInputNameTouched(false);
    setIsEmailIDTouched(false);
  };

  const nameInputClasses = nameInputIsInvalid
    ? "form-control invalid"
    : "form-control";

  const emailIDClasses = emailIDIsInvalid
    ? "form-control invalid"
    : "form-control";

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
      <div className={emailIDClasses}>
        <label htmlFor="name">Your Email ID</label>
        <input
          type="text"
          id="emailid"
          onChange={emailIDChangeHandler}
          onBlur={emailIDBlurHandler}
          value={emailID}
        />
        {emailIDIsInvalid && !isEmailIDNotEmpty && (
          <p className="error-text">Email ID must not be empty!</p>
        )}
        {emailIDIsInvalid && !isEmailIDValid && (
          <p className="error-text">Email ID is not valid!</p>
        )}
      </div>
      <div className="form-actions">
        <button disabled={!isFormValid}>Submit</button>
      </div>
    </form>
  );
};

export default SimpleInput;
