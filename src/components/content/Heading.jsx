const Heading = ({ level, texto }) => {
  const Tag = `h${level || 2}`;
  
  // Mapeo de estilos para cada nivel de encabezado
  const styles = {
    2: 'text-3xl font-semibold text-slate-100 mt-12 mb-5 pb-2 border-b border-slate-700',
    3: 'text-2xl font-semibold text-slate-200 mt-10 mb-4',
    4: 'text-xl font-semibold text-slate-300 mt-8 mb-3',
    5: 'text-lg font-semibold text-slate-400 mt-6 mb-2',
    6: 'text-base font-semibold text-slate-400 mt-4 mb-1',
  };

  const createSlug = (text) => text ? text.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-+|-+$/g, '') : '';

  // Usamos el slug para el id, permitiendo la navegación interna
  return <Tag id={createSlug(texto)} className={styles[level]}>{texto}</Tag>;
};

export default Heading;