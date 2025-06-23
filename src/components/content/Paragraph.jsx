import React from 'react';

function Paragraph({ text }) {
  return <p dangerouslySetInnerHTML={{ __html: text }} />;
}

export default Paragraph;