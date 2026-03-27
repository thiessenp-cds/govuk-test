import { Layout } from '../App'
import IssueTable from '../components/IssueTable'
import { Section } from '../components/Section';

export default function CheckboxesPage() {
  return (
    <Layout backLink>
      <h1 className="govuk-heading-xl app-page-heading">
        Checkboxes
        <a className="govuk-link govuk-!-font-size-19 govuk-!-font-weight-regular" href="https://design-system.service.gov.uk/components/checkboxes/" target="_blank" rel="noreferrer">Checkboxes reference (gov.uk)</a>
      </h1>

      <hr className="govuk-section-break govuk-section-break--l govuk-section-break--visible" />

      <Section title="Default">
        <div className="govuk-form-group">
          <fieldset className="govuk-fieldset">
            <legend className="govuk-fieldset__legend govuk-fieldset__legend--s">
              <h2 className="govuk-fieldset__heading">Which types of waste do you transport?</h2>
            </legend>
            <div id="waste-hint" className="govuk-hint">Select all that apply.</div>
            <div className="govuk-checkboxes" data-module="govuk-checkboxes">
              {[
                { value: 'carcasses', label: 'Waste from animal carcasses' },
                { value: 'mines', label: 'Waste from mines or quarries' },
                { value: 'farm', label: 'Farm or agricultural waste' },
              ].map(({ value, label }) => (
                <div className="govuk-checkboxes__item" key={value}>
                  <input
                    className="govuk-checkboxes__input"
                    id={`waste-${value}`}
                    name="waste"
                    type="checkbox"
                    value={value}
                  />
                  <label className="govuk-label govuk-checkboxes__label" htmlFor={`waste-${value}`}>
                    {label}
                  </label>
                </div>
              ))}
            </div>
          </fieldset>
        </div>
      </Section>

      <Section title="Required">
        <div className="govuk-form-group">
          <div className="govuk-checkboxes" data-module="govuk-checkboxes">
            <div className="govuk-checkboxes__item">
              <input
                className="govuk-checkboxes__input"
                id="terms-agree"
                name="terms-agree"
                type="checkbox"
                value="agreed"
                required
              />
              <label className="govuk-label govuk-checkboxes__label" htmlFor="terms-agree">
                I confirm I have read and understood the terms and conditions
              </label>
            </div>
          </div>
        </div>
      </Section>

      <Section title="With error">
        <div className="govuk-form-group govuk-form-group--error">
          <fieldset className="govuk-fieldset" aria-describedby="waste-err-error">
            <legend className="govuk-fieldset__legend govuk-fieldset__legend--s">
              Which types of waste do you transport?
            </legend>
            <p id="waste-err-error" className="govuk-error-message">
              <span className="govuk-visually-hidden">Error:</span>
              Select which types of waste you transport
            </p>
            <div className="govuk-checkboxes" data-module="govuk-checkboxes">
              <div className="govuk-checkboxes__item">
                <input className="govuk-checkboxes__input" id="waste-err-carcasses" name="waste-err" type="checkbox" value="carcasses" />
                <label className="govuk-label govuk-checkboxes__label" htmlFor="waste-err-carcasses">Waste from animal carcasses</label>
              </div>
              <div className="govuk-checkboxes__item">
                <input className="govuk-checkboxes__input" id="waste-err-mines" name="waste-err" type="checkbox" value="mines" />
                <label className="govuk-label govuk-checkboxes__label" htmlFor="waste-err-mines">Waste from mines or quarries</label>
              </div>
            </div>
          </fieldset>
        </div>
      </Section>

      <Section title="Disabled">
        <div className="govuk-form-group">
          <fieldset className="govuk-fieldset">
            <legend className="govuk-fieldset__legend govuk-fieldset__legend--s">
              <h2 className="govuk-fieldset__heading">Which types of waste do you transport? (disabled)</h2>
            </legend>
            <div className="govuk-checkboxes" data-module="govuk-checkboxes">
              {[
                { value: 'carcasses', label: 'Waste from animal carcasses' },
                { value: 'mines', label: 'Waste from mines or quarries' },
                { value: 'farm', label: 'Farm or agricultural waste' },
              ].map(({ value, label }) => (
                <div className="govuk-checkboxes__item" key={value}>
                  <input
                    className="govuk-checkboxes__input"
                    id={`disabled-waste-${value}`}
                    name="disabled-waste"
                    type="checkbox"
                    value={value}
                    disabled
                    aria-disabled="true"
                  />
                  <label className="govuk-label govuk-checkboxes__label" htmlFor={`disabled-waste-${value}`}>
                    {label}
                  </label>
                </div>
              ))}
            </div>
          </fieldset>
        </div>
      </Section>

      <Section title="With hints on items">
        <div className="govuk-form-group">
          <fieldset className="govuk-fieldset">
            <legend className="govuk-fieldset__legend govuk-fieldset__legend--s">
              What is your nationality?
            </legend>
            <div id="nationality-hint" className="govuk-hint">
              If you have dual nationality, select all options that are relevant to you.
            </div>
            <div className="govuk-checkboxes" data-module="govuk-checkboxes">
              <div className="govuk-checkboxes__item">
                <input className="govuk-checkboxes__input" id="nat-british" name="nationality" type="checkbox" value="british" aria-describedby="nat-british-hint" />
                <label className="govuk-label govuk-checkboxes__label" htmlFor="nat-british">British</label>
                <div id="nat-british-hint" className="govuk-hint govuk-checkboxes__hint">including English, Scottish, Welsh and Northern Irish</div>
              </div>
              <div className="govuk-checkboxes__item">
                <input className="govuk-checkboxes__input" id="nat-irish" name="nationality" type="checkbox" value="irish" />
                <label className="govuk-label govuk-checkboxes__label" htmlFor="nat-irish">Irish</label>
              </div>
              <div className="govuk-checkboxes__item">
                <input className="govuk-checkboxes__input" id="nat-other" name="nationality" type="checkbox" value="other" />
                <label className="govuk-label govuk-checkboxes__label" htmlFor="nat-other">Citizen of another country</label>
              </div>
            </div>
          </fieldset>
        </div>
      </Section>


      <Section title="With &#39;none&#39; option">
        <div className="govuk-form-group">
          <fieldset className="govuk-fieldset">
            <legend className="govuk-fieldset__legend govuk-fieldset__legend--s">
              Will you be travelling to any of these countries?
            </legend>
            <div className="govuk-checkboxes" data-module="govuk-checkboxes">
              <div className="govuk-checkboxes__item">
                <input className="govuk-checkboxes__input" id="countries-france" name="countries" type="checkbox" value="france" />
                <label className="govuk-label govuk-checkboxes__label" htmlFor="countries-france">France</label>
              </div>
              <div className="govuk-checkboxes__item">
                <input className="govuk-checkboxes__input" id="countries-portugal" name="countries" type="checkbox" value="portugal" />
                <label className="govuk-label govuk-checkboxes__label" htmlFor="countries-portugal">Portugal</label>
              </div>
              <div className="govuk-checkboxes__item">
                <input className="govuk-checkboxes__input" id="countries-spain" name="countries" type="checkbox" value="spain" />
                <label className="govuk-label govuk-checkboxes__label" htmlFor="countries-spain">Spain</label>
              </div>
              <div className="govuk-checkboxes__divider">or</div>
              <div className="govuk-checkboxes__item">
                <input className="govuk-checkboxes__input" id="countries-none" name="countries" type="checkbox" value="none" data-behaviour="exclusive" />
                <label className="govuk-label govuk-checkboxes__label" htmlFor="countries-none">
                  No, I will not be travelling to any of these countries
                </label>
              </div>
            </div>
          </fieldset>
        </div>
      </Section>

      <Section title="Small checkboxes">
        <div className="govuk-form-group">
          <fieldset className="govuk-fieldset">
            <legend className="govuk-fieldset__legend govuk-fieldset__legend--s">
              Filter by category
            </legend>
            <div className="govuk-checkboxes govuk-checkboxes--small" data-module="govuk-checkboxes">
              {['Housing benefit', 'Income support', 'Jobseeker\'s allowance', 'Universal credit'].map((benefit) => (
                <div className="govuk-checkboxes__item" key={benefit}>
                  <input
                    className="govuk-checkboxes__input"
                    id={`benefit-${benefit.toLowerCase().replace(/[ ']/g, '-')}`}
                    name="benefit"
                    type="checkbox"
                    value={benefit.toLowerCase().replace(/[ ']/g, '-')}
                  />
                  <label
                    className="govuk-label govuk-checkboxes__label"
                    htmlFor={`benefit-${benefit.toLowerCase().replace(/[ ']/g, '-')}`}
                  >
                    {benefit}
                  </label>
                </div>
              ))}
            </div>
          </fieldset>
        </div>
      </Section>

      <IssueTable issues={[]} />
    </Layout>
  )
}
