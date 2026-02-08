import './Table.css'
export const Table = ({ columns, data }) => {
  return (
    <table className="table table-bordered table-hover">
      <thead>
        <tr>
          {columns.map((col, index) => (
            <th key={index}>{col.header}</th>
          ))}
        </tr>
      </thead>

      <tbody>
        {data.length ? (
          data.map((row, rowIndex) => (
            <tr key={rowIndex}>
              {columns.map((col, colIndex) => (
                <td key={colIndex}>
                  {col.render
                    ? col.render(row[col.accessor], row)
                    : row[col.accessor]}
                </td>
              ))}
            </tr>
          ))
        ) : (
          <tr>
            <td colSpan={columns.length} className="text-center">
              No data available
            </td>
          </tr>
        )}
      </tbody>
    </table>
  );
};

