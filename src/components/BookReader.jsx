import React, { useState, useEffect, useMemo } from 'react';
import {
  // Import all content components
  Heading,
  Introduction,
  List,
  DefinitionList,
  Paragraph,
  SpecialNote,
  Table,
} from './content';

// Map content types to their respective components
// Make sure the keys match the 'tipo' property in your chapter files
const contentComponents = {
  introduccion: Introduction,
  parrafo: Paragraph,
  h2: Heading,
  h3: Heading,
  h4: Heading,
  lista: List,
  lista_definicion: DefinitionList,
  tabla: Table,
  tabla_destacada: Table, // Reusing Table component for featured tables, can add specific styling via props
  nota_especial: SpecialNote,
  // Add other types as needed: habilidad_progresiva, complicacion_persecucion, bloque_estadisticas_npc, diagrama
};

// Use Vite's import.meta.glob to dynamically import all chapters
const chapterModules = import.meta.glob('../capitulos/*.js', { eager: true });

function BookReader() {
  // Convert the imported modules into an array of chapter objects
  // and sort them by chapter id to ensure correct order.
  const allChapters = useMemo(() => Object.values(chapterModules)
    .map(module => module.default)
    .filter(chap => chap != null && typeof chap.id === 'string' && typeof chap.titulo === 'string') // Ensure chapter object and its id/titulo are valid
    // Use localeCompare with numeric option for natural sorting (e.g., "capitulo1" before "capitulo10")
    .sort((a, b) => a.id.localeCompare(b.id, undefined, { numeric: true })),
  []);

  const [currentChapterId, setCurrentChapterId] = useState(() =>
    allChapters.length > 0 ? allChapters[0]?.id : null
  );

  // Derive the current chapter from the ID and the list of all chapters.
  // This is more robust and efficient than using a separate state and useEffect.
  const currentChapter = useMemo(() => {
    if (!currentChapterId) return null;
    return allChapters.find(chap => chap.id === currentChapterId);
  }, [currentChapterId, allChapters]);

  if (!currentChapter) {
    return <div className="loading-message">Cargando capítulo...</div>;
  }

  return (
    <div className="book-container">
      <aside className="table-of-contents">
        <h3>Índice de Capítulos</h3>
        <nav className="chapter-navigation">
          {allChapters.map(chap => (
            <button
              key={chap.id}
              onClick={() => setCurrentChapterId(chap.id)}
              className={currentChapterId === chap.id ? 'active' : ''}
            >
              {chap.titulo}
            </button>
          ))}
        </nav>
      </aside>

      <main className="book-reader">
        <article className="chapter-content">
          <h1>{currentChapter.titulo}</h1>
          {currentChapter.contenido.map((block, index) => {
          const Component = contentComponents[block.tipo];
          if (!Component) {
            console.warn(`No component found for content type: ${block.tipo}`);
            return null;
          }

          // Pass all properties of the block to the component
          // Special handling for headings and tables to pass the 'type' for rendering the correct tag/class
          if (block.tipo.startsWith('h')) {
            return <Component key={index} type={block.tipo} text={block.texto} />;
          } else if (block.tipo.startsWith('tabla')) {
            return <Component key={index} type={block.tipo} {...block} />;
          }
          return <Component key={index} {...block} />;
        })}
      </article>
      </main>
    </div>
  );
}

export default BookReader;