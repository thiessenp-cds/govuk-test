import { Layout } from '../App'
import IssueTable from '../components/IssueTable'
import { Section } from '../components/Section';

export default function RadiosPage() {
  return (
    <Layout backLink>
      <h1 className="govuk-heading-xl app-page-heading">
        Radios
        <a className="govuk-link govuk-!-font-size-19 govuk-!-font-weight-regular" href="https://design-system.service.gov.uk/components/radios/" target="_blank" rel="noreferrer">Radios reference (gov.uk)</a>
      </h1>

      <hr className="govuk-section-break govuk-section-break--l govuk-section-break--visible" />

      <Section title="Default">
        <div className="govuk-form-group">
          <fieldset className="govuk-fieldset">
            <legend className="govuk-fieldset__legend govuk-fieldset__legend--s">
              <h2 className="govuk-fieldset__heading">Where do you live?</h2>
            </legend>
            <div className="govuk-radios" data-module="govuk-radios">
              {['England', 'Scotland', 'Wales', 'Northern Ireland'].map((option) => (
                <div className="govuk-radios__item" key={option}>
                  <input
                    className="govuk-radios__input"
                    id={`where-live-${option.toLowerCase().replace(' ', '-')}`}
                    name="where-live"
                    type="radio"
                    value={option.toLowerCase().replace(' ', '-')}
                  />
                  <label
                    className="govuk-label govuk-radios__label"
                    htmlFor={`where-live-${option.toLowerCase().replace(' ', '-')}`}
                  >
                    {option}
                  </label>
                </div>
              ))}
            </div>
          </fieldset>
        </div>
      </Section>

      <Section title="Required">
        <div className="govuk-form-group">
          <fieldset className="govuk-fieldset" aria-describedby="nationality-hint">
            <legend className="govuk-fieldset__legend govuk-fieldset__legend--s">
              What is your nationality?
            </legend>
            <div id="nationality-hint" className="govuk-hint">Select one option. (could add a note about required)</div>
            <div className="govuk-radios" data-module="govuk-radios">
              {['British', 'Irish', 'Citizen of another country'].map((option) => (
                <div className="govuk-radios__item" key={option}>
                  <input
                    className="govuk-radios__input"
                    id={`nationality-${option.toLowerCase().replace(/ /g, '-')}`}
                    name="nationality"
                    type="radio"
                    value={option.toLowerCase().replace(/ /g, '-')}
                    required
                  />
                  <label
                    className="govuk-label govuk-radios__label"
                    htmlFor={`nationality-${option.toLowerCase().replace(/ /g, '-')}`}
                  >
                    {option}
                  </label>
                </div>
              ))}
            </div>
          </fieldset>
        </div>
      </Section>

      <Section title="With error">
        <div className="govuk-form-group govuk-form-group--error">
          <fieldset className="govuk-fieldset" aria-describedby="contact-error">
            <legend className="govuk-fieldset__legend govuk-fieldset__legend--s">
              How do you want to be contacted?
            </legend>
            <p id="contact-error" className="govuk-error-message">
              <span className="govuk-visually-hidden">Error:</span>
              Select how you want to be contacted
            </p>
            <div className="govuk-radios" data-module="govuk-radios">
              <div className="govuk-radios__item">
                <input className="govuk-radios__input" id="contact-err-email" name="contact-err" type="radio" value="email" />
                <label className="govuk-label govuk-radios__label" htmlFor="contact-err-email">Email</label>
              </div>
              <div className="govuk-radios__item">
                <input className="govuk-radios__input" id="contact-err-phone" name="contact-err" type="radio" value="phone" />
                <label className="govuk-label govuk-radios__label" htmlFor="contact-err-phone">Phone</label>
              </div>
            </div>
          </fieldset>
        </div>
      </Section>

      <Section title="Disabled">
        <div className="govuk-form-group">
          <fieldset className="govuk-fieldset">
            <legend className="govuk-fieldset__legend govuk-fieldset__legend--s">
              <h2 className="govuk-fieldset__heading">Where do you live?</h2>
            </legend>
            <div className="govuk-radios" data-module="govuk-radios">
              {['England', 'Scotland', 'Wales', 'Northern Ireland'].map((option) => (
                <div className="govuk-radios__item" key={option}>
                  <input
                    className="govuk-radios__input"
                    id={`disabled-where-live-${option.toLowerCase().replace(' ', '-')}`}
                    name="disabled-where-live"
                    type="radio"
                    value={option.toLowerCase().replace(' ', '-')}
                    disabled
                    aria-disabled="true"
                  />
                  <label
                    className="govuk-label govuk-radios__label"
                    htmlFor={`disabled-where-live-${option.toLowerCase().replace(' ', '-')}`}
                  >
                    {option}
                  </label>
                </div>
              ))}
            </div>
          </fieldset>
        </div>
      </Section>

      <Section title="Inline">
        <div className="govuk-form-group">
          <fieldset className="govuk-fieldset">
            <legend className="govuk-fieldset__legend govuk-fieldset__legend--s">
              Have you changed your name?
            </legend>
            <div className="govuk-hint">This includes changing your last name or spelling your name differently.</div>
            <div className="govuk-radios govuk-radios--inline" data-module="govuk-radios">
              <div className="govuk-radios__item">
                <input className="govuk-radios__input" id="changed-name-yes" name="changed-name" type="radio" value="yes" />
                <label className="govuk-label govuk-radios__label" htmlFor="changed-name-yes">Yes</label>
              </div>
              <div className="govuk-radios__item">
                <input className="govuk-radios__input" id="changed-name-no" name="changed-name" type="radio" value="no" />
                <label className="govuk-label govuk-radios__label" htmlFor="changed-name-no">No</label>
              </div>
            </div>
          </fieldset>
        </div>
      </Section>

      <Section title="With hints on items">
        <div className="govuk-form-group">
          <fieldset className="govuk-fieldset">
            <legend className="govuk-fieldset__legend govuk-fieldset__legend--s">
              How do you want to be contacted?
            </legend>
            <div className="govuk-radios" data-module="govuk-radios">
              <div className="govuk-radios__item">
                <input className="govuk-radios__input" id="contact-email" name="contact" type="radio" value="email" aria-describedby="contact-email-hint" />
                <label className="govuk-label govuk-radios__label" htmlFor="contact-email">Email</label>
                <div id="contact-email-hint" className="govuk-hint govuk-radios__hint">We'll only use this for this service</div>
              </div>
              <div className="govuk-radios__item">
                <input className="govuk-radios__input" id="contact-phone" name="contact" type="radio" value="phone" aria-describedby="contact-phone-hint" />
                <label className="govuk-label govuk-radios__label" htmlFor="contact-phone">Phone</label>
                <div id="contact-phone-hint" className="govuk-hint govuk-radios__hint">We'll only call you if there&apos;s a problem with your application</div>
              </div>
              <div className="govuk-radios__item">
                <input className="govuk-radios__input" id="contact-text" name="contact" type="radio" value="text" aria-describedby="contact-text-hint" />
                <label className="govuk-label govuk-radios__label" htmlFor="contact-text">Text message</label>
                <div id="contact-text-hint" className="govuk-hint govuk-radios__hint">We&apos;ll only text you if there&apos;s a problem</div>
              </div>
            </div>
          </fieldset>
        </div>
      </Section>

      <Section title="With divider">
        <div className="govuk-form-group">
          <fieldset className="govuk-fieldset">
            <legend className="govuk-fieldset__legend govuk-fieldset__legend--s">
              How do you want to sign in?
            </legend>
            <div className="govuk-radios" data-module="govuk-radios">
              <div className="govuk-radios__item">
                <input className="govuk-radios__input" id="signin-gov" name="signin" type="radio" value="gov-gateway" />
                <label className="govuk-label govuk-radios__label" htmlFor="signin-gov">Use Government Gateway</label>
              </div>
              <div className="govuk-radios__item">
                <input className="govuk-radios__input" id="signin-verify" name="signin" type="radio" value="govuk-verify" />
                <label className="govuk-label govuk-radios__label" htmlFor="signin-verify">Use GOV.UK One Login</label>
              </div>
              <div className="govuk-radios__divider">or</div>
              <div className="govuk-radios__item">
                <input className="govuk-radios__input" id="signin-none" name="signin" type="radio" value="none" />
                <label className="govuk-label govuk-radios__label" htmlFor="signin-none">Create an account</label>
              </div>
            </div>
          </fieldset>
        </div>
      </Section>

      <Section title="Small radios">
        <div className="govuk-form-group">
          <fieldset className="govuk-fieldset">
            <legend className="govuk-fieldset__legend govuk-fieldset__legend--s">
              Filter by status
            </legend>
            <div className="govuk-radios govuk-radios--small" data-module="govuk-radios">
              {['Open', 'In progress', 'Closed', 'Cancelled'].map((status) => (
                <div className="govuk-radios__item" key={status}>
                  <input
                    className="govuk-radios__input"
                    id={`status-${status.toLowerCase().replace(' ', '-')}`}
                    name="status"
                    type="radio"
                    value={status.toLowerCase().replace(' ', '-')}
                  />
                  <label
                    className="govuk-label govuk-radios__label"
                    htmlFor={`status-${status.toLowerCase().replace(' ', '-')}`}
                  >
                    {status}
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
