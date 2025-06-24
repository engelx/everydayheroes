const SpecialNote = ({ titulo, texto }) => (
  <div className="special-note">
    {titulo && <h4>{titulo}</h4>}
    <p dangerouslySetInnerHTML={{ __html: texto }} />
  </div>
);
export default SpecialNote;