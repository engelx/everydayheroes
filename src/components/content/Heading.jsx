const Heading = ({ level, texto }) => {
  const Tag = `h${level || 2}`;
  
  const styles = {
    1: 'text-4xl font-bold text-slate-900 dark:text-white mt-10 mb-6 pb-3 border-b border-slate-200 dark:border-slate-700',
    2: 'text-3xl font-semibold text-slate-800 dark:text-slate-100 mt-12 mb-5 pb-2 border-b border-slate-200 dark:border-slate-700',
    3: 'text-2xl font-semibold text-slate-700 dark:text-slate-200 mt-10 mb-4',
    4: 'text-xl font-semibold text-slate-700 dark:text-slate-300 mt-8 mb-3',
    5: 'text-lg font-semibold text-slate-600 dark:text-slate-400 mt-6 mb-2',
    6: 'text-base font-semibold text-slate-600 dark:text-slate-400 mt-4 mb-1',
  };

  const createSlug = (text) => text ? text.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-+|-+$/g, '') : '';

  return <Tag id={createSlug(texto)} className={styles[level]}>{texto}</Tag>;
};

export default Heading;