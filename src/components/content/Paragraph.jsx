const Paragraph = ({ texto }) => (
  <p className="content-paragraph" dangerouslySetInnerHTML={{ __html: texto }} />
);
export default Paragraph;