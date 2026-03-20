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

export default function SelectPage() {
  return (
    <Layout backLink>
      <h1 className="govuk-heading-xl app-page-heading">
        Select
        <a className="govuk-link govuk-!-font-size-19 govuk-!-font-weight-regular" href="https://design-system.service.gov.uk/components/select/" target="_blank" rel="noreferrer">Select reference (gov.uk)</a>
      </h1>

      <hr className="govuk-section-break govuk-section-break--l govuk-section-break--visible" />

      {/* Default */}
      <Section title="Default" description="A basic select dropdown with a visible label.">
        <div className="govuk-form-group">
          <label className="govuk-label" htmlFor="sort-by">
            Sort by
          </label>
          <select className="govuk-select" id="sort-by" name="sort-by">
            <option value="published">Recently published</option>
            <option value="updated">Recently updated</option>
            <option value="views">Most views</option>
            <option value="comments">Most comments</option>
          </select>
        </div>
      </Section>

      {/* With hint */}
      <Section title="With hint" description="Add hint text to help users understand their options.">
        <div className="govuk-form-group">
          <label className="govuk-label" htmlFor="location">
            Choose location
          </label>
          <div id="location-hint" className="govuk-hint">
            This can be different to where you went before.
          </div>
          <select className="govuk-select" id="location" name="location" aria-describedby="location-hint">
            <option value="">Choose a location</option>
            <option value="east-midlands">East Midlands</option>
            <option value="east-england">East of England</option>
            <option value="london">London</option>
            <option value="north-east">North East</option>
            <option value="north-west">North West</option>
            <option value="south-east">South East</option>
            <option value="south-west">South West</option>
            <option value="west-midlands">West Midlands</option>
            <option value="yorkshire">Yorkshire and the Humber</option>
          </select>
        </div>
      </Section>

      {/* With error */}
      <Section title="With error">
        <div className="govuk-form-group govuk-form-group--error">
          <label className="govuk-label" htmlFor="location-error">
            Choose location
          </label>
          <div id="location-error-hint" className="govuk-hint">
            This can be different to where you went before.
          </div>
          <p id="location-error-message" className="govuk-error-message">
            <span className="govuk-visually-hidden">Error:</span>
            Select a location
          </p>
          <select
            className="govuk-select govuk-select--error"
            id="location-error"
            name="location-error"
            aria-describedby="location-error-hint location-error-message"
          >
            <option value="">Choose a location</option>
            <option value="east-midlands">East Midlands</option>
            <option value="london">London</option>
            <option value="south-east">South East</option>
          </select>
        </div>
      </Section>

      <IssueTable issues={[]} />
    </Layout>
  )
}
