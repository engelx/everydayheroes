// src/components/BookReader.jsx
import React, { useState, useMemo, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, Hash, BookOpen } from 'lucide-react';
import { Heading, Introduction, List, DefinitionList, Paragraph, SpecialNote, Table } from './content';

// Carga dinámica de capítulos
const chapterModules = import.meta.glob('../capitulos/*.js', { eager: true });

// Componente de Navegación de la Barra Lateral
const ChapterNav = ({ chapters, activeChapterId, onSelectChapter, onSelectSection }) => (
  <nav className="flex-grow overflow-y-auto pr-2">
    {chapters.map(chapter => (
      <details key={chapter.id} open={chapter.id === activeChapterId} className="mb-1 group">
        <summary 
          className="chapter-summary p-2 rounded-md hover:bg-slate-700 transition-colors duration-150 cursor-pointer flex justify-between items-center list-none"
          onClick={() => onSelectChapter(chapter.id)}
        >
          <span className="font-semibold text-slate-200">{chapter.numero}. {chapter.titulo.replace(/Capítulo \d+: /, '')}</span>
          <ChevronRight className="w-4 h-4 text-slate-400 group-open:rotate-90 transition-transform" />
        </summary>
        <ul className="mt-1 ml-2 pl-2 border-l border-slate-700">
          {chapter.contenido
            .filter(item => item.tipo === 'h2')
            .map(subtopic => (
              <li key={subtopic.texto}>
                <a 
                  href={`#`}
                  onClick={(e) => {
                    e.preventDefault();
                    onSelectSection(chapter.id, subtopic.texto);
                  }}
                  className="flex items-center gap-2 py-1 px-2 text-sm rounded-md text-slate-400 hover:bg-indigo-500/10 hover:text-indigo-300"
                >
                  <Hash size={14} />
                  {subtopic.texto}
                </a>
              </li>
            ))}
        </ul>
      </details>
    ))}
  </nav>
);

// Componente Principal del Lector
const BookReader = () => {
  const book = useMemo(() => {
    const chapters = Object.values(chapterModules)
      .map(module => module.default)
      .filter(Boolean)
      .sort((a, b) => a.numero - b.numero);
    return { titulo: "Everyday Heroes Rulebook", capitulos: chapters };
  }, []);

  const [activeChapterIndex, setActiveChapterIndex] = useState(0);

  useEffect(() => {
    // Hace scroll al principio del contenido al cambiar de capítulo
    const mainContent = document.getElementById('main-content');
    if (mainContent) mainContent.scrollTo(0, 0);
  }, [activeChapterIndex]);

  if (book.capitulos.length === 0) {
    return <div>Cargando...</div>;
  }

  const activeChapter = book.capitulos[activeChapterIndex];

  const handleSelectSection = (chapterId, sectionText) => {
    const chapterIndex = book.capitulos.findIndex(c => c.id === chapterId);
    const slug = sectionText ? sectionText.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-+|-+$/g, '') : '';
    
    if (chapterIndex !== activeChapterIndex) {
        setActiveChapterIndex(chapterIndex);
        setTimeout(() => {
            document.getElementById(slug)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }, 150); // Delay para esperar la animación
    } else {
        document.getElementById(slug)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  const renderContent = (item, index) => {
    if (item.tipo === 'h1_titulo_capitulo') { // Necesitarás un tipo para el título del capítulo
        return <h1 key={`${activeChapter.id}-title`} className="text-5xl font-extrabold text-white mb-8 border-b-4 border-indigo-500 pb-4">{item.texto}</h1>
    }
    const Component = {
        'introduccion': Introduction,
        'parrafo': Paragraph,
        'h2': Heading,
        'h3': Heading,
        'h4': Heading,
        'h5': Heading,
        'h6': Heading,
        'lista': List,
        'lista_definicion': DefinitionList,
        'nota_especial': SpecialNote,
        'tabla': Table,
        'tabla_destacada': Table,
        'diagrama': ({ src, alt }) => <img src={src} alt={alt} className="my-6 rounded-lg shadow-md mx-auto" />,
    }[item.tipo];

    const levelMap = { 'h2': 2, 'h3': 3, 'h4': 4, 'h5': 5, 'h6': 6 };

    return Component ? <Component key={`${activeChapter.id}-${index}`} {...item} level={levelMap[item.tipo] || item.level} /> : null;
  };

  return (
    <div className="flex h-screen bg-slate-900 text-slate-300 font-sans overflow-x-hidden">
      {/* BARRA LATERAL: Añadimos un borde derecho para una separación sutil */}
      <aside className="w-72 bg-slate-800 p-4 flex flex-col h-full border-r border-slate-700/50 shrink-0">
        <header className="mb-4 p-2">
          <h1 className="text-xl font-bold text-white flex items-center gap-2"><BookOpen size={20} /> {book.titulo}</h1>
        </header>
        <ChapterNav 
          chapters={book.capitulos} 
          activeChapterId={activeChapter.id}
          onSelectChapter={(id) => setActiveChapterIndex(book.capitulos.findIndex(c => c.id === id))}
          onSelectSection={handleSelectSection}
        />
      </aside>

      <div id="main-content" className="flex-1 flex flex-col overflow-y-auto">
        <div className="max-w-4xl mx-auto px-6 lg:px-8 py-10 w-full">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeChapter.id}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.25 }}
            >
              <div>
                {/* Título principal con nuevo estilo */}
                <h1 className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl mb-8 border-b-4 border-indigo-500 pb-4">
                  {activeChapter.titulo}
                </h1>
                {activeChapter.contenido.map(renderContent)}
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* PIE DE PÁGINA: Estilo moderno con fondo semi-transparente y borde superior */}
        <footer className="sticky bottom-0 mt-auto bg-slate-800/80 backdrop-blur-sm border-t border-slate-700/50">
          <div className="max-w-4xl mx-auto px-6 lg:px-8 py-3 flex justify-between items-center">
            <button
              onClick={() => setActiveChapterIndex(i => i - 1)}
              disabled={activeChapterIndex === 0}
              className="flex items-center gap-2 px-4 py-2 text-sm font-medium text-white bg-indigo-600 rounded-md hover:bg-indigo-700 focus:ring-2 focus:ring-offset-2 focus:ring-offset-slate-800 focus:ring-indigo-500 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
            >
              <ChevronLeft size={16} /> Anterior
            </button>
            <div className="text-sm text-slate-400 text-center truncate px-4">
              Cap. {activeChapter.numero}: {activeChapter.titulo.replace(/Capítulo \\d+: /, '')}
            </div>
            <button
              onClick={() => setActiveChapterIndex(i => i + 1)}
              disabled={activeChapterIndex >= book.capitulos.length - 1}
              className="flex items-center gap-2 px-4 py-2 text-sm font-medium text-white bg-indigo-600 rounded-md hover:bg-indigo-700 focus:ring-2 focus:ring-offset-2 focus:ring-offset-slate-800 focus:ring-indigo-500 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
            >
              Siguiente <ChevronRight size={16} />
            </button>
          </div>
        </footer>
      </div>
    </div>
  );
};


export default BookReader;