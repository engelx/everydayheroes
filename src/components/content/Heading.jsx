const Heading = ({ level, texto }) => {
  const Tag = `h${level || 2}`;
  const createSlug = (text) => text ? text.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-+|-+$/g, '') : '';
  return <Tag id={createSlug(texto)} className={`content-h${level}`}>{texto}</Tag>;
};
export default Heading;