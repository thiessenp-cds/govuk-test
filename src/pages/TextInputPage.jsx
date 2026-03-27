import { Layout } from '../App'
import IssueTable from '../components/IssueTable'
import { Section } from '../components/Section'

export default function TextInputPage() {

  return (
    <Layout backLink>
      <h1 className="govuk-heading-xl app-page-heading">
        Text input
        <a className="govuk-link govuk-!-font-size-19 govuk-!-font-weight-regular" href="https://design-system.service.gov.uk/components/text-input/" target="_blank" rel="noreferrer">Text input reference (gov.uk)</a>
      </h1>

      <hr className="govuk-section-break govuk-section-break--l govuk-section-break--visible" />

      <Section
        title="Default"
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

      <Section
        title="Required"
      >
        <div className="govuk-form-group">
          <label className="govuk-label" htmlFor="required-full-name">
            Full name
          </label>
           <div id="event-name-hint" className="govuk-hint">
            The name you'll use on promotional material. (could add a note about required here)
          </div>
          <input
            className="govuk-input"
            id="required-full-name"
            name="required-full-name"
            type="text"
            aria-describedby="required-full-name"
            autoComplete="name"
            required
          />
        </div>
      </Section>

      <Section
        title="With error"
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

      <Section
        title="Disabled"
      >
        <div className="govuk-form-group">
          <label className="govuk-label" htmlFor="disabled-full-name">
            Full name
          </label>
          <input
            className="govuk-input"
            id="disabled-full-name"
            name="disabled-full-name"
            type="text"
            autoComplete="name"
            disabled
            value="Cannot edit this"
            aria-disabled="true"
          />
        </div>
      </Section>

      <Section
        title="Fixed width inputs"
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

      <Section
        title="With prefix"
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

      <Section
        title="With suffix"
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

      <Section
        title="With prefix and suffix"
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
