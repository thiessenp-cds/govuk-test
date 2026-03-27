import { Layout } from '../App'
import IssueTable from '../components/IssueTable'
import { Section } from '../components/Section'
import { useGovukInit } from '../hooks/useGovukInit'

export default function PasswordInputPage() {
  useGovukInit()

  return (
    <Layout backLink>
      <h1 className="govuk-heading-xl app-page-heading">
        Password input
        <a className="govuk-link govuk-!-font-size-19 govuk-!-font-weight-regular" href="https://design-system.service.gov.uk/components/password-input/" target="_blank" rel="noreferrer">Password input reference (gov.uk)</a>
      </h1>

      <hr className="govuk-section-break govuk-section-break--l govuk-section-break--visible" />

      <Section
        title="Default"
      >
        <div
          className="govuk-form-group"
          data-module="govuk-password-input"
        >
          <label className="govuk-label" htmlFor="password">
            Password
          </label>
          <div className="govuk-input__wrapper govuk-password-input__wrapper">
            <input
              className="govuk-input govuk-password-input__input govuk-js-password-input-input"
              id="password"
              name="password"
              type="password"
              autoComplete="current-password"
              spellCheck="false"
              autoCapitalize="none"
            />
            <button
              type="button"
              className="govuk-button govuk-button--secondary govuk-password-input__toggle govuk-js-password-input-toggle"
              aria-controls="password"
              aria-label="Show password"
            >
              Show
            </button>
          </div>
        </div>
      </Section>

      <Section
        title="Required"
      >
        <div
          className="govuk-form-group"
          data-module="govuk-password-input"
        >
          <label className="govuk-label" htmlFor="required-password">
            Password
          </label>
          <div className="govuk-input__wrapper govuk-password-input__wrapper">
            <input
              className="govuk-input govuk-password-input__input govuk-js-password-input-input"
              id="required-password"
              name="required-password"
              type="password"
              autoComplete="current-password"
              spellCheck="false"
              autoCapitalize="none"
              required
            />
            <button
              type="button"
              className="govuk-button govuk-button--secondary govuk-password-input__toggle govuk-js-password-input-toggle"
              aria-controls="required-password"
              aria-label="Show password"
            >
              Show
            </button>
          </div>
        </div>
      </Section>

      <Section title="With error">
        <div
          className="govuk-form-group govuk-form-group--error"
          data-module="govuk-password-input"
        >
          <label className="govuk-label" htmlFor="password-error">
            Password
          </label>
          <p id="password-error-message" className="govuk-error-message">
            <span className="govuk-visually-hidden">Error:</span>
            Enter a password
          </p>
          <div className="govuk-input__wrapper govuk-password-input__wrapper">
            <input
              className="govuk-input govuk-password-input__input govuk-js-password-input-input govuk-input--error"
              id="password-error"
              name="password-error"
              type="password"
              autoComplete="current-password"
              spellCheck="false"
              autoCapitalize="none"
              aria-describedby="password-error-message"
            />
            <button
              type="button"
              className="govuk-button govuk-button--secondary govuk-password-input__toggle govuk-js-password-input-toggle"
              aria-controls="password-error"
              aria-label="Show password"
            >
              Show
            </button>
          </div>
        </div>
      </Section>

      <Section
        title="Create a new password"
      >
        <div
          className="govuk-form-group"
          data-module="govuk-password-input"
        >
          <label className="govuk-label" htmlFor="new-password">
            Create a password
          </label>
          <div id="new-password-hint" className="govuk-hint">
            Your password must be 8 or more characters.
          </div>
          <div className="govuk-input__wrapper govuk-password-input__wrapper">
            <input
              className="govuk-input govuk-password-input__input govuk-js-password-input-input"
              id="new-password"
              name="new-password"
              type="password"
              autoComplete="new-password"
              spellCheck="false"
              autoCapitalize="none"
              aria-describedby="new-password-hint"
            />
            <button
              type="button"
              className="govuk-button govuk-button--secondary govuk-password-input__toggle govuk-js-password-input-toggle"
              aria-controls="new-password"
              aria-label="Show password"
            >
              Show
            </button>
          </div>
        </div>
      </Section>

      <IssueTable issues={[
        {
          combo: 'Some browsers + password managers',
          description: 'Browsers or password managers may add their own show/hide button, causing duplicate controls. govuk-frontend attempts to hide these but it is not always possible.',
        },
      ]} />
    </Layout>
  )
}
