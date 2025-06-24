// src/components/content/Paragraph.jsx
const Paragraph = ({ texto }) => (
  // Añadimos espaciado y altura de línea para legibilidad
  <p 
    className="mb-4 leading-relaxed text-slate-300"
    dangerouslySetInnerHTML={{ __html: texto }} 
  />
);

export default Paragraph;