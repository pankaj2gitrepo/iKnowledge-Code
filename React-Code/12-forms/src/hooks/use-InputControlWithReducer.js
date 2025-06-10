import { useReducer } from "react";

const initializeInputState = {
  value: "",
  isTouched: false,
};

const inputStateReducer = (state, action) => {
  if (action.type === "INPUT") {
    return { value: action.value, isTouched: state.isTouched };
  } else if (action.type === "BLUR") {
    return { value: state.value, isTouched: true };
  } else if (action.type === "RESET") {
    return { value: "", isTouched: false };
  }
};

const useInputControlWithReducer = (validateInput) => {
  const [inputState, dispatch] = useReducer(
    inputStateReducer,
    initializeInputState
  );

  const inputControlValueIsValid = validateInput(inputState.value);
  const inputControlHasError =
    inputState.isTouched && !inputControlValueIsValid;
  const inputControlClasses = !inputControlHasError
    ? "form-control"
    : "form-control invalid";

  const inputControlValueChangeHanlder = (event) => {
    dispatch({ type: "INPUT", value: event.target.value });
  };

  const inputControlBlurHanlder = () => {
    dispatch({ type: "BLUR" });
  };

  const inputControlReset = () => {
    dispatch({ type: "RESET" });
  };

  return {
    inputControlValue: inputState.value,
    inputControlValueIsValid,
    inputControlHasError,
    inputControlClasses,
    inputControlValueChangeHanlder,
    inputControlBlurHanlder,
    inputControlReset,
  };
};

export default useInputControlWithReducer;
