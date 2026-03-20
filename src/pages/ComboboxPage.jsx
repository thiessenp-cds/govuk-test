import { useEffect, useRef } from 'react'
import accessibleAutocomplete from 'accessible-autocomplete'
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

function AutocompleteInput({ id, label, hint, source, options = {} }) {
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
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [id])

  return (
    <div className="govuk-form-group">
      <label className="govuk-label" htmlFor={id}>
        {label}
      </label>
      {hint && (
        <div id={`${id}-hint`} className="govuk-hint">
          {hint}
        </div>
      )}
      <div ref={containerRef} />
    </div>
  )
}

function EnhancedSelect({ id, label, hint, children }) {
  const selectRef = useRef(null)
  const wrapperRef = useRef(null)

  useEffect(() => {
    const selectEl = selectRef.current
    if (!selectEl) return
    accessibleAutocomplete.enhanceSelectElement({
      selectElement: selectEl,
      defaultValue: '',
    })
  }, [id])

  return (
    <div className="govuk-form-group" ref={wrapperRef}>
      <label className="govuk-label" htmlFor={id}>
        {label}
      </label>
      {hint && (
        <div id={`${id}-hint`} className="govuk-hint">
          {hint}
        </div>
      )}
      <select className="govuk-select" id={id} name={id} ref={selectRef}>
        {children}
      </select>
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

      {/* Default — type to filter */}
      <Section
        title="Default"
        description="Type to filter a list of options. Shows matching results as you type."
      >
        <AutocompleteInput
          id="country-default"
          label="Select your country"
          hint="Start typing to see suggestions."
          source={COUNTRIES}
        />
      </Section>

      {/* Show all values — dropdown-like */}
      <Section
        title="Show all values"
        description="Clicking the input reveals all options — similar behaviour to a native select dropdown."
      >
        <AutocompleteInput
          id="country-show-all"
          label="Select your country"
          hint="Click the input to see all options, or start typing to filter."
          source={COUNTRIES}
          options={{ showAllValues: true }}
        />
      </Section>

      {/* minLength — requires typing before suggestions appear */}
      <Section
        title="Minimum character length"
        description="Suggestions only appear after the user has typed 2 or more characters."
      >
        <AutocompleteInput
          id="country-min-length"
          label="Select your country"
          hint="Type at least 2 characters to see suggestions."
          source={COUNTRIES}
          options={{ minLength: 2 }}
        />
      </Section>

      {/* autoselect */}
      <Section
        title="With autoselect"
        description="The first matching result is automatically highlighted. Pressing Enter confirms the selection."
      >
        <AutocompleteInput
          id="country-autoselect"
          label="Select your country"
          source={COUNTRIES}
          options={{ autoselect: true }}
        />
      </Section>

      {/* Progressive enhancement from <select> */}
      <Section
        title="Enhanced from a &lt;select&gt; element"
        description="The accessible-autocomplete can progressively enhance an existing native select element. If JavaScript is unavailable, the original select is shown."
      >
        <EnhancedSelect
          id="location-picker"
          label="Choose a location"
          hint="This is enhanced from a native select element."
        >
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
        </EnhancedSelect>
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
