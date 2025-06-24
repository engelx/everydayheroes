// src/components/content/DefinitionList.jsx
const DefinitionList = ({ items }) => (
  // La clase principal se mantiene en <dl>
  <dl className="definition-list">
    {items.map((item, index) => (
      // NUEVO: Envolvemos cada par en un <div> para mejor estructura y estilizado
      <div key={index} className="definition-item">
        <dt>{item.termino}</dt>
        <dd dangerouslySetInnerHTML={{ __html: item.definicion }} />
      </div>
    ))}
  </dl>
);

export default DefinitionList;