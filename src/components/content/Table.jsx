// src/components/content/Table.jsx
const Table = ({ encabezados, filas, titulo, id_tabla, colWidths = [] }) => (
  <div className="table-container">
    <table id={id_tabla}>
      {titulo && <caption>{titulo}</caption>}
      <thead>
        <tr>
          {encabezados.map((th, index) => (
            <th key={index} style={{ width: colWidths[index] || 'auto' }}>
              {th}
            </th>
          ))}
        </tr>
      </thead>
      <tbody>
        {filas.map((fila, rowIndex) => (
          <tr key={rowIndex}>
            {fila.map((td, cellIndex) => (
              <td key={cellIndex} dangerouslySetInnerHTML={{ __html: td }} />
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  </div>
);

export default Table;