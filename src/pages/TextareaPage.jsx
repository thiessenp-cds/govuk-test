import { Layout } from '../App'
import IssueTable from '../components/IssueTable'
import { Section } from '../components/Section'

export default function TextareaPage() {
  return (
    <Layout backLink>
      <h1 className="govuk-heading-xl app-page-heading">
        Textarea
        <a className="govuk-link govuk-!-font-size-19 govuk-!-font-weight-regular" href="https://design-system.service.gov.uk/components/textarea/" target="_blank" rel="noreferrer">Textarea reference (gov.uk)</a>
      </h1>

      <hr className="govuk-section-break govuk-section-break--l govuk-section-break--visible" />

      <Section title="Default">
        <div className="govuk-form-group">
          <label className="govuk-label" htmlFor="more-detail">
            Can you provide more detail?
          </label>
          <textarea
            className="govuk-textarea"
            id="more-detail"
            name="more-detail"
            rows={5}
          />
        </div>
      </Section>

      <Section title="Required">
        <div className="govuk-form-group">
          <label className="govuk-label" htmlFor="required-detail">
            Can you provide more detail?
          </label>
          <div id="more-detail-hint" className="govuk-hint">
            Do not include personal or financial information, like your National Insurance number or credit card details. (could add a note about required here)
          </div>
          <textarea
            className="govuk-textarea"
            id="required-detail"
            name="required-detail"
            aria-describedby="more-detail-hint"
            rows={5}
            required
          />
        </div>
      </Section>

      <Section title="With error">
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

      <Section title="With specified rows (height)">
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
