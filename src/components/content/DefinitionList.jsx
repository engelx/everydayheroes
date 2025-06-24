// src/components/content/DefinitionList.jsx
const DefinitionList = ({ items }) => (
  <dl className="mb-4">
    {items.map((item, index) => (
      <div key={index} className="mb-6">
        <dt className="font-semibold text-indigo-400">{item.termino}</dt>
        <dd className="mt-1 pl-4 border-l-2 border-slate-700 text-slate-400">{item.definicion}</dd>
      </div>
    ))}
  </dl>
);

export default DefinitionList;