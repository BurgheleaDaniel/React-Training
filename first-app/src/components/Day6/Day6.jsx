import React, { useState, useReducer } from "react"
import styles from "./Day6.module.css"

const initialState = { name: "", apples: "", count: 0, giftWrap: false }

const reducer = (state, action) => {
  if (action.name === "reset") return initialState
  return {
    ...state,
    [action.name]: action.value,
  }
}

const Day6 = () => {
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
      if (name === "giftWrap") continue
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

  const { name, apples, count, giftWrap } = formState
  const disableCount = apples === "" ? true : false

  return (
    <form onSubmit={handleSubmit} className={styles.wrapper}>
      <h1>How bout them apples</h1>
      {isFormSubmiting && (
        <>
          {/* <ul>
            {Object.keys(formState).map(key => (
              <li key={key}>
                {key}: {formState[key].toString()}
              </li>
            ))}
          </ul> */}
          <ul>
            {Object.entries(formState).map(([key, value]) => (
              <li>
                {key}: {value.toString()}
              </li>
            ))}
          </ul>
        </>
      )}
      <fieldset className={styles.fieldset}>
        <label htmlFor="name">
          <p>Name</p>
          <input
            id="name"
            name="name"
            value={name}
            onChange={handleInputChange}
          />
        </label>
      </fieldset>
      <fieldset className={styles.fieldset}>
        <label htmlFor="apples">
          <p>Apples</p>
          <select
            id="apples"
            name="apples"
            value={apples}
            onChange={handleInputChange}
          >
            <option value="">Select a type</option>
            <option value="type1">type 1</option>
            <option value="type2">type 2</option>
            <option value="type3">type 3</option>
            <option value="type4">type 4</option>
          </select>
        </label>

        <label htmlFor="count">
          <p>Count</p>
          <input
            id="count"
            name="count"
            type="number"
            value={count}
            disabled={disableCount}
            onChange={handleInputChange}
          />
        </label>
      </fieldset>
      <fieldset className={styles.fieldset}>
        <label htmlFor="giftWrap">
          <p>Gift Wrap</p>
          <input
            id="giftWrap"
            name="giftWrap"
            type="checkbox"
            checked={giftWrap}
            onChange={handleInputChange}
          />
        </label>
      </fieldset>
      {errors.length > 0 && (
        <ul>
          Erros:
          {errors.map((error, key) => (
            <li key={key}>{error}</li>
          ))}
        </ul>
      )}
      <button type="submit" disabled={isFormSubmiting}>
        Submit
      </button>
    </form>
  )
}

export default Day6
