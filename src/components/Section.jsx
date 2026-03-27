export function Section({ title, notes, children }) {
  return (
    <section className="govuk-!-margin-bottom-9">
      <h2 className="govuk-heading-m">{title}</h2>
      <div className="govuk-!-margin-top-4">{children}</div>
      {notes && <p className="govuk-body app-notes"><em>{notes}</em></p>}
    </section>
  )
}
