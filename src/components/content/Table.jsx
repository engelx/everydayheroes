const Table = ({ cabeceras, filas }) => (
  <div className="my-6 overflow-x-auto rounded-lg border border-slate-200 dark:border-slate-700">
    <table className="w-full text-sm text-left text-slate-500 dark:text-slate-400">
        <thead className="text-xs text-slate-700 uppercase bg-slate-100 dark:bg-slate-800 dark:text-slate-300">
            <tr>
                {cabeceras.map((th, index) => (
                    <th key={index} scope="col" className="px-6 py-3">{th}</th>
                ))}
            </tr>
        </thead>
        <tbody>
            {filas.map((fila, rowIndex) => (
                <tr key={rowIndex} className="bg-white border-b dark:bg-slate-900/50 dark:border-slate-700 hover:bg-slate-50 dark:hover:bg-slate-800/50">
                    {fila.map((td, cellIndex) => (
                       <td key={cellIndex} className={`px-6 py-4 ${cellIndex === 0 ? 'font-medium text-slate-900 dark:text-white whitespace-nowrap' : ''}`}>{td}</td>
                    ))}
                </tr>
            ))}
        </tbody>
    </table>
  </div>
);

export default Table;