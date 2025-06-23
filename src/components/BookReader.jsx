import React, { useState, useEffect } from 'react';
import {
  Heading,
  Paragraph,
  Introduction,
  List,
  DefinitionList,
  SpecialNote,
  Table,
} from './content';

const renderContent = (item, index) => {
  const components = {
    heading: Heading,
    parrafo: Paragraph,
    introduccion: Introduction,
    lista: List,
    'lista-definicion': DefinitionList,
    'nota-especial': SpecialNote,
    tabla: Table,
  };

  const Component = components[item.tipo];
  return Component ? <Component key={index} {...item} /> : null;
};

const BookReader = ({ book }) => {
  const [capituloActual, setCapituloActual] = useState(0);
  const capitulos = book.capitulos;
  const capitulo = capitulos[capituloActual];

  const irACapituloSiguiente = () => {
    setCapituloActual((prev) => Math.min(prev + 1, capitulos.length - 1));
  };

  const irACapituloAnterior = () => {
    setCapituloActual((prev) => Math.max(prev - 1, 0));
  };

  const seleccionarCapitulo = (e) => {
    setCapituloActual(Number(e.target.value));
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [capituloActual]);

  return (
    <div className="min-h-screen p-4 sm:p-6 md:p-8">
      <div className="max-w-4xl mx-auto">
        {/* --- CABECERA Y NAVEGACIÓN --- */}
        <header className="mb-8 p-4 bg-white/70 dark:bg-slate-800/70 backdrop-blur-lg rounded-xl shadow-md sticky top-4 z-10 border border-slate-200 dark:border-slate-700">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
            <div className="text-center sm:text-left">
              <h1 className="text-2xl font-bold text-slate-800 dark:text-white">
                {book.titulo}
              </h1>
              <p className="text-sm text-slate-500 dark:text-slate-400">
                Mostrando Capítulo {capituloActual + 1} de {capitulos.length}
              </p>
            </div>
            <div className="flex items-center gap-2">
              <label htmlFor="chapter-select" className="sr-only">
                Seleccionar Capítulo
              </label>
              <select
                id="chapter-select"
                value={capituloActual}
                onChange={seleccionarCapitulo}
                className="bg-slate-100 dark:bg-slate-700 border border-slate-300 dark:border-slate-600 text-slate-900 dark:text-white text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
              >
                {capitulos.map((cap, index) => (
                  <option key={index} value={index}>
                    {cap.titulo}
                  </option>
                ))}
              </select>
            </div>
          </div>
        </header>

        {/* --- CONTENIDO DEL LIBRO --- */}
        <main className="bg-white dark:bg-slate-800 rounded-xl shadow-lg p-6 sm:p-8 md:p-10 border border-slate-200 dark:border-slate-700">
          {capitulo.contenido.map(renderContent)}
        </main>

        {/* --- PIE DE PÁGINA Y NAVEGACIÓN --- */}
        <footer className="mt-8 flex justify-between items-center">
          <button
            onClick={irACapituloAnterior}
            disabled={capituloActual === 0}
            className="px-5 py-2.5 text-sm font-medium text-white bg-blue-600 rounded-lg hover:bg-blue-700 focus:ring-4 focus:outline-none focus:ring-blue-300 disabled:bg-slate-300 dark:disabled:bg-slate-600 disabled:cursor-not-allowed transition-colors"
          >
            Anterior
          </button>
          <div className="text-sm text-slate-500 dark:text-slate-400">
            Página {capituloActual + 1}
          </div>
          <button
            onClick={irACapituloSiguiente}
            disabled={capituloActual === capitulos.length - 1}
            className="px-5 py-2.5 text-sm font-medium text-white bg-blue-600 rounded-lg hover:bg-blue-700 focus:ring-4 focus:outline-none focus:ring-blue-300 disabled:bg-slate-300 dark:disabled:bg-slate-600 disabled:cursor-not-allowed transition-colors"
          >
            Siguiente
          </button>
        </footer>
      </div>
    </div>
  );
};

export default BookReader;