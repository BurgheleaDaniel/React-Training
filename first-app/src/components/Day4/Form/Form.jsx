import React, { useState } from "react";
import Input from "./Input";

const Form = () => {
  const [formState, setFormState] = useState([]);

  const initialState = [
    { name: "name 1", value: "", isValid: false },
    { name: "name 2", value: "", isValid: false },
  ];

  const resetFormState = () => {
    setFormState(initialState);
  };

  const isFormValid = Object.entries(formState).every((field) => field.isValid);

  const submitHandler = (e) => {
    e.preventDefault();
    window.alert(JSON.stringify(formState, null, 2));
    isFormValid && resetFormState();
  };

  const handleFormInputChange = (name, value, isValid) => {
    const newFormState = { ...formState };
    newFormState[name] = { ...newFormState[name], value, isValid };
    setFormState(newFormState);
  };

  return (
    <form noValidate onSubmit={submitHandler}>
      <Input name="input1" label="Input 1" onChange={handleFormInputChange} />
      <Input name="input2" label="Input 2" onChange={handleFormInputChange} />
      <button type="submit">Submit</button>
    </form>
  );
};

export default Form;
