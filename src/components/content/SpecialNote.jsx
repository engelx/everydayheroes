// src/components/content/SpecialNote.jsx
const SpecialNote = ({ titulo, texto }) => (
  <div className="my-6 rounded-lg border border-yellow-500/30 bg-yellow-500/10 p-5">
    {titulo && <p className="font-bold text-yellow-300 mb-2">{titulo}</p>}
    <p 
      className="text-yellow-200/80"
      dangerouslySetInnerHTML={{ __html: texto }}
    />
  </div>
);

export default SpecialNote;