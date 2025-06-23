import React from 'react';

function SpecialNote({ titulo, texto }) {
  return (
    <aside className="special-note">
      {titulo && <h4 className="special-note-title">{titulo}</h4>}
      <p dangerouslySetInnerHTML={{ __html: texto }} />
    </aside>
  );
}

export default SpecialNote;