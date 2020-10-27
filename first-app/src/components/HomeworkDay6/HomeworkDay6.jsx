import React, { useState, useReducer, useEffect } from "react"
import TextField from "@material-ui/core/TextField"
import styles from "./HomeworkDay6.module.css"
import {
  Button,
  Checkbox,
  FormControlLabel,
  MenuItem,
  Select,
} from "@material-ui/core"

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

  useEffect(() => {
    if (errors.length > 0) {
      isFormValid()
    }
  }, [formState])

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

  return (
    <div className={styles.wrapper}>
      <form onSubmit={handleSubmit} className={styles.form}>
        <h1>Create Account</h1>

        <fieldset className={styles.fieldset}>
          <label htmlFor="firstName">
            <p>First Name</p>
            <TextField
              id="firstName"
              name="firstName"
              variant="outlined"
              value={firstName}
              onChange={handleInputChange}
              error={errors.includes("firstName") ? true : false}
              className={styles.input}
              inputProps={{
                "data-testid": "firstName",
              }}
            />
            {errors.includes("firstName") && (
              <p className={`${styles.errorMessage}`}>This Field is required</p>
            )}
          </label>
        </fieldset>

        <fieldset className={styles.fieldset}>
          <label htmlFor="lastName">
            <p>Last Name</p>
            <TextField
              id="lastName"
              name="lastName"
              variant="outlined"
              value={lastName}
              onChange={handleInputChange}
              error={errors.includes("lastName") ? true : false}
              className={styles.input}
              inputProps={{
                "data-testid": "lastName",
              }}
            />
            {errors.includes("lastName") && (
              <p className={`${styles.errorMessage}`}>This Field is required</p>
            )}
          </label>
        </fieldset>

        <fieldset className={styles.fieldset}>
          <label htmlFor="email">
            <p>Email</p>
            <TextField
              id="email"
              name="email"
              type="email"
              variant="outlined"
              value={email}
              onChange={handleInputChange}
              error={errors.includes("email") ? true : false}
              className={styles.input}
              inputProps={{
                "data-testid": "email",
              }}
            />
            {errors.includes("email") && (
              <p className={`${styles.errorMessage}`}>This Field is required</p>
            )}
          </label>
        </fieldset>

        <fieldset className={styles.fieldset}>
          <label htmlFor="password">
            <p>Password</p>
            <TextField
              id="password"
              name="password"
              type="password"
              variant="outlined"
              value={password}
              onChange={handleInputChange}
              error={errors.includes("password") ? true : false}
              className={styles.input}
              inputProps={{
                "data-testid": "password",
              }}
            />
            {errors.includes("password") && (
              <p className={`${styles.errorMessage}`}>This Field is required</p>
            )}
          </label>
        </fieldset>

        <fieldset className={styles.fieldset}>
          <label htmlFor="country">
            <p>Country</p>
            <Select
              id="country"
              name="country"
              variant="outlined"
              value={country}
              onChange={handleInputChange}
              label="Country"
              className={styles.input}
              inputProps={{
                "data-testid": "country",
              }}
            >
              <MenuItem value="">
                <em>Select a Country</em>
              </MenuItem>
              <MenuItem value="RO">RO</MenuItem>
              <MenuItem value="ES">ES</MenuItem>
              <MenuItem value="AU">AU</MenuItem>
              <MenuItem value="UK">UK</MenuItem>
            </Select>
            {errors.includes("country") && (
              <p className={`${styles.errorMessage}`}>This Field is required</p>
            )}
          </label>
        </fieldset>

        <fieldset className={styles.fieldset}>
          <label htmlFor="terms">
            <FormControlLabel
              control={
                <Checkbox
                  checked={terms}
                  onChange={handleInputChange}
                  id="terms"
                  name="terms"
                  data-testid="terms"
                  color="primary"
                />
              }
              label="I accept the terms of the service Wrap"
            />
            {errors.includes("terms") && (
              <p className={`${styles.errorMessage}`}>This Field is required</p>
            )}
          </label>
        </fieldset>

        <Button
          type="submit"
          data-testid="submitButton"
          variant="contained"
          color="primary"
          disabled={isFormSubmiting || errors.length > 0}
          className={styles.input}
        >
          Submit
        </Button>
      </form>
    </div>
  )
}

export default HomeworkDay6
