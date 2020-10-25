import React, { useState, useReducer } from "react"
import styles from "./HomeworkDay6.module.css"

const initialState = {
  firstName: "",
  lastName: "",
  email: "",
  password: "",
  country: "",
  terms: false,
}

const reducer = (state, action) => {
  if (action.name === "reset") return initialState
  return {
    ...state,
    [action.name]: action.value,
  }
}

const HomeworkDay6 = () => {
  const [formState, setFormState] = useReducer(reducer, initialState)
  const [isFormSubmiting, setIsFormSubmiting] = useState(false)
  const [errors, setErrors] = useState([])
  const resetFormState = () => {
    setFormState({
      name: "reset",
    })
  }

  const isFormValid = () => {
    const err = []

    for (const [name, value] of Object.entries(formState)) {
      if (value === initialState[name]) {
        err.push(name)
      }
      setErrors(err)
    }

    return errors.length === 0
  }

  const handleSubmit = e => {
    e.preventDefault()
    if (isFormValid()) {
      setIsFormSubmiting(true)

      setTimeout(() => {
        setIsFormSubmiting(false)
        resetFormState()
      }, 2000)
    }
  }

  const handleInputChange = e => {
    const value =
      e.target.type === "checkbox" ? e.target.checked : e.target.value

    setFormState({
      name: e.target.name,
      value: value,
    })
  }

  const { firstName, lastName, email, password, country, terms } = formState
  console.log(errors.includes("firstName"))

  return (
    <div className={styles.wrapper}>
      <form onSubmit={handleSubmit} className={styles.form}>
        <h1>Create Account</h1>

        <fieldset className={styles.fieldset}>
          <label htmlFor="firstName">
            <p>First Name</p>
            <input
              id="firstName"
              name="firstName"
              data-testid="firstName"
              value={firstName}
              onChange={handleInputChange}
              className={
                errors.includes("firstName")
                  ? `${styles.input} ${styles.error}`
                  : `${styles.input}`
              }
            />
            {errors.includes("firstName") && (
              <p className={`${styles.errorMessage}`}>This Field is required</p>
            )}
          </label>
        </fieldset>

        <fieldset className={styles.fieldset}>
          <label htmlFor="lastName">
            <p>Last Name</p>
            <input
              id="lastName"
              name="lastName"
              data-testid="lastName"
              value={lastName}
              onChange={handleInputChange}
              className={
                errors.includes("lastName")
                  ? `${styles.input} ${styles.error}`
                  : `${styles.input}`
              }
            />
            {errors.includes("lastName") && (
              <p className={`${styles.errorMessage}`}>This Field is required</p>
            )}
          </label>
        </fieldset>

        <fieldset className={styles.fieldset}>
          <label htmlFor="email">
            <p>Email</p>
            <input
              id="email"
              name="email"
              type="email"
              data-testid="email"
              value={email}
              onChange={handleInputChange}
              className={
                errors.includes("email")
                  ? `${styles.input} ${styles.error}`
                  : `${styles.input}`
              }
            />
            {errors.includes("email") && (
              <p className={`${styles.errorMessage}`}>This Field is required</p>
            )}
          </label>
        </fieldset>

        <fieldset className={styles.fieldset}>
          <label htmlFor="password">
            <p>Password</p>
            <input
              id="password"
              name="password"
              type="password"
              data-testid="password"
              value={password}
              onChange={handleInputChange}
              className={
                errors.includes("password")
                  ? `${styles.input} ${styles.error}`
                  : `${styles.input}`
              }
            />
            {errors.includes("password") && (
              <p className={`${styles.errorMessage}`}>This Field is required</p>
            )}
          </label>
        </fieldset>

        <fieldset className={styles.fieldset}>
          <label htmlFor="country">
            <p>Country</p>
            <select
              id="country"
              name="country"
              data-testid="country"
              value={country}
              onChange={handleInputChange}
              className={
                errors.includes("country")
                  ? `${styles.input} ${styles.error}`
                  : `${styles.input}`
              }
            >
              <option value="">Select a type</option>
              <option value="RO">RO</option>
              <option value="ES">ES</option>
              <option value="AU">AU</option>
              <option value="UK">UK</option>
            </select>

            {errors.includes("country") && (
              <p className={`${styles.errorMessage}`}>This Field is required</p>
            )}
          </label>
        </fieldset>

        <fieldset className={styles.fieldset}>
          <label htmlFor="terms">
            <p>I accept the terms of the service Wrap</p>
            <input
              id="terms"
              name="terms"
              data-testid="terms"
              type="checkbox"
              checked={terms}
              onChange={handleInputChange}
              className={
                errors.includes("terms")
                  ? `${styles.input} ${styles.error}`
                  : `${styles.input}`
              }
            />

            {errors.includes("terms") && (
              <p className={`${styles.errorMessage}`}>This Field is required</p>
            )}
          </label>
        </fieldset>

        <button
          type="submit"
          data-testid="submitButton"
          disabled={isFormSubmiting || errors.length > 0}
          className={styles.input}
        >
          Submit
        </button>
      </form>
    </div>
  )
}

export default HomeworkDay6
