import { useState } from "react";

const useInputControl = (validateInput) => {
  const [inputControlValue, setInputControlValue] = useState("");
  const [inputControlIsTouched, setInputControlIsTouched] = useState(false);

  const inputControlValueIsValid = validateInput(inputControlValue);
  const inputControlHasError =
    inputControlIsTouched && !inputControlValueIsValid;
  const inputControlClasses = !inputControlHasError
    ? "form-control"
    : "form-control invalid";

  const inputControlValueChangeHanlder = (event) => {
    setInputControlValue(event.target.value);
  };

  const inputControlBlurHanlder = (event) => {
    setInputControlIsTouched(true);
  };

  const inputControlReset = () => {
    setInputControlValue("");
    setInputControlIsTouched(false);
  };

  return {
    inputControlValue,
    inputControlValueIsValid,
    inputControlHasError,
    inputControlClasses,
    inputControlValueChangeHanlder,
    inputControlBlurHanlder,
    inputControlReset,
  };
};

export default useInputControl;
