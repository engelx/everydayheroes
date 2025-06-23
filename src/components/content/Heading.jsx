import React from 'react';

function Heading({ type, text }) {
  const Tag = type; // h2, h3, h4
  return <Tag dangerouslySetInnerHTML={{ __html: text }} />;
}

export default Heading;