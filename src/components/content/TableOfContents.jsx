// src/components/content/TableOfContents.jsx
import React from 'react';

const createSlug = (text) => text ? text.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-+|-+$/g, '') : '';

const TableOfContents = ({ chapter }) => {
    if (!chapter || !chapter.contenido) {
        return <p className="text-sm text-slate-500">No hay secciones.</p>;
    }

    const tocItems = chapter.contenido.filter(item => item.tipo === 'h2' || item.tipo === 'h3');

    if (tocItems.length === 0) {
        return <p className="text-sm text-slate-500">No hay secciones.</p>;
    }
    
    const handleScrollTo = (e, slug) => {
        e.preventDefault();
        document.getElementById(slug)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
    };

    return (
        <aside className="toc-sidebar">
            <div className="toc-sticky">
                <h3>En esta página</h3>
                <ul>
                    {tocItems.map((item, i) => (
                       <li key={i} className={`toc-item-${item.tipo}`}>
                           <a href={`#${createSlug(item.texto)}`} onClick={(e) => handleScrollTo(e, createSlug(item.texto))}>
                               {item.texto}
                           </a>
                       </li> 
                    ))}
                </ul>
            </div>
        </aside>
    );
};

export default TableOfContents;