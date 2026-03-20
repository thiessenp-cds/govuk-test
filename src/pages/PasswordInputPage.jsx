import { Layout } from '../App'
import IssueTable from '../components/IssueTable'
import { useGovukInit } from '../hooks/useGovukInit'

function Section({ title, description, children }) {
  return (
    <section className="govuk-!-margin-bottom-9">
      <h2 className="govuk-heading-l">{title}</h2>
      {description && <p className="govuk-body">{description}</p>}
      <div className="govuk-!-margin-top-4">{children}</div>
    </section>
  )
}

export default function PasswordInputPage() {
  useGovukInit()

  return (
    <Layout backLink>
      <h1 className="govuk-heading-xl app-page-heading">
        Password input
        <a className="govuk-link govuk-!-font-size-19 govuk-!-font-weight-regular" href="https://design-system.service.gov.uk/components/password-input/" target="_blank" rel="noreferrer">Password input reference (gov.uk)</a>
      </h1>

      <hr className="govuk-section-break govuk-section-break--l govuk-section-break--visible" />

      {/* Default */}
      <Section
        title="Default"
        description="A password input with a show/hide toggle. Requires JavaScript (govuk-frontend initAll)."
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

      {/* New password */}
      <Section
        title="Create a new password"
        description="Use autocomplete='new-password' when asking users to create a password."
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

      {/* With error */}
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

      <IssueTable issues={[
        {
          combo: 'Some browsers + password managers',
          description: 'Browsers or password managers may add their own show/hide button, causing duplicate controls. govuk-frontend attempts to hide these but it is not always possible.',
        },
      ]} />
    </Layout>
  )
}
