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

export default function TextareaPage() {
  return (
    <Layout backLink>
      <h1 className="govuk-heading-xl app-page-heading">
        Textarea
        <a className="govuk-link govuk-!-font-size-19 govuk-!-font-weight-regular" href="https://design-system.service.gov.uk/components/textarea/" target="_blank" rel="noreferrer">Textarea reference (gov.uk)</a>
      </h1>

      <hr className="govuk-section-break govuk-section-break--l govuk-section-break--visible" />

      {/* Default */}
      <Section title="Default" description="A basic textarea with a visible label.">
        <div className="govuk-form-group">
          <label className="govuk-label" htmlFor="more-detail">
            Can you provide more detail?
          </label>
          <div id="more-detail-hint" className="govuk-hint">
            Do not include personal or financial information, like your National Insurance number or credit card details.
          </div>
          <textarea
            className="govuk-textarea"
            id="more-detail"
            name="more-detail"
            rows={5}
            aria-describedby="more-detail-hint"
          />
        </div>
      </Section>

      {/* Required */}
      <Section title="Required" description="Use the required attribute to prevent form submission without content.">
        <form noValidate onSubmit={(e) => { e.preventDefault(); alert('Form submitted!') }}>
          <div className="govuk-form-group">
            <label className="govuk-label" htmlFor="required-detail">
              Can you provide more detail?
            </label>
            <textarea
              className="govuk-textarea"
              id="required-detail"
              name="required-detail"
              rows={5}
              required
            />
          </div>
          <button type="submit" className="govuk-button">Continue</button>
        </form>
      </Section>

      {/* With error */}
      <Section title="With error" description="Style error messages above the field.">
        <div className="govuk-form-group govuk-form-group--error">
          <label className="govuk-label" htmlFor="textarea-error">
            Can you provide more detail?
          </label>
          <div id="textarea-error-hint" className="govuk-hint">
            Do not include personal or financial information.
          </div>
          <p id="textarea-error-message" className="govuk-error-message">
            <span className="govuk-visually-hidden">Error:</span>
            Enter more detail
          </p>
          <textarea
            className="govuk-textarea govuk-textarea--error"
            id="textarea-error"
            name="textarea-error"
            rows={5}
            aria-describedby="textarea-error-hint textarea-error-message"
          />
        </div>
      </Section>

      {/* Specifying rows */}
      <Section title="With specified rows" description="Make the height proportional to the amount of text expected.">
        <div className="govuk-form-group">
          <label className="govuk-label" htmlFor="job-description">
            Describe your work history
          </label>
          <textarea
            className="govuk-textarea"
            id="job-description"
            name="job-description"
            rows={8}
          />
        </div>
      </Section>

      <IssueTable issues={[]} />
    </Layout>
  )
}
