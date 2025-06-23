const DefinitionList = ({ elementos }) => (
  <dl className="mb-4 space-y-3">
    {elementos.map((item, index) => (
      <div key={index} className="bg-slate-100 dark:bg-slate-800 p-3 rounded-lg">
        <dt className="font-semibold text-blue-600 dark:text-blue-400">{item.termino}</dt>
        <dd className="pl-4 text-slate-600 dark:text-slate-300">{item.definicion}</dd>
      </div>
    ))}
  </dl>
);

export default DefinitionList;