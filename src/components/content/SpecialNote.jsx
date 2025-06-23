const SpecialNote = ({ texto }) => (
  <div className="bg-yellow-100 dark:bg-yellow-900/30 border-l-4 border-yellow-500 text-yellow-800 dark:text-yellow-200 p-4 rounded-r-lg my-6">
    <p className="font-semibold">Nota Importante</p>
    <p>{texto}</p>
  </div>
);

export default SpecialNote;