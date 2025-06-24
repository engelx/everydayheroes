// src/components/ChapterNavigation.jsx
import React from 'react';

const ChapterNavigation = ({
    book,
    activeChapterId,
    onSelectChapter,
    searchTerm,
    setSearchTerm,
    searchInputRef,
    totalMatches,
    currentMatchIndex,
    handleSearchKeyDown,
    navigateMatches,
    clearSearch,
    onStartWizard // Se añade esta prop para usarla en el botón
}) => {
    
    const chaptersToShow = searchTerm.trim() 
        ? book.capitulos.filter((_, index) => totalMatches > 0)
        : book.capitulos;

    return (
        <aside className="sidebar-nav">
            <header className="sidebar-header">
                <h1>{book.titulo}</h1>
                <p>Visor del Libro de Reglas</p>
            </header>
            
            <div className="search-container">
                <div className="search-controls">
                    <input
                        ref={searchInputRef}
                        type="text"
                        placeholder="Buscar (Ctrl+F)..."
                        className="search-input"
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                        onKeyDown={handleSearchKeyDown}
                    />
                    {searchTerm && (
                        <>
                            <span className="match-count">
                                {totalMatches > 0 ? `${currentMatchIndex + 1} de ${totalMatches}` : '0 de 0'}
                            </span>
                            <button className="search-nav-button" onClick={() => navigateMatches(-1)} disabled={totalMatches === 0}>↑</button>
                            <button className="search-nav-button" onClick={() => navigateMatches(1)} disabled={totalMatches === 0}>↓</button>
                            <button className="search-nav-button" onClick={clearSearch}>×</button>
                        </>
                    )}
                </div>
            </div>

            <nav className="chapter-list">
                {chaptersToShow.map(c => (
                    <a key={c.id} href="#" onClick={() => onSelectChapter(c.id)} className={c.id === activeChapterId ? 'active' : ''}>
                       {c.numero}. {c.titulo.replace(/Capítulo \d+:/, '').trim()}
                    </a>
                ))}
                {chaptersToShow.length === 0 && searchTerm && (
                    <p className="no-results-message">No se encontraron resultados.</p>
                )}
            </nav>
            
            {/* INICIO: Código añadido desde Sidebar.jsx */}
            <div className="sidebar-footer">
                <button className="create-char-btn" onClick={onStartWizard}>
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 5v14"/><path d="M5 12h14"/></svg>
                  <span>Crear Personaje</span>
                </button>
            </div>
            {/* FIN: Código añadido */}
        </aside>
    );
};

export default ChapterNavigation;