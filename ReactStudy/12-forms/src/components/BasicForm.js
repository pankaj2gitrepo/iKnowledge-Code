import useInputControl from "../hooks/use-InputControl";

const BasicForm = (props) => {
  const {
    inputControlValue: firstNameInputControlValue,
    inputControlValueIsValid: firstNameInputControlValueIsValid,
    inputControlHasError: firstNameInputControlHasError,
    inputControlClasses: firstNameInputControlClasses,
    inputControlValueChangeHanlder: firstNameInputControlValueChangeHanlder,
    inputControlBlurHanlder: firstNameInputControlBlurHanlder,
    inputControlReset: firstNameInputControlReset,
  } = useInputControl((value) => value.trim() !== "");

  const {
    inputControlValue: lastNameInputControlValue,
    inputControlValueIsValid: lastNameInputControlValueIsValid,
    inputControlHasError: lastNameInputControlHasError,
    inputControlClasses: lastNameInputControlClasses,
    inputControlValueChangeHanlder: lastNameInputControlValueChangeHanlder,
    inputControlBlurHanlder: lastNameInputControlBlurHanlder,
    inputControlReset: lastNameInputControlReset,
  } = useInputControl((value) => value.trim() !== "");

  const {
    inputControlValue: emailInputControlValue,
    inputControlValueIsValid: emailInputControlValueIsValid,
    inputControlHasError: emailInputControlHasError,
    inputControlClasses: emailInputControlClasses,
    inputControlValueChangeHanlder: emailInputControlValueChangeHanlder,
    inputControlBlurHanlder: emailInputControlBlurHanlder,
    inputControlReset: emailInputControlReset,
  } = useInputControl((value) => value.trim() !== "" && value.includes("@"));

  let isFormValid = false;
  if (
    firstNameInputControlValueIsValid &&
    lastNameInputControlValueIsValid &&
    emailInputControlValueIsValid
  ) {
    isFormValid = true;
  }

  const formSubmitHandler = (event) => {
    event.preventDefault();
    console.log("formSubmitHanlder");
    firstNameInputControlReset();
    lastNameInputControlReset();
    emailInputControlReset();
  };

  return (
    <form onSubmit={formSubmitHandler}>
      <div className="control-group">
        <div className={firstNameInputControlClasses}>
          <label htmlFor="name">First Name</label>
          <input
            type="text"
            id="name"
            onChange={firstNameInputControlValueChangeHanlder}
            onBlur={firstNameInputControlBlurHanlder}
            value={firstNameInputControlValue}
          />
          {firstNameInputControlHasError && (
            <p className="error-text">First Name must not be empty!</p>
          )}
        </div>
        <div className={lastNameInputControlClasses}>
          <label htmlFor="name">Last Name</label>
          <input
            type="text"
            id="name"
            onChange={lastNameInputControlValueChangeHanlder}
            onBlur={lastNameInputControlBlurHanlder}
            value={lastNameInputControlValue}
          />
          {lastNameInputControlHasError && (
            <p className="error-text">Last Name must not be empty!</p>
          )}
        </div>
      </div>
      <div className={emailInputControlClasses}>
        <label htmlFor="name">E-Mail Address</label>
        <input
          type="email"
          id="name"
          onChange={emailInputControlValueChangeHanlder}
          onBlur={emailInputControlBlurHanlder}
          value={emailInputControlValue}
        />
        {emailInputControlHasError && (
          <p className="error-text">Email is not valid!</p>
        )}
      </div>
      <div className="form-actions">
        <button disabled={!isFormValid}>Submit</button>
      </div>
    </form>
  );
};

export default BasicForm;
