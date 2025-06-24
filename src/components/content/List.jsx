// src/components/content/List.jsx
const List = ({ items }) => (
  <ul className="list-disc list-inside space-y-2 mb-4 pl-5 text-slate-300">
    {items.map((item, index) => <li key={index} dangerouslySetInnerHTML={{ __html: item }} />)}
  </ul>
);

export default List;