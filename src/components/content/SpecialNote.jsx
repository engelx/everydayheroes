const SpecialNote = ({ titulo, texto }) => (
  <div className="my-6 rounded-lg border-l-4 border-amber-500 bg-amber-500/10 p-4 text-amber-700 dark:text-amber-300">
    {titulo && <p className="font-bold mb-2">{titulo}</p>}
    <div className="prose prose-sm dark:prose-invert max-w-none">
      <p>{texto}</p>
    </div>
  </div>
);

export default SpecialNote;