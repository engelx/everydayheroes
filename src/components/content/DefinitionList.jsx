// src/components/content/DefinitionList.jsx
const DefinitionList = ({ items }) => (
  <dl className="my-6 space-y-4">
    {items.map((item, index) => (
      <div key={index} className="p-4 rounded-lg bg-slate-800/50 border border-slate-700">
        <dt className="font-semibold text-indigo-400">{item.termino}</dt>
        <dd 
          className="mt-1 text-slate-400"
          dangerouslySetInnerHTML={{ __html: item.definicion }}
        />
      </div>
    ))}
  </dl>
);

export default DefinitionList;