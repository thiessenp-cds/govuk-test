export function Notes({ items }) {
  if (!items || items.length === 0) return null;
  return (
    <section className="govuk-!-margin-bottom-9">
      <h2 className="govuk-heading-m">Notes</h2>
      <ul className="govuk-list">
        {items.map((note, idx) => (
          <li key={idx} className="govuk-body app-notes">{note}</li>
        ))}
      </ul>
    </section>
  );
}
