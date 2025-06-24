"use client";
import { useState, useRef, useMemo, Fragment } from "react";
import capitulo1 from "./capitulos/capitulo1";
import capitulo2 from "./capitulos/capitulo2";
import capitulo3 from "./capitulos/capitulo3";
import capitulo4 from "./capitulos/capitulo4";
import capitulo5 from "./capitulos/capitulo5";
import capitulo6 from "./capitulos/capitulo6";
import capitulo7 from "./capitulos/capitulo7";
import capitulo8 from "./capitulos/capitulo8";
import capitulo9 from "./capitulos/capitulo9";
import capitulo10 from "./capitulos/capitulo10";
import capitulo11 from "./capitulos/capitulo11";
import capitulo12 from "./capitulos/capitulo12";
import capitulo13 from "./capitulos/capitulo13";
import capitulo14 from "./capitulos/capitulo14";
import capitulo15 from "./capitulos/capitulo15";
import * as estructuraModule from "./capitulos/estructura"; // Changed to namespace import
function slug(text) {
  return text.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-+|-+$/g, "");
}

function renderContenido(contenido) {
  if (!Array.isArray(contenido)) {
    return null;
  }
  // Filter out any null/undefined entries in the content array to prevent render errors.
  return contenido.filter(Boolean).map((item, idx) => {
    switch (item.tipo) {
      case "introduccion":
        return <p key={idx} className="text-lg text-gray-400 italic border-l-4 border-indigo-400 pl-4 mb-8">{item.texto}</p>;
      case "h2":
        return <h2 key={idx} id={slug(item.texto)}>{item.texto}</h2>;
      case "h3":
        return <h3 key={idx}>{item.texto}</h3>;
      case "h4":
        return <h4 key={idx}>{item.texto}</h4>;
      case "parrafo":
        // Assuming item.texto might contain simple HTML like <strong>
        return <p key={idx} dangerouslySetInnerHTML={{ __html: item.texto }} />;
      case "lista":
        return <ul key={idx} className="list-disc list-inside bg-gray-800/50 p-4 rounded-lg mb-4">{item.items.map((li, i) => <li key={i} dangerouslySetInnerHTML={{ __html: li }} />)}</ul>;
      case "lista_definicion":
        // FIX: The error "Each child in a list should have a unique 'key' prop"
        // happens when a map returns an array of elements like `[<dt/>, <dd/>]`.
        // The solution is to wrap them in a single Fragment with the key.
        return (
          <dl key={idx} className="mb-4">
            {item.items.map((def, i) => (
              // Using a more robust key and wrapping the elements
              <Fragment key={`${def.termino}-${i}`}>
                <dt className="font-semibold text-indigo-400 text-lg mt-4">{def.termino}</dt>
                <dd className="pl-4 border-l-2 border-gray-700 mt-1 mb-2">{def.definicion}</dd>
              </Fragment>
            ))}
          </dl>
        );
      case "tabla":
      case "tabla_destacada":
        const tableClass = item.tipo === "tabla_destacada" ? "bg-indigo-900/20 border-indigo-500" : "bg-gray-800/50 border-gray-700";
        return (
          <div key={idx} className="overflow-x-auto my-6">
            <table className={`min-w-full text-left rounded-lg overflow-hidden border ${tableClass}`}>
              {item.titulo && <caption className="text-lg font-semibold p-4 text-white bg-gray-700 text-left">{item.titulo}</caption>}
              <thead className="bg-gray-700 text-gray-300 uppercase text-sm">
                <tr>{item.encabezados.map((h, i) => <th key={i} className="p-4">{h}</th>)}</tr>
              </thead>
              <tbody className="divide-y divide-gray-700">
                {item.filas.map((row, i) => <tr key={i} className="hover:bg-gray-700/50 transition-colors duration-200">{row.map((cell, j) => <td key={j} className="p-4" dangerouslySetInnerHTML={{ __html: cell }} />)}</tr>)}
              </tbody>
            </table>
          </div>
        );
      case "nota_especial":
        // Using dangerouslySetInnerHTML for consistency with other elements that might contain simple HTML.
        return (
          <div key={idx} className="bg-gray-800 border-l-4 border-yellow-400 p-6 my-6 rounded-r-lg shadow-lg">
            {item.titulo && <h5 className="font-bold text-yellow-300 text-xl mb-2">{item.titulo}</h5>}
            <p className="text-gray-400" dangerouslySetInnerHTML={{ __html: item.texto }}></p>
          </div>
        );
      default:
        // Silently ignore unknown or malformed content types to prevent rendering errors.
        return null;
    }
  });
}

export default function SeccionesViewer() {
  const [busqueda, setBusqueda] = useState("");
  const [activeChapterId, setActiveChapterId] = useState(null);
  const contentRef = useRef(null);
  
  // Move the data processing logic inside useMemo to ensure it's executed within the component's lifecycle
  // and its dependencies are stable. This can help resolve issues with top-level constants
  // not being defined correctly in certain bundling or HMR scenarios.
  const secciones = useMemo(() => {
    // Los capítulos deben ser objetos con id, titulo, numero, contenido (array)
    const rawCapitulos = [
      capitulo1,
      capitulo2,
      capitulo3,
      capitulo4,
      capitulo5,
      capitulo6,
      capitulo7,
      capitulo8,
      capitulo9,
      capitulo10,
      capitulo11,
      capitulo12,
      capitulo13,
      capitulo14,
      capitulo15,
    ];

    const processedCapitulos = rawCapitulos.map((mod) => {
      let data = mod.default || mod;

      if (data && typeof data === 'object' && !data.id && Object.keys(data).length === 1) {
        const innerKey = Object.keys(data)[0];
        if (data[innerKey] && typeof data[innerKey] === 'object') {
          data = data[innerKey];
        }
      }

      if (data && data.id && data.titulo) {
        return { id: data.id, titulo: data.titulo, contenido: data.contenido || [] };
      }
      return null;
    }).filter(Boolean);

    const estructuraData = estructuraModule.default || estructuraModule; // Adjusted to use the namespace import
    return [
      { id: "estructura", titulo: "Introducción", contenido: estructuraData.contenido || [] },
      ...processedCapitulos
    ];
  }, [capitulo1, capitulo2, capitulo3, capitulo4, capitulo5, capitulo6, capitulo7, capitulo8, capitulo9, capitulo10, capitulo11, capitulo12, capitulo13, capitulo14, capitulo15, estructuraModule]);
  const sectionsWithSubtopics = useMemo(() => {
    return secciones.map(sec => ({
      ...sec,
      subtemas: Array.isArray(sec.contenido) ? sec.contenido.filter(item => item.tipo === 'h2') : []
    }));
  }, [secciones]);

  const handleSummaryClick = (chapterId) => {
    if (activeChapterId !== chapterId) {
      setActiveChapterId(chapterId);
      if (contentRef.current) {
        contentRef.current.scrollTop = 0;
      }
    }
  };

  const handleSubtopicClick = (e, chapterId, sectionSlug) => {
    e.preventDefault();
    if (activeChapterId !== chapterId) {
      setActiveChapterId(chapterId);
    }
    setTimeout(() => {
      const sectionElement = document.getElementById(sectionSlug);
      if (sectionElement) {
        sectionElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    }, 100);
  };

  const lowerBusqueda = busqueda.toLowerCase();
  const navSections = busqueda
    ? sectionsWithSubtopics.filter(sec =>
        sec.titulo.toLowerCase().includes(lowerBusqueda) ||
        sec.subtemas.some(sub => sub.texto.toLowerCase().includes(lowerBusqueda))
      )
    : sectionsWithSubtopics;

  const activeChapter = sectionsWithSubtopics.find(c => c.id === activeChapterId);

  return (
    <>
      <style>{`
        .content-area h2 { font-size: 1.875rem; font-weight: 700; margin-top: 2rem; margin-bottom: 1rem; border-bottom: 2px solid #374151; padding-bottom: 0.5rem; color: #ffffff; }
        .content-area h3 { font-size: 1.5rem; font-weight: 600; margin-top: 1.5rem; margin-bottom: 0.75rem; color: #f3f4f6; }
        .content-area h4 { font-size: 1.25rem; font-weight: 600; margin-top: 1rem; margin-bottom: 0.5rem; color: #e5e7eb; }
        .content-area p, .content-area li { line-height: 1.75; margin-bottom: 1rem; }
        .content-area ul { list-style-type: disc; padding-left: 2rem; margin-bottom: 1rem; }
        .content-area strong { color: #f9fafb; }
        .chapter-details summary { list-style: none; cursor: pointer; outline: none; display: flex; align-items: center; justify-content: space-between; }
        .chapter-details summary::-webkit-details-marker { display: none; }
        .chapter-details .arrow { transition: transform 0.2s; }
        .chapter-details[open] > summary .arrow { transform: rotate(90deg); }
        .subtopic-list { padding-left: 1rem; border-left: 1px solid #374151; margin-left: 0.5rem; margin-top: 0.5rem; }
      `}</style>
      <div className="flex h-screen">
      <aside className="w-full md:w-1/4 bg-gray-800 p-6 flex flex-col h-full shadow-lg">
        <header className="mb-6">
          <h1 className="text-3xl font-bold text-white mb-2">Everyday Heroes</h1>
          <p className="text-sm text-gray-400">Visor del Libro de Reglas</p>
        </header>
        <div className="relative mb-6">
          <input
            type="text"
            placeholder="Buscar en capítulos..."
            className="w-full bg-gray-700 text-white rounded-md py-2 pl-10 pr-4 focus:outline-none focus:ring-2 focus:ring-indigo-500"
            value={busqueda}
            onChange={e => setBusqueda(e.target.value)}
          />
          <svg className="w-5 h-5 absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg>
        </div>
        <nav className="flex-grow overflow-y-auto pr-2">
          {navSections.map((sec, index) => {
            const subtopicsToShow = busqueda
              ? sec.subtemas.filter(sub => sub.texto.toLowerCase().includes(lowerBusqueda))
              : sec.subtemas;

            // The key must be unique. Using the index guarantees this, which is crucial if chapter IDs are missing or duplicated in the source data.
            return (
              <details key={`${sec.id || 'chapter'}-${index}`} open={busqueda.length > 0} className="chapter-details mb-2">
                <summary
                  className={`chapter-summary p-3 rounded-md hover:bg-gray-700 transition-colors duration-200 cursor-pointer flex justify-between items-center ${activeChapterId === sec.id ? 'bg-indigo-600' : ''}`}
                  onClick={() => handleSummaryClick(sec.id)}
                >
                  <span className="font-semibold text-white">{sec.titulo}</span>
                  <svg className="arrow w-5 h-5 text-gray-400" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                  </svg>
                </summary>
                <ul className="subtopic-list mt-2 space-y-1">
                  {subtopicsToShow.map((sub, subIndex) => (
                    // FIX: Add subIndex to the key to prevent duplicates if a chapter has multiple subtopics with the same title.
                    <li key={`${sec.id}-${slug(sub.texto)}-${subIndex}`}>
                      <a
                        href={`#${slug(sub.texto)}`}
                        className="subtopic-link block p-2 pl-4 text-sm rounded-md text-gray-400 hover:bg-gray-700/50 hover:text-white"
                        onClick={(e) => handleSubtopicClick(e, sec.id, slug(sub.texto))}
                      >
                        {sub.texto}
                      </a>
                    </li>
                  ))}
                </ul>
              </details>
            );
          })}
        </nav>
      </aside>
      <main ref={contentRef} className="w-full md:w-3/4 p-8 md:p-12 overflow-y-auto content-area">
        {!activeChapter ? (
          <div className="text-center h-full flex flex-col justify-center items-center">
            <h2 className="text-4xl font-bold text-white">Bienvenido</h2>
            <p className="mt-4 text-lg text-gray-400">Selecciona un capítulo de la lista para comenzar a leer.</p>
            <svg className="w-24 h-24 mt-8 text-gray-600" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1" d="M12 6.253v11.494m-9-5.747h18"/><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1" d="M12 18a6 6 0 100-12 6 6 0 000 12z" /></svg>
          </div>
        ) : (
          <div>
            <h1 className="text-5xl font-extrabold text-white mb-8 border-b-4 border-indigo-500 pb-4">{activeChapter.titulo}</h1>
            {renderContenido(activeChapter.contenido)}
          </div>
        )}
      </main>
    </div>
    </>
  );
}
