import React from 'react';

function DefinitionList({ items }) {
  return (
    <dl>
      {items.map((item, index) => (
        <React.Fragment key={index}>
          <dt dangerouslySetInnerHTML={{ __html: item.termino }} />
          <dd dangerouslySetInnerHTML={{ __html: item.definicion }} />
        </React.Fragment>
      ))}
    </dl>
  );
}

export default DefinitionList;