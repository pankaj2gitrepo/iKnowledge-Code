import { useState } from "react";

const SimpleInput = (props) => {
  const [inputName, setInputName] = useState("");
  const [isInputNameValid, setIsInputNameValid] = useState(false);
  const [isInputNameTouched, setIsInputNameTouched] = useState(false);
  const nameInputIsInvalid = isInputNameTouched && !isInputNameValid;

  const inputNameChangeHandler = (event) => {
    setInputName(event.target.value);

    if (event.target.value.trim() !== "") {
      setIsInputNameValid(true);
    }
  };

  const inputNameBlurHandler = (event) => {
    setIsInputNameTouched(true);

    if (inputName.trim() === "") {
      setIsInputNameValid(false);
    }
  };

  const formSubmitHandler = (event) => {
    event.preventDefault();

    setIsInputNameTouched(true);

    if (inputName.trim() === "") {
      setIsInputNameValid(false);
      return;
    }
    setIsInputNameValid(true);
    console.log(inputName);
    setInputName("");
  };

  const nameInputClasses = nameInputIsInvalid
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
      <div className="form-actions">
        <button>Submit</button>
      </div>
    </form>
  );
};

export default SimpleInput;
