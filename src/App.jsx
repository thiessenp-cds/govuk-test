import { HashRouter, Routes, Route, Link } from 'react-router-dom'
import TextInputPage from './pages/TextInputPage'
import TextareaPage from './pages/TextareaPage'
import RadiosPage from './pages/RadiosPage'
import CheckboxesPage from './pages/CheckboxesPage'
import SelectPage from './pages/SelectPage'
import DateInputPage from './pages/DateInputPage'
import FileUploadPage from './pages/FileUploadPage'
import CharacterCountPage from './pages/CharacterCountPage'
import PasswordInputPage from './pages/PasswordInputPage'
import ComboboxPage from './pages/ComboboxPage'
import AddressFormPage from './pages/AddressFormPage'

const components = [
  { name: 'Text input', path: 'text-input', description: "Let users enter text that's no longer than a single line." },
  { name: 'Textarea', path: 'textarea', description: 'Let users enter more than one line of text.' },
  { name: 'Radios', path: 'radios', description: 'Let users select one option from a list.' },
  { name: 'Checkboxes', path: 'checkboxes', description: 'Let users select one or more options.' },
  { name: 'Select', path: 'select', description: 'Let users choose an option from a long list.' },
  { name: 'Date input', path: 'date-input', description: 'Help users enter a memorable date.' },
  { name: 'File upload', path: 'file-upload', description: 'Help users select and upload a file.' },
  { name: 'Character count', path: 'character-count', description: 'Help users know how much text they can enter.' },
  { name: 'Password input', path: 'password-input', description: 'Help users create and enter passwords.' },
  { name: 'Accessible autocomplete', path: 'combobox', description: 'Help users choose from a list with search-as-you-type filtering.' },
]

export function Layout({ children, backLink }) {
  return (
    <>
      <a
        href="#main-content"
        className="govuk-skip-link"
        data-module="govuk-skip-link"
        onClick={(e) => {
          e.preventDefault()
          document.getElementById('main-content')?.focus()
        }}
      >
        Skip to main content
      </a>
      <div className="govuk-width-container">
        {backLink && (
          <nav>
            <Link to="/" className="govuk-back-link">
              Back to components
            </Link>
          </nav>
        )}
        <main className="govuk-main-wrapper" id="main-content" tabIndex={-1}>
          {children}
        </main>
      </div>
    </>
  )
}

function HomePage() {
  return (
    <Layout>
      <h1 className="govuk-heading-xl app-home-heading">My gov.uk form component test</h1>

      <h2 className="govuk-heading-m app-section-heading">Form components</h2>
      <div className="govuk-grid-row app-card-grid">
        {components.map(({ name, path }) => (
          <div key={path} className="govuk-grid-column-one-third app-card-column">
            <div className="app-card">
              <h2 className="govuk-heading-s app-card__title">
                <Link className="govuk-link" to={`/${path}`}>
                  {name}
                </Link>
              </h2>
            </div>
          </div>
        ))}
      </div>

      <h2 className="govuk-heading-m app-section-heading govuk-!-margin-top-8">Form examples</h2>
      <div className="govuk-grid-row app-card-grid">
        <div className="govuk-grid-column-one-third app-card-column">
          <div className="app-card">
            <h2 className="govuk-heading-s app-card__title">
              <Link className="govuk-link" to="/address-form">Address form</Link>
            </h2>
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default function App() {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/text-input" element={<TextInputPage />} />
        <Route path="/textarea" element={<TextareaPage />} />
        <Route path="/radios" element={<RadiosPage />} />
        <Route path="/checkboxes" element={<CheckboxesPage />} />
        <Route path="/select" element={<SelectPage />} />
        <Route path="/date-input" element={<DateInputPage />} />
        <Route path="/file-upload" element={<FileUploadPage />} />
        <Route path="/character-count" element={<CharacterCountPage />} />
        <Route path="/password-input" element={<PasswordInputPage />} />
        <Route path="/combobox" element={<ComboboxPage />} />
        <Route path="/address-form" element={<AddressFormPage />} />
      </Routes>
    </HashRouter>
  )
}
