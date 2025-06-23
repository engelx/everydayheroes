import React from 'react';

function Introduction({ text }) {
  return <p className="introduction" dangerouslySetInnerHTML={{ __html: text }}/>;
}

export default Introduction;