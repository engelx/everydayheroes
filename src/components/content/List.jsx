// src/components/content/List.jsx
const List = ({ items }) => (
  <ul className="">
    {items.map((item, index) => <li key={index} dangerouslySetInnerHTML={{ __html: item }} />)}
  </ul>
);

export default List;