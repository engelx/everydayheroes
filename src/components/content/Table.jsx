const Table = ({ encabezados, filas, titulo }) => (
  <div className="my-6 overflow-x-auto rounded-lg border border-slate-700">
    <table className="w-full text-sm text-left text-slate-400">
      {titulo && (
        <caption className="caption-top p-4 text-lg font-semibold text-left text-white bg-slate-800">
          {titulo}
        </caption>
      )}
      <thead className="text-xs text-slate-300 uppercase bg-slate-800">
        <tr>
          {encabezados.map((th, index) => (
            <th key={index} scope="col" className="px-6 py-3 tracking-wider">{th}</th>
          ))}
        </tr>
      </thead>
      <tbody className="divide-y divide-slate-700">
        {filas.map((fila, rowIndex) => (
          <tr key={rowIndex} className="bg-slate-900/50 hover:bg-slate-800/50 transition-colors duration-150">
            {fila.map((td, cellIndex) => (
              <td key={cellIndex} className={`px-6 py-4 ${cellIndex === 0 ? 'font-medium text-white' : ''}`} dangerouslySetInnerHTML={{ __html: td }} />
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  </div>
);

export default Table;