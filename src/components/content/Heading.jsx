const Heading = ({ level, texto }) => {
  const Tag = `h${level}`;
  const styles = {
    1: 'text-3xl font-bold text-slate-800 dark:text-slate-100 mt-8 mb-4 border-b-2 border-slate-200 dark:border-slate-700 pb-2',
    2: 'text-2xl font-semibold text-slate-700 dark:text-slate-200 mt-6 mb-3',
    3: 'text-xl font-semibold text-slate-600 dark:text-slate-300 mt-4 mb-2',
  };
  return <Tag className={styles[level]}>{texto}</Tag>;
};

export default Heading;