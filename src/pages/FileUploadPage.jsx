import { Layout } from '../App'
import IssueTable from '../components/IssueTable'
import { Section } from '../components/Section';


export default function FileUploadPage() {
  return (
    <Layout backLink>
      <h1 className="govuk-heading-xl app-page-heading">
        File upload
        <a className="govuk-link govuk-!-font-size-19 govuk-!-font-weight-regular" href="https://design-system.service.gov.uk/components/file-upload/" target="_blank" rel="noreferrer">File upload reference (gov.uk)</a>
      </h1>

      <hr className="govuk-section-break govuk-section-break--l govuk-section-break--visible" />

      <Section title="Default">
        <div className="govuk-form-group">
          <label className="govuk-label" htmlFor="file-upload-s">
            Upload a file
          </label>
          <input
            className="govuk-file-upload"
            id="file-upload-1"
            name="file-upload-1"
            type="file"
          />
        </div>
      </Section>

      <Section title="With hint" description="Use hint text to tell users what file types are accepted.">
        <div className="govuk-form-group">
          <label className="govuk-label" htmlFor="file-upload-hint">
            Upload your document
          </label>
          <div id="file-upload-hint-text" className="govuk-hint">
            The file must be a DOC, TXT or PDF and smaller than 4MB. (could add note about required here)
          </div>
          <input
            className="govuk-file-upload"
            id="file-upload-hint"
            name="file-upload-hint"
            type="file"
            accept=".pdf,.jpg,.jpeg,.png"
            aria-describedby="file-upload-hint-text"
            required
          />
        </div>
      </Section>

      <Section title="With error">
        <div className="govuk-form-group govuk-form-group--error">
          <label className="govuk-label" htmlFor="file-upload-error">
            Upload a file
          </label>
          <div id="file-upload-error-hint" className="govuk-hint">
            The CSV must be smaller than 2MB.
          </div>
          <p id="file-upload-error-message" className="govuk-error-message">
            <span className="govuk-visually-hidden">Error:</span>
            The CSV must be smaller than 2MB
          </p>
          <input
            className="govuk-file-upload govuk-file-upload--error"
            id="file-upload-error"
            name="file-upload-error"
            type="file"
            aria-describedby="file-upload-error-hint file-upload-error-message"
          />
        </div>
      </Section>

      <IssueTable issues={[]} />
    </Layout>
  )
}
