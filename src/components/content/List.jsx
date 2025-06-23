const List = ({ items }) => (
  <ul className="list-disc list-inside space-y-2 mb-4 pl-4 text-slate-600 dark:text-slate-300">
    {items.map((item, index) => <li key={index}>{item}</li>)}
  </ul>
);

export default List;