import { Layout } from '../App'
import IssueTable from '../components/IssueTable'
import { Section } from '../components/Section';
import { useDocumentTitle } from '../hooks/useDocumentTitle'

export default function SelectPage() {
  useDocumentTitle('Select - My gov.uk form component test')
  return (
    <Layout backLink>
      <h1 className="govuk-heading-xl app-page-heading">
        Select
        <a className="govuk-link govuk-!-font-size-19 govuk-!-font-weight-regular" href="https://design-system.service.gov.uk/components/select/" target="_blank" rel="noreferrer">Select reference (gov.uk)</a>
      </h1>

      <hr className="govuk-section-break govuk-section-break--l govuk-section-break--visible" />

      <Section title="Default">
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

      <Section title="Required">
        <div className="govuk-form-group">
          <label className="govuk-label" htmlFor="required-location">
            Choose location
          </label>
          <div id="location-hint" className="govuk-hint">
            This can be different to where you went before. (could add note about required field)
          </div>
          <select className="govuk-select" id="required-location" name="required-location" aria-describedby="location-hint" required>
            <option value="">Choose a location</option>
            <option value="east-midlands">East Midlands</option>
            <option value="east-england">East of England</option>
            <option value="london">London</option>
            <option value="north-east">North East</option>
            <option value="south-east">South East</option>
          </select>
        </div>
      </Section>


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

      <Section title="Disabled">
        <div className="govuk-form-group">
          <label className="govuk-label" htmlFor="disabled-select">
            Choose location
          </label>
          <select
            className="govuk-select"
            id="disabled-select"
            name="disabled-select"
            disabled
            aria-disabled="true"
            value="east-midlands"
            readOnly
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
