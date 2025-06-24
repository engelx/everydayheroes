// src/components/content/TableOfContents.jsx

const createSlug = (text) => text ? text.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-+|-+$/g, '') : '';

export const TableOfContents = ({ items }) => {
  if (!items || items.length === 0) {
    return <p className="text-sm text-slate-500">No hay secciones.</p>;
  }

  const handleScrollTo = (e, slug) => {
    e.preventDefault();
    document.getElementById(slug)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  return (
    <ul className="space-y-2 text-sm">
      {items.map((item, index) => {
        const slug = createSlug(item.texto);
        const isH3 = item.tipo === 'h3';
        return (
          <li key={`${slug}-${index}`} className={isH3 ? 'ml-4' : ''}>
            <a
              href={`#${slug}`}
              onClick={(e) => handleScrollTo(e, slug)}
              className="text-slate-400 hover:text-white transition-colors"
            >
              {item.texto}
            </a>
          </li>
        );
      })}
    </ul>
  );
};

export default TableOfContents;