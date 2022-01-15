import { useState } from "react";

const useInput = (validateInput) => {
  const [inputValue, setInputValue] = useState("");
  const [isInputTouched, setIsInputTouched] = useState(false);

  const isInputValueValid = validateInput(inputValue);
  const hasError = isInputTouched && !isInputValueValid;
  const inputClasses = hasError ? "form-control invalid" : "form-control";

  const valueChangeHandler = (event) => {
    setInputValue(event.target.value);
  };

  const inputBlurHandler = (event) => {
    setIsInputTouched(true);
  };

  const reset = () => {
    console.log("Reset");
    setInputValue("");
    setIsInputTouched(false);
  };

  return {
    value: inputValue,
    isValueValid: isInputValueValid,
    hasError,
    inputClasses,
    valueChangeHandler,
    inputBlurHandler,
    reset,
  };
};

export default useInput;
