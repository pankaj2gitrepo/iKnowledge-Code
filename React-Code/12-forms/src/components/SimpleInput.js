import useInput from "../hooks/use-input";

const SimpleInput = (props) => {
  const {
    value: nameInputValue,
    isValueValid: nameInputIsValueValid,
    hasError: nameInputHasError,
    inputClasses: nameInputClasses,
    valueChangeHandler: nameInputValueChangeHandler,
    inputBlurHandler: nameInputBlurHandler,
    reset: nameInputReset,
  } = useInput((value) => value.trim() !== "");

  const {
    value: emailInputValue,
    isValueValid: emailInputIsValueValid,
    hasError: emailInputHasError,
    inputClasses: emailInputClasses,
    valueChangeHandler: emailInputValueChangeHandler,
    inputBlurHandler: emailInputBlurHandler,
    reset: emailInputReset,
  } = useInput((value) => value.trim() !== "" && value.includes("@"));

  let isFormValid = false;
  if (nameInputIsValueValid && emailInputIsValueValid) {
    isFormValid = true;
  }

  const formSubmitHandler = (event) => {
    event.preventDefault();
    if (!nameInputIsValueValid || !emailInputIsValueValid) {
      return;
    }
    console.log(nameInputValue);
    console.log(emailInputValue);
    nameInputReset();
    emailInputReset();
  };

  return (
    <form onSubmit={formSubmitHandler}>
      <div className={nameInputClasses}>
        <label htmlFor="name">Your Name</label>
        <input
          type="text"
          id="name"
          onChange={nameInputValueChangeHandler}
          onBlur={nameInputBlurHandler}
          value={nameInputValue}
        />
        {nameInputHasError && (
          <p className="error-text">Name must not be empty!</p>
        )}
      </div>
      <div className={emailInputClasses}>
        <label htmlFor="email">Your Email</label>
        <input
          type="email"
          id="email"
          onChange={emailInputValueChangeHandler}
          onBlur={emailInputBlurHandler}
          value={emailInputValue}
        />
        {emailInputHasError && (
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
