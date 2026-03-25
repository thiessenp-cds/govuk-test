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

export default function FileUploadPage() {
  return (
    <Layout backLink>
      <h1 className="govuk-heading-xl app-page-heading">
        File upload
        <a className="govuk-link govuk-!-font-size-19 govuk-!-font-weight-regular" href="https://design-system.service.gov.uk/components/file-upload/" target="_blank" rel="noreferrer">File upload reference (gov.uk)</a>
      </h1>

      <hr className="govuk-section-break govuk-section-break--l govuk-section-break--visible" />

      {/* Default */}
      <Section title="Default" description="A basic file upload input with label.">
        <div className="govuk-form-group">
          <label className="govuk-label" htmlFor="file-upload-1">
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

      {/* Required */}
      <Section title="Required" description="Use the required attribute to prevent form submission without a file selection.">
        <form noValidate onSubmit={(e) => { e.preventDefault(); alert('Form submitted!') }}>
          <div className="govuk-form-group">
            <label className="govuk-label" htmlFor="required-file">
              Upload a file
            </label>
            <input
              className="govuk-file-upload"
              id="required-file"
              name="required-file"
              type="file"
              required
            />
          </div>
          <button type="submit" className="govuk-button">Continue</button>
        </form>
      </Section>

      {/* With error */}
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

      {/* With hint */}
      <Section title="With hint" description="Use hint text to tell users what file types are accepted.">
        <div className="govuk-form-group">
          <label className="govuk-label" htmlFor="file-upload-hint">
            Upload your document
          </label>
          <div id="file-upload-hint-text" className="govuk-hint">
            The file must be a PDF, JPG or PNG and smaller than 2MB.
          </div>
          <input
            className="govuk-file-upload"
            id="file-upload-hint"
            name="file-upload-hint"
            type="file"
            accept=".pdf,.jpg,.jpeg,.png"
            aria-describedby="file-upload-hint-text"
          />
        </div>
      </Section>

      <IssueTable issues={[]} />
    </Layout>
  )
}
