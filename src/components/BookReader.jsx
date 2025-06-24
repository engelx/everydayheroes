import React, { useState, useEffect, useRef } from 'react';
import { useBookData } from '../hooks/useBookData';
import { useSearch } from '../hooks/useSearch';
import ChapterNavigation from './ChapterNavigation';
import ContentRenderer from './ContentRenderer';
import TableOfContents from './content/TableOfContents';

const BookReader = () => {
    const { book } = useBookData();
    const [activeChapterIndex, setActiveChapterIndex] = useState(0);
    const contentRef = useRef(null);

    const search = useSearch(book, activeChapterIndex, setActiveChapterIndex);

    // Efecto para hacer scroll en la columna de contenido principal
    useEffect(() => {
        // Solo haz scroll al principio si NO estamos en medio de una navegación de búsqueda
        if (!search.isNavigatingRef.current) {
           contentRef.current?.scrollTo(0, 0);
        }
    }, [activeChapterIndex, search.isNavigatingRef]);
    
    // Efecto para actualizar las coincidencias DOM en el capítulo activo
    useEffect(() => {
        if (!search.searchTerm.trim()) return;
        setTimeout(() => {
            if (contentRef.current) {
                const foundElements = Array.from(contentRef.current.querySelectorAll('.search-highlight'));
                const baseIndex = search.matchMap.slice(0, activeChapterIndex).reduce((acc, val) => acc + val.count, 0);
                const localIndex = search.currentMatchIndex - baseIndex;

                if (localIndex >= 0 && localIndex < foundElements.length) {
                    document.querySelectorAll('.active-highlight').forEach(el => el.classList.remove('active-highlight'));
                    const currentEl = foundElements[localIndex];
                    currentEl.classList.add('active-highlight');
                    if (search.isNavigatingRef.current) {
                        currentEl.scrollIntoView({ behavior: 'smooth', block: 'center' });
                        search.isNavigatingRef.current = false;
                    }
                }
            }
        }, 100);
    }, [activeChapterIndex, search.searchTerm, search.currentMatchIndex, search.matchMap]);
    

    const handleSelectChapter = (chapterId) => {
        const index = book.capitulos.findIndex(c => c.id === chapterId);
        if (index !== -1) {
            if (search.searchTerm) {
                search.setSearchTerm('');
            }
            setActiveChapterIndex(index);
        }
    };

    if (book.capitulos.length === 0) {
        return <div>Cargando...</div>;
    }

    const activeChapter = book.capitulos[activeChapterIndex];

    return (
        <div id="book-reader-container">
            <ChapterNavigation
                book={book}
                activeChapterId={activeChapter?.id}
                onSelectChapter={handleSelectChapter}
                {...search}
            />

            <main ref={contentRef} className="main-content">
                {activeChapter && (
                    <ContentRenderer 
                        chapter={activeChapter}
                        searchTerm={search.searchTerm}
                        highlightText={search.highlightText}
                    />
                )}
            </main>

            <TableOfContents chapter={activeChapter} />
        </div>
    );
};

export default BookReader;