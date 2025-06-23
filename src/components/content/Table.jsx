import React from 'react';

function Table({ id_tabla, titulo, encabezados, filas, type }) {
  const TableTag = 'table'; // Always use table tag
  const tableClassName = type === 'tabla_destacada' ? 'featured-table' : 'normal-table';

  return (
    <div className="table-container">
      {titulo && <h3 className="table-title">{titulo}</h3>}
      <TableTag id={id_tabla} className={tableClassName}>
        <thead>
          <tr>
            {encabezados.map((header, index) => (
              <th key={index} dangerouslySetInnerHTML={{ __html: header }} />
            ))}
          </tr>
        </thead>
        <tbody>
          {filas.map((row, rowIndex) => (
            <tr key={rowIndex}>
              {row.map((cell, cellIndex) => (
                <td key={cellIndex} dangerouslySetInnerHTML={{ __html: cell }} />
              ))}
            </tr>
          ))}
        </tbody>
      </TableTag>
    </div>
  );
}

export default Table;