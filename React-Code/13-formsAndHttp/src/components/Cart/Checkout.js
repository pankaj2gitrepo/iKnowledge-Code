import { useRef, useState } from "react";
import classes from "./Checkout.module.css";

const isEmpty = (value) => value.trim() === "";
const isFiveChars = (value) => value.trim().length === 5;

const Checkout = (props) => {
  const [formValidity, setFormValidity] = useState({
    name: true,
    street: true,
    postalCode: true,
    city: true,
  });
  const enteredNameRef = useRef();
  const enteredStreetRef = useRef();
  const enteredPostalCodeRef = useRef();
  const enteredCityRef = useRef();

  const confirmHandler = (event) => {
    event.preventDefault();
    const enteredName = enteredNameRef.current.value;
    const enteredStreet = enteredStreetRef.current.value;
    const enteredPostalCode = enteredPostalCodeRef.current.value;
    const enteredCity = enteredCityRef.current.value;

    const enteredNameIsValid = !isEmpty(enteredName);
    const enteredStreetIsValid = !isEmpty(enteredStreet);
    const enteredPostalCodeIsValid = isFiveChars(enteredPostalCode);
    const enteredCityIsValid = !isEmpty(enteredCity);
    setFormValidity({
      name: enteredNameIsValid,
      street: enteredStreetIsValid,
      postalCode: enteredPostalCodeIsValid,
      city: enteredCityIsValid,
    });

    const isFormValid =
      enteredNameIsValid &&
      enteredStreetIsValid &&
      enteredPostalCodeIsValid &&
      enteredCityIsValid;

    if (!isFormValid) {
      return;
    }
    props.onConfirm({
      name: enteredName,
      street: enteredStreet,
      postalCode: enteredPostalCode,
      city: enteredCity,
    });
  };

  const nameControlClasses = `${classes.control} ${
    formValidity.name ? "" : classes.invalid
  }`;

  const streetControlClasses = `${classes.control} ${
    formValidity.street ? "" : classes.invalid
  }`;

  const postalCodeControlClasses = `${classes.control} ${
    formValidity.postalCode ? "" : classes.invalid
  }`;

  const cityControlClasses = `${classes.control} ${
    formValidity.city ? "" : classes.invalid
  }`;

  return (
    <form className={classes.form} onSubmit={confirmHandler}>
      <div className={nameControlClasses}>
        <label htmlFor="name">Your Name</label>
        <input type="text" id="name" ref={enteredNameRef} />
        {!formValidity.name && <p>Please enter a valid name.</p>}
      </div>
      <div className={streetControlClasses}>
        <label htmlFor="street">Street</label>
        <input type="text" id="street" ref={enteredStreetRef} />
        {!formValidity.street && <p>Please enter a valid street.</p>}
      </div>
      <div className={postalCodeControlClasses}>
        <label htmlFor="postal">Postal Code</label>
        <input type="text" id="postal" ref={enteredPostalCodeRef} />
        {!formValidity.postalCode && <p>Please enter a valid postal code.</p>}
      </div>
      <div className={cityControlClasses}>
        <label htmlFor="city">City</label>
        <input type="text" id="city" ref={enteredCityRef} />
        {!formValidity.city && <p>Please enter a valid city.</p>}
      </div>
      <div className={classes.actions}>
        <button type="button" onClick={props.onCancel}>
          Cancel
        </button>
        <button className={classes.submit}>Confirm</button>
      </div>
    </form>
  );
};

export default Checkout;
