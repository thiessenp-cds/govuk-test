export default function IssueTable({ issues = [] }) {
  if (issues.length === 0) return null

  return (
    <div className="govuk-!-margin-top-6">
      <h2 className="govuk-heading-m">Known issues</h2>
      <table className="govuk-table">
        <thead className="govuk-table__head">
          <tr className="govuk-table__row">
            <th scope="col" className="govuk-table__header">Browser + AT combination</th>
            <th scope="col" className="govuk-table__header">Description</th>
          </tr>
        </thead>
        <tbody className="govuk-table__body">
          {issues.map((issue, i) => (
            <tr key={i} className="govuk-table__row">
              <td className="govuk-table__cell">{issue.combo}</td>
              <td className="govuk-table__cell">{issue.description}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}
