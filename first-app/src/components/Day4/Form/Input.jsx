import React from "react";

const Input = (props) => {
  const { label, name, minLength, onChange } = props;
  const [value, setValue] = useState("");
  const [isValid, setIsValid] = useState(false);

  const updateParentState = () => {};

  const validate = () => {
    const validation = value.length >= minLength;
    setIsValid(validation);
    updateParentState();
  };

  let validationTimeout;
  const onChangeHandler = (e) => {
    clearTimeout(validationTimeout);
    setValue(e.taget.value);
    validationTimeout = setTimeout(validate, 1000);
    onChange();
  };

  const isTouched = value.length > 0;

  return (
    <>
      <label htmlFor="name">{label}</label>
      <input
        type="text"
        name={name}
        id={name}
        onChange={onChangeHandler}
        value={value}
      />
      {isTouched && !isValid && <span>Error</span>}
    </>
  );
};

export default Input;
