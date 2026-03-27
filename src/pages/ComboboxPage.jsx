import { useEffect, useRef } from 'react'
import accessibleAutocomplete from 'accessible-autocomplete'
import { Layout } from '../App'
import IssueTable from '../components/IssueTable'
import { Section } from '../components/Section'

const COUNTRIES = [
  'Afghanistan', 'Albania', 'Algeria', 'Andorra', 'Angola',
  'Australia', 'Austria', 'Bangladesh', 'Belgium', 'Brazil',
  'Canada', 'Chile', 'China', 'Colombia', 'Croatia',
  'Czech Republic', 'Denmark', 'Egypt', 'Ethiopia', 'Finland',
  'France', 'Germany', 'Ghana', 'Greece', 'Hungary',
  'India', 'Indonesia', 'Iran', 'Iraq', 'Ireland',
  'Israel', 'Italy', 'Japan', 'Jordan', 'Kenya',
  'Mexico', 'Morocco', 'Netherlands', 'New Zealand', 'Nigeria',
  'Norway', 'Pakistan', 'Peru', 'Philippines', 'Poland',
  'Portugal', 'Romania', 'Russia', 'Saudi Arabia', 'South Africa',
  'South Korea', 'Spain', 'Sweden', 'Switzerland', 'Thailand',
  'Turkey', 'Ukraine', 'United Arab Emirates', 'United Kingdom', 'United States',
  'Vietnam',
]

function AutocompleteInput({ id, label, hint, source, options = {}, error, required }) {
  const containerRef = useRef(null)

  useEffect(() => {
    const container = containerRef.current
    if (!container) return
    // Clear any previous instance when remounting
    container.innerHTML = ''
    accessibleAutocomplete({
      element: container,
      id,
      name: id,
      source,
      showNoOptionsFound: true,
      ...options,
    })
    if (required) {
      const input = container.querySelector('input')
      if (input) input.required = true
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [id])

  return (
    <div className={`govuk-form-group${error ? ' govuk-form-group--error' : ''}`}>
      <label className="govuk-label" htmlFor={id}>
        {label}
      </label>
      {hint && (
        <div id={`${id}-hint`} className="govuk-hint">
          {hint}
        </div>
      )}
      {error && (
        <p id={`${id}-error`} className="govuk-error-message">
          <span className="govuk-visually-hidden">Error:</span> {error}
        </p>
      )}
      <div ref={containerRef} />
    </div>
  )
}

export default function ComboboxPage() {
  return (
    <Layout backLink>
      <h1 className="govuk-heading-xl app-page-heading">
        Accessible autocomplete (combobox)
        <a className="govuk-link govuk-!-font-size-19 govuk-!-font-weight-regular" href="https://github.com/alphagov/accessible-autocomplete" target="_blank" rel="noreferrer">Accessible autocomplete reference (GitHub)</a>
      </h1>

      <hr className="govuk-section-break govuk-section-break--l govuk-section-break--visible" />

      <Section
        title="Progressively Enhanced from select (desktop gets combobox , touch gets native select)"
      >
        {/* Only render the native select. accessible-autocomplete will enhance it for desktop, and show native select for touch devices. */}
        <div className="govuk-form-group">
          <label className="govuk-label" htmlFor="location-picker">
            Choose a location
          </label>
          <div id="location-picker-hint" className="govuk-hint">
            This is enhanced from a native select element.
          </div>
          <select className="govuk-select" id="location-picker" name="location-picker" ref={el => {
            if (el && !el.dataset.enhanced) {
              accessibleAutocomplete.enhanceSelectElement({
                selectElement: el,
                defaultValue: '',
              });
              el.dataset.enhanced = 'true';
            }
          }}>
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

      <hr className="govuk-section-break govuk-section-break--l govuk-section-break--visible" />

      <Section
        title="Default"
      >
        <AutocompleteInput
          id="country-default"
          label="Select your country"
          hint="Start typing to see suggestions."
          source={COUNTRIES}
        />
      </Section>

      <Section
        title="Required"
      >
        <AutocompleteInput
          id="country-required"
          label="Select your country"
          hint="Start typing to see suggestions."
          source={COUNTRIES}
          required
        />
      </Section>

      <Section
        title="With error"
      >
        <AutocompleteInput
          id="country-error"
          label="Select your country"
          source={COUNTRIES}
          error="Select a country"
        />
      </Section>

      <Section
        title="Show all values"
      >
        <AutocompleteInput
          id="country-show-all"
          label="Select your country"
          hint="Click the input to see all options, or start typing to filter."
          source={COUNTRIES}
          options={{ showAllValues: true }}
        />
      </Section>

      <Section
        title="Minimum character length"
      >
        <AutocompleteInput
          id="country-min-length"
          label="Select your country"
          hint="Type at least 2 characters to see suggestions."
          source={COUNTRIES}
          options={{ minLength: 2 }}
        />
      </Section>

      <Section
        title="With autoselect"
      >
        <AutocompleteInput
          id="country-autoselect"
          label="Select your country"
          source={COUNTRIES}
          options={{ autoselect: true }}
        />
      </Section>

      <IssueTable issues={[
        {
          combo: 'React 19 (all browsers)',
          description: "The official React wrapper for accessible-autocomplete has only been tested up to React 18. This page uses the vanilla JS API via useEffect instead, which is compatible but not the documented React integration path.",
        },
        {
          combo: 'All browsers + screen readers',
          description: 'Users are not always notified of dynamically appearing suggestions. Follow the GOV.UK guidance on using this component only when a simpler approach (radios, select) is not suitable.',
        },
      ]} />
    </Layout>
  )
}
