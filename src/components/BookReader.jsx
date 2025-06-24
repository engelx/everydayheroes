// src/components/BookReader.jsx
import React, { useState, useEffect, useRef } from 'react';
import { useBookData } from '../hooks/useBookData';
import { useSearch } from '../hooks/useSearch';
import ChapterNavigation from './ChapterNavigation';
import ContentRenderer from './ContentRenderer';
import TableOfContents from './content/TableOfContents';

// Acepta la nueva prop y la pasa a ChapterNavigation
const BookReader = ({ onStartWizard }) => {
    const { book } = useBookData();
    const [activeChapterIndex, setActiveChapterIndex] = useState(0);
    const contentRef = useRef(null);

    const search = useSearch(book, activeChapterIndex, setActiveChapterIndex);

    // ... toda la lógica existente del componente se mantiene intacta ...
    useEffect(() => {
        if (!search.isNavigatingRef.current) {
           contentRef.current?.scrollTo(0, 0);
        }
    }, [activeChapterIndex, search.isNavigatingRef]);
    
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
                onStartWizard={onStartWizard} // Se pasa la prop
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