import { Layout } from '../App'
import IssueTable from '../components/IssueTable'
import { Section } from '../components/Section'
import { useGovukInit } from '../hooks/useGovukInit'

export default function CharacterCountPage() {
  useGovukInit()

  return (
    <Layout backLink>
      <h1 className="govuk-heading-xl app-page-heading">
        Character count
        <a className="govuk-link govuk-!-font-size-19 govuk-!-font-weight-regular" href="https://design-system.service.gov.uk/components/character-count/" target="_blank" rel="noreferrer">Character count reference (gov.uk)</a>
      </h1>

      <hr className="govuk-section-break govuk-section-break--l govuk-section-break--visible" />

      <Section
        title="Default"
      >
        <div
          className="govuk-character-count"
          data-module="govuk-character-count"
          data-maxlength={200}
        >
          <div className="govuk-form-group">
            <label className="govuk-label" htmlFor="more-detail-cc">
              Can you provide more detail?
            </label>
            <div id="more-detail-cc-hint" className="govuk-hint">
              Do not include personal or financial information like your National Insurance number or credit card details.
            </div>
            <textarea
              className="govuk-textarea govuk-js-character-count"
              id="more-detail-cc"
              name="more-detail-cc"
              rows={5}
              aria-describedby="more-detail-cc-hint more-detail-cc-info"
            />
          </div>
          <div
            id="more-detail-cc-info"
            className="govuk-hint govuk-character-count__message"
          >
            You can enter up to 200 characters
          </div>
        </div>
      </Section>

      <Section
        title="Required"
      >
        <div
          className="govuk-character-count"
          data-module="govuk-character-count"
          data-maxlength={200}
        >
          <div className="govuk-form-group">
            <label className="govuk-label" htmlFor="required-detail-cc">
              Can you provide more detail?
            </label>
            <textarea
              className="govuk-textarea govuk-js-character-count"
              id="required-detail-cc"
              name="required-detail-cc"
              rows={5}
              aria-describedby="required-detail-cc-info"
              required
            />
          </div>
          <div
            id="required-detail-cc-info"
            className="govuk-hint govuk-character-count__message"
          >
            You can enter up to 200 characters
          </div>
        </div>
      </Section>

      <Section title="With error">
        <div
          className="govuk-character-count"
          data-module="govuk-character-count"
          data-maxlength={200}
        >
          <div className="govuk-form-group govuk-form-group--error">
            <label className="govuk-label" htmlFor="more-detail-err">
              Can you provide more detail?
            </label>
            <div id="more-detail-err-hint" className="govuk-hint">
              Do not include personal or financial information.
            </div>
            <p id="more-detail-err-error" className="govuk-error-message">
              <span className="govuk-visually-hidden">Error:</span>
              Enter more detail
            </p>
            <textarea
              className="govuk-textarea govuk-js-character-count govuk-textarea--error"
              id="more-detail-err"
              name="more-detail-err"
              rows={5}
              aria-describedby="more-detail-err-hint more-detail-err-error more-detail-err-info"
            />
          </div>
          <div
            id="more-detail-err-info"
            className="govuk-hint govuk-character-count__message"
          >
            You can enter up to 200 characters
          </div>
        </div>
      </Section>

      <Section
        title="Disabled"
      >
        <div
          className="govuk-character-count"
          data-module="govuk-character-count"
          data-maxlength={200}
        >
          <div className="govuk-form-group">
            <label className="govuk-label" htmlFor="disabled-detail-cc">
              More detail (disabled)
            </label>
            <textarea
              className="govuk-textarea govuk-js-character-count"
              id="disabled-detail-cc"
              name="disabled-detail-cc"
              rows={5}
              disabled
              aria-disabled="true"
              value="Cannot edit this"
              readOnly
            />
          </div>
          <div
            id="disabled-detail-cc-info"
            className="govuk-hint govuk-character-count__message"
          >
            You can enter up to 200 characters
          </div>
        </div>
      </Section>

      <Section
        title="Word count"
      >
        <div
          className="govuk-character-count"
          data-module="govuk-character-count"
          data-maxwords={150}
        >
          <div className="govuk-form-group">
            <label className="govuk-label" htmlFor="word-count">
              Describe what you saw
            </label>
            <div id="word-count-hint" className="govuk-hint">
              You can use up to 150 words.
            </div>
            <textarea
              className="govuk-textarea govuk-js-character-count"
              id="word-count"
              name="word-count"
              rows={5}
              aria-describedby="word-count-hint word-count-info"
            />
          </div>
          <div
            id="word-count-info"
            className="govuk-hint govuk-character-count__message"
          >
            You can enter up to 150 words
          </div>
        </div>
      </Section>

      <Section
        title="With threshold"
      >
        <div
          className="govuk-character-count"
          data-module="govuk-character-count"
          data-maxlength={100}
          data-threshold={75}
        >
          <div className="govuk-form-group">
            <label className="govuk-label" htmlFor="threshold-count">
              Enter a short description
            </label>
            <div id="threshold-count-hint" className="govuk-hint">
              The character count only appears after you&apos;ve typed 75% of the limit.
            </div>
            <textarea
              className="govuk-textarea govuk-js-character-count"
              id="threshold-count"
              name="threshold-count"
              rows={4}
              aria-describedby="threshold-count-hint threshold-count-info"
            />
          </div>
          <div
            id="threshold-count-info"
            className="govuk-hint govuk-character-count__message"
          >
            You can enter up to 100 characters
          </div>
        </div>
      </Section>

      <IssueTable issues={[]} />
    </Layout>
  )
}
