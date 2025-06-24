import React, { useState, useMemo, useEffect, useRef } from 'react';
// Asegúrate de que los componentes de contenido también estén actualizados
import { Heading, Introduction, List, DefinitionList, Paragraph, SpecialNote, Table } from './content';

// ... (El resto de tus importaciones y lógica de carga de capítulos) ...
const chapterModules = import.meta.glob('../capitulos/*.js', { eager: true });


const BookReader = () => {
    // ... (toda tu lógica de estado y `useMemo` para `book` permanece igual) ...
    const book = useMemo(() => {
        const chapters = Object.values(chapterModules)
          .map(module => module.default)
          .filter(Boolean)
          .sort((a, b) => a.numero - b.numero);
        return { titulo: "Everyday Heroes", capitulos: chapters };
    }, []);

    const [activeChapterIndex, setActiveChapterIndex] = useState(0);
    const contentRef = useRef(null);
    
    useEffect(() => {
        contentRef.current?.scrollTo(0, 0);
    }, [activeChapterIndex]);

    if (book.capitulos.length === 0) {
        return <div>Cargando...</div>;
    }

    const activeChapter = book.capitulos[activeChapterIndex];
    const tocItems = activeChapter.contenido.filter(item => item.tipo === 'h2' || item.tipo === 'h3');
    
    const handleSelectChapter = (id) => {
        const index = book.capitulos.findIndex(c => c.id === id);
        if (index !== -1) setActiveChapterIndex(index);
    };

    const handleSelectSection = (slug) => {
        document.getElementById(slug)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
    };
    
    const createSlug = (text) => text ? text.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-+|-+$/g, '') : '';
    
    // El renderizador de contenido sigue siendo el mismo, pero ahora usará componentes con clases CSS
    const renderContent = (item, index) => {
      // Tu mapeo de componentes existente
      const Component = {
          'introduccion': Introduction,
          'parrafo': Paragraph,
          'h2': Heading,
          'h3': Heading,
          'h4': Heading,
          'lista': List,
          'lista_definicion': DefinitionList,
          'nota_especial': SpecialNote,
          'tabla': Table,
          'tabla_destacada': Table,
          'diagrama': ({ src, alt }) => <img src={src} alt={alt} className="content-diagram" />,
      }[item.tipo];

      // Lógica para asignar anchos específicos a las tablas
      if (item.tipo === 'tabla' || item.tipo === 'tabla_destacada') {
          let colWidths = []; // Anchos por defecto
          
          // Asignamos anchos para la tabla de modificadores de característica
          if (item.id_tabla === 'tabla-modificador-habilidad' || item.id_tabla === 'tabla-costos-puntos-caracteristica') {
              colWidths = ['70%', '30%'];
          }
          
          // Asignamos anchos para la tabla de arquetipos (la de la primera captura)
          if (item.id_tabla === 'tabla-arquetipos-y-clases') {
              colWidths = ['15%', '40%', '30%', '15%'];
          }

          // Renderizamos el componente Table con los anchos correspondientes
          return <Component key={`${activeChapter.id}-${index}`} {...item} colWidths={colWidths} />;
      }

      // Lógica para los encabezados
      const levelMap = { 'h2': 2, 'h3': 3, 'h4': 4, 'h5': 5, 'h6': 6 };

      // Renderizado por defecto para los demás componentes
      if (Component) {
          return <Component key={`${activeChapter.id}-${index}`} {...item} level={levelMap[item.tipo] || item.level} />;
      }

      return null;
  };
    
    return (
        <div id="book-reader-container">
            {/* Columna Izquierda: Navegación de Capítulos */}
            <aside className="sidebar-nav">
                <header className="sidebar-header">
                    <h1>{book.titulo}</h1>
                    <p>Visor del Libro de Reglas</p>
                </header>
                <nav className="chapter-list">
                    {book.capitulos.map(c => (
                        <a key={c.id} href="#" onClick={() => handleSelectChapter(c.id)} className={c.id === activeChapter.id ? 'active' : ''}>
                           {c.numero}. {c.titulo.replace(/Capítulo \d+:/, '').trim()}
                        </a>
                    ))}
                </nav>
            </aside>

            {/* Columna Central: Contenido Principal */}
            <main ref={contentRef} className="main-content">
                <article>
                    <h1 className="main-title">{activeChapter.titulo}</h1>
                    {activeChapter.contenido.map(renderContent)}
                </article>
            </main>

            {/* Columna Derecha: En esta página */}
            <aside className="toc-sidebar">
                <div className="toc-sticky">
                    <h3>En esta página</h3>
                    <ul>
                        {tocItems.map((item, i) => (
                           <li key={i} className={`toc-item-${item.tipo}`}>
                               <a href={`#${createSlug(item.texto)}`} onClick={(e) => { e.preventDefault(); handleSelectSection(createSlug(item.texto)); }}>
                                   {item.texto}
                               </a>
                           </li> 
                        ))}
                    </ul>
                </div>
            </aside>
        </div>
    );
};

export default BookReader;