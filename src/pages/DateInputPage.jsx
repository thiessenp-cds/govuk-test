import { Layout } from '../App'
import IssueTable from '../components/IssueTable'

function Section({ title, description, children }) {
  return (
    <section className="govuk-!-margin-bottom-9">
      <h2 className="govuk-heading-l">{title}</h2>
      {description && <p className="govuk-body">{description}</p>}
      <div className="govuk-!-margin-top-4">{children}</div>
    </section>
  )
}

function DateFields({ id, legend, hint, errorMessage, errorFields = [] }) {
  const hasError = errorMessage != null

  return (
    <div className={`govuk-form-group${hasError ? ' govuk-form-group--error' : ''}`}>
      <fieldset
        className="govuk-fieldset"
        role="group"
        aria-describedby={[hint && `${id}-hint`, hasError && `${id}-error`].filter(Boolean).join(' ')}
      >
        <legend className="govuk-fieldset__legend govuk-fieldset__legend--l">
          <h2 className="govuk-fieldset__heading">{legend}</h2>
        </legend>
        {hint && <div id={`${id}-hint`} className="govuk-hint">{hint}</div>}
        {hasError && (
          <p id={`${id}-error`} className="govuk-error-message">
            <span className="govuk-visually-hidden">Error:</span> {errorMessage}
          </p>
        )}
        <div className="govuk-date-input" id={id}>
          {[
            { label: 'Day', name: `${id}-day`, width: '2', autocomplete: null },
            { label: 'Month', name: `${id}-month`, width: '2', autocomplete: null },
            { label: 'Year', name: `${id}-year`, width: '4', autocomplete: null },
          ].map(({ label, name, width }) => {
            const isError = errorFields.includes(label.toLowerCase())
            return (
              <div className="govuk-date-input__item" key={label}>
                <div className={`govuk-form-group${isError ? ' govuk-form-group--error' : ''}`}>
                  <label className="govuk-label govuk-date-input__label" htmlFor={name}>
                    {label}
                  </label>
                  <input
                    className={`govuk-input govuk-date-input__input govuk-input--width-${width}${isError ? ' govuk-input--error' : ''}`}
                    id={name}
                    name={name}
                    type="text"
                    inputMode="numeric"
                  />
                </div>
              </div>
            )
          })}
        </div>
      </fieldset>
    </div>
  )
}

export default function DateInputPage() {
  return (
    <Layout backLink>
      <h1 className="govuk-heading-xl app-page-heading">
        Date input
        <a className="govuk-link govuk-!-font-size-19 govuk-!-font-weight-regular" href="https://design-system.service.gov.uk/components/date-input/" target="_blank" rel="noreferrer">Date input reference (gov.uk)</a>
      </h1>

      <hr className="govuk-section-break govuk-section-break--l govuk-section-break--visible" />

      <Section title="Default" description="Three fields for day, month, year grouped in a fieldset.">
        <DateFields
          id="passport-issued"
          legend="When was your passport issued?"
          hint="For example, 27 3 2007"
        />
      </Section>

      <Section title="Date of birth (with autocomplete)" description="Use autocomplete attributes for date of birth to enable browser autofill.">
        <div className="govuk-form-group">
          <fieldset className="govuk-fieldset" role="group" aria-describedby="dob-hint">
            <legend className="govuk-fieldset__legend govuk-fieldset__legend--l">
              <h2 className="govuk-fieldset__heading">What is your date of birth?</h2>
            </legend>
            <div id="dob-hint" className="govuk-hint">For example, 31 3 1980</div>
            <div className="govuk-date-input" id="dob">
              <div className="govuk-date-input__item">
                <div className="govuk-form-group">
                  <label className="govuk-label govuk-date-input__label" htmlFor="dob-day">Day</label>
                  <input className="govuk-input govuk-date-input__input govuk-input--width-2" id="dob-day" name="dob-day" type="text" autoComplete="bday-day" inputMode="numeric" />
                </div>
              </div>
              <div className="govuk-date-input__item">
                <div className="govuk-form-group">
                  <label className="govuk-label govuk-date-input__label" htmlFor="dob-month">Month</label>
                  <input className="govuk-input govuk-date-input__input govuk-input--width-2" id="dob-month" name="dob-month" type="text" autoComplete="bday-month" inputMode="numeric" />
                </div>
              </div>
              <div className="govuk-date-input__item">
                <div className="govuk-form-group">
                  <label className="govuk-label govuk-date-input__label" htmlFor="dob-year">Year</label>
                  <input className="govuk-input govuk-date-input__input govuk-input--width-4" id="dob-year" name="dob-year" type="text" autoComplete="bday-year" inputMode="numeric" />
                </div>
              </div>
            </div>
          </fieldset>
        </div>
      </Section>

      <Section title="With error (whole date)" description="Highlight all fields when the whole date is incorrect.">
        <DateFields
          id="passport-issued-err"
          legend="When was your passport issued?"
          hint="For example, 27 3 2007"
          errorMessage="Enter the date your passport was issued"
          errorFields={['day', 'month', 'year']}
        />
      </Section>

      <Section title="With error (single field)" description="Highlight only the field containing the error.">
        <DateFields
          id="passport-issued-err2"
          legend="When was your passport issued?"
          hint="For example, 27 3 2007"
          errorMessage="Date of passport issue must include a year"
          errorFields={['year']}
        />
      </Section>

      <IssueTable issues={[]} />
    </Layout>
  )
}
