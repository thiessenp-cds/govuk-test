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

export default function TextInputPage() {
  return (
    <Layout backLink>
      <h1 className="govuk-heading-xl app-page-heading">
        Text input
        <a className="govuk-link govuk-!-font-size-19 govuk-!-font-weight-regular" href="https://design-system.service.gov.uk/components/text-input/" target="_blank" rel="noreferrer">Text input reference (gov.uk)</a>
      </h1>

      <hr className="govuk-section-break govuk-section-break--l govuk-section-break--visible" />

      {/* Default */}
      <Section
        title="Default"
        description="A basic text input with a visible label."
      >
        <div className="govuk-form-group">
          <label className="govuk-label" htmlFor="full-name">
            Full name
          </label>
          <input
            className="govuk-input"
            id="full-name"
            name="full-name"
            type="text"
            autoComplete="name"
          />
        </div>
      </Section>

      {/* With hint text */}
      <Section
        title="With hint text"
        description="Use hint text for help that's relevant to the majority of users."
      >
        <div className="govuk-form-group">
          <label className="govuk-label" htmlFor="event-name">
            What is the name of the event?
          </label>
          <div id="event-name-hint" className="govuk-hint">
            The name you&apos;ll use on promotional material.
          </div>
          <input
            className="govuk-input"
            id="event-name"
            name="event-name"
            type="text"
            aria-describedby="event-name-hint"
          />
        </div>
      </Section>

      {/* With error */}
      <Section
        title="With error"
        description="Follow the error message guidance when validating text inputs."
      >
        <div className="govuk-form-group govuk-form-group--error">
          <label className="govuk-label" htmlFor="name-error">
            Full name
          </label>
          <div id="name-error-hint" className="govuk-hint">
            As shown on your birth certificate or passport.
          </div>
          <p id="name-error-message" className="govuk-error-message">
            <span className="govuk-visually-hidden">Error:</span>
            Enter your full name
          </p>
          <input
            className="govuk-input govuk-input--error"
            id="name-error"
            name="name-error"
            type="text"
            aria-describedby="name-error-hint name-error-message"
          />
        </div>
      </Section>

      {/* Fixed width inputs */}
      <Section
        title="Fixed width inputs"
        description="Use fixed width inputs for content with a specific, known length."
      >
        {[
          { width: '2', label: '2 characters', id: 'input-width-2' },
          { width: '3', label: '3 characters', id: 'input-width-3' },
          { width: '4', label: '4 characters', id: 'input-width-4' },
          { width: '5', label: '5 characters', id: 'input-width-5' },
          { width: '10', label: '10 characters', id: 'input-width-10' },
          { width: '20', label: '20 characters', id: 'input-width-20' },
        ].map(({ width, label, id }) => (
          <div className="govuk-form-group govuk-!-margin-bottom-4" key={id}>
            <label className="govuk-label" htmlFor={id}>
              {label}
            </label>
            <input
              className={`govuk-input govuk-input--width-${width}`}
              id={id}
              name={id}
              type="text"
            />
          </div>
        ))}
      </Section>

      {/* With prefix */}
      <Section
        title="With prefix"
        description="Use prefixes to help users enter things like currencies."
      >
        <div className="govuk-form-group">
          <label className="govuk-label" htmlFor="cost-prefix">
            Cost per item, in pounds
          </label>
          <div className="govuk-input__wrapper">
            <div className="govuk-input__prefix" aria-hidden="true">
              £
            </div>
            <input
              className="govuk-input govuk-input--width-5"
              id="cost-prefix"
              name="cost-prefix"
              type="text"
              spellCheck="false"
              inputMode="numeric"
            />
          </div>
        </div>
      </Section>

      {/* With suffix */}
      <Section
        title="With suffix"
        description="Use suffixes to help users enter things like measurements."
      >
        <div className="govuk-form-group">
          <label className="govuk-label" htmlFor="weight">
            Weight, in kilograms
          </label>
          <div className="govuk-input__wrapper">
            <input
              className="govuk-input govuk-input--width-5"
              id="weight"
              name="weight"
              type="text"
              spellCheck="false"
              inputMode="numeric"
            />
            <div className="govuk-input__suffix" aria-hidden="true">
              kg
            </div>
          </div>
        </div>
      </Section>

      {/* With prefix and suffix */}
      <Section
        title="With prefix and suffix"
        description="Combine prefix and suffix when the input has both a unit symbol and qualifier."
      >
        <div className="govuk-form-group">
          <label className="govuk-label" htmlFor="cost-per-item">
            Cost per item
          </label>
          <div className="govuk-input__wrapper">
            <div className="govuk-input__prefix" aria-hidden="true">
              £
            </div>
            <input
              className="govuk-input govuk-input--width-5"
              id="cost-per-item"
              name="cost-per-item"
              type="text"
              spellCheck="false"
              inputMode="numeric"
            />
            <div className="govuk-input__suffix" aria-hidden="true">
              per item
            </div>
          </div>
        </div>
      </Section>

      <IssueTable issues={[]} />
    </Layout>
  )
}
