import { useState } from 'react'
import { Layout } from '../App'

const REQUIRED_FIELDS = ['fullName', 'addressLine1', 'town', 'postcode']

const ERROR_MESSAGES = {
  fullName: 'Enter your full name',
  addressLine1: 'Enter the first line of your address',
  town: 'Enter your town or city',
  postcode: 'Enter your postcode',
}

const FIELD_LABELS = {
  fullName: 'Full name',
  addressLine1: 'Address line 1',
  town: 'Town or city',
  postcode: 'Postcode',
}

function validate(values) {
  const errors = {}
  for (const field of REQUIRED_FIELDS) {
    if (!values[field].trim()) {
      errors[field] = ERROR_MESSAGES[field]
    }
  }
  return errors
}

export default function AddressFormPage() {
  const [values, setValues] = useState({
    fullName: '',
    addressLine1: '',
    addressLine2: '',
    town: '',
    county: '',
    postcode: '',
  })
  const [errors, setErrors] = useState({})
  const [submitted, setSubmitted] = useState(false)

  function handleChange(e) {
    const { name, value } = e.target
    setValues((prev) => ({ ...prev, [name]: value }))
    // Clear error for field as user types
    if (errors[name]) {
      setErrors((prev) => {
        const next = { ...prev }
        delete next[name]
        return next
      })
    }
  }

  function handleSubmit(e) {
    e.preventDefault()
    const newErrors = validate(values)
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors)
      // Move focus to error summary
      document.getElementById('error-summary-title')?.focus()
    } else {
      setSubmitted(true)
    }
  }

  function handleReset() {
    setValues({ fullName: '', addressLine1: '', addressLine2: '', town: '', county: '', postcode: '' })
    setErrors({})
    setSubmitted(false)
  }

  const errorList = REQUIRED_FIELDS.filter((f) => errors[f]).map((f) => ({
    field: f,
    message: errors[f],
  }))
  const hasErrors = errorList.length > 0

  if (submitted) {
    return (
      <Layout backLink>
        <h1 className="govuk-heading-xl app-page-heading">
          Address form
          <a
            className="govuk-link govuk-!-font-size-19 govuk-!-font-weight-regular"
            href="https://design-system.service.gov.uk/patterns/addresses/"
            target="_blank"
            rel="noreferrer"
          >
            Address pattern reference (gov.uk)
          </a>
        </h1>

        <div className="govuk-panel govuk-panel--confirmation">
          <h2 className="govuk-panel__title">Address submitted</h2>
          <div className="govuk-panel__body">
            {values.fullName}
            <br />
            {values.addressLine1}
            {values.addressLine2 && <><br />{values.addressLine2}</>}
            <br />
            {values.town}
            {values.county && <><br />{values.county}</>}
            <br />
            {values.postcode.toUpperCase()}
          </div>
        </div>

        <p className="govuk-body govuk-!-margin-top-6">
          <button className="govuk-button govuk-button--secondary" onClick={handleReset}>
            Submit another address
          </button>
        </p>
      </Layout>
    )
  }

  return (
    <Layout backLink>
      <h1 className="govuk-heading-xl app-page-heading">
        Address form
        <a
          className="govuk-link govuk-!-font-size-19 govuk-!-font-weight-regular"
          href="https://design-system.service.gov.uk/patterns/addresses/"
          target="_blank"
          rel="noreferrer"
        >
          Address pattern reference (gov.uk)
        </a>
      </h1>

      {hasErrors && (
        <div
          className="govuk-error-summary"
          data-module="govuk-error-summary"
          aria-labelledby="error-summary-title"
          role="alert"
          tabIndex={-1}
          id="error-summary"
        >
          <h2 className="govuk-error-summary__title" id="error-summary-title" tabIndex={-1}>
            There is a problem
          </h2>
          <div className="govuk-error-summary__body">
            <ul className="govuk-list govuk-error-summary__list">
              {errorList.map(({ field, message }) => (
                <li key={field}>
                  <a href={`#${field}`}>{message}</a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      )}

      <form onSubmit={handleSubmit} noValidate>
        <fieldset className="govuk-fieldset">
          <legend className="govuk-fieldset__legend govuk-fieldset__legend--m">
            <h2 className="govuk-fieldset__heading">What is your address?</h2>
          </legend>

          {/* Full name */}
          <div className={`govuk-form-group${errors.fullName ? ' govuk-form-group--error' : ''}`}>
            <label className="govuk-label" htmlFor="fullName">
              Full name
            </label>
            {errors.fullName && (
              <p className="govuk-error-message" id="fullName-error">
                <span className="govuk-visually-hidden">Error:</span> {errors.fullName}
              </p>
            )}
            <input
              className={`govuk-input${errors.fullName ? ' govuk-input--error' : ''}`}
              id="fullName"
              name="fullName"
              type="text"
              autoComplete="name"
              value={values.fullName}
              onChange={handleChange}
              aria-describedby={errors.fullName ? 'fullName-error' : undefined}
            />
          </div>

          {/* Address line 1 */}
          <div className={`govuk-form-group${errors.addressLine1 ? ' govuk-form-group--error' : ''}`}>
            <label className="govuk-label" htmlFor="addressLine1">
              Address line 1
            </label>
            {errors.addressLine1 && (
              <p className="govuk-error-message" id="addressLine1-error">
                <span className="govuk-visually-hidden">Error:</span> {errors.addressLine1}
              </p>
            )}
            <input
              className={`govuk-input${errors.addressLine1 ? ' govuk-input--error' : ''}`}
              id="addressLine1"
              name="addressLine1"
              type="text"
              autoComplete="address-line1"
              value={values.addressLine1}
              onChange={handleChange}
              aria-describedby={errors.addressLine1 ? 'addressLine1-error' : undefined}
            />
          </div>

          {/* Address line 2 */}
          <div className="govuk-form-group">
            <label className="govuk-label" htmlFor="addressLine2">
              Address line 2 <span className="govuk-hint govuk-!-display-inline">(optional)</span>
            </label>
            <input
              className="govuk-input"
              id="addressLine2"
              name="addressLine2"
              type="text"
              autoComplete="address-line2"
              value={values.addressLine2}
              onChange={handleChange}
            />
          </div>

          {/* Town or city */}
          <div className={`govuk-form-group${errors.town ? ' govuk-form-group--error' : ''}`}>
            <label className="govuk-label" htmlFor="town">
              Town or city
            </label>
            {errors.town && (
              <p className="govuk-error-message" id="town-error">
                <span className="govuk-visually-hidden">Error:</span> {errors.town}
              </p>
            )}
            <input
              className={`govuk-input govuk-!-width-two-thirds${errors.town ? ' govuk-input--error' : ''}`}
              id="town"
              name="town"
              type="text"
              autoComplete="address-level2"
              value={values.town}
              onChange={handleChange}
              aria-describedby={errors.town ? 'town-error' : undefined}
            />
          </div>

          {/* County */}
          <div className="govuk-form-group">
            <label className="govuk-label" htmlFor="county">
              County <span className="govuk-hint govuk-!-display-inline">(optional)</span>
            </label>
            <input
              className="govuk-input govuk-!-width-two-thirds"
              id="county"
              name="county"
              type="text"
              value={values.county}
              onChange={handleChange}
            />
          </div>

          {/* Postcode */}
          <div className={`govuk-form-group${errors.postcode ? ' govuk-form-group--error' : ''}`}>
            <label className="govuk-label" htmlFor="postcode">
              Postcode
            </label>
            {errors.postcode && (
              <p className="govuk-error-message" id="postcode-error">
                <span className="govuk-visually-hidden">Error:</span> {errors.postcode}
              </p>
            )}
            <input
              className={`govuk-input govuk-input--width-10${errors.postcode ? ' govuk-input--error' : ''}`}
              id="postcode"
              name="postcode"
              type="text"
              autoComplete="postal-code"
              value={values.postcode}
              onChange={handleChange}
              aria-describedby={errors.postcode ? 'postcode-error' : undefined}
            />
          </div>
        </fieldset>

        <button className="govuk-button" type="submit">
          Continue
        </button>
      </form>
    </Layout>
  )
}
