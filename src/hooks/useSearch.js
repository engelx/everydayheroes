// src/hooks/useSearch.js
import { useState, useEffect, useRef } from 'react';

const escapeRegExp = (string) => {
  return string ? string.replace(/[.*+?^${}()|[\]\\]/g, '\\$&') : '';
};

export const useSearch = (book, activeChapterIndex, setActiveChapterIndex) => {
    const searchInputRef = useRef(null);
    const isNavigatingRef = useRef(false);

    const [searchTerm, setSearchTerm] = useState('');
    const [matchMap, setMatchMap] = useState([]);
    const [totalMatches, setTotalMatches] = useState(0);
    const [currentMatchIndex, setCurrentMatchIndex] = useState(-1);

    // Efecto para atajos de teclado globales (Ctrl+F)
    useEffect(() => {
        const handleGlobalKeyDown = (event) => {
            if ((event.ctrlKey || event.metaKey) && event.key === 'f') {
                event.preventDefault();
                searchInputRef.current?.focus();
            }
        };
        window.addEventListener('keydown', handleGlobalKeyDown);
        return () => window.removeEventListener('keydown', handleGlobalKeyDown);
    }, []);

    // Efecto para realizar el escaneo global cuando cambia el término de búsqueda
    useEffect(() => {
        if (!searchTerm.trim() || !book.capitulos.length) {
            setMatchMap([]);
            setTotalMatches(0);
            setCurrentMatchIndex(-1);
            return;
        }

        const lowerCaseSearchTerm = searchTerm.toLowerCase();
        const regex = new RegExp(escapeRegExp(lowerCaseSearchTerm), 'gi');
        
        let firstMatchChapterIndex = -1;
        let runningTotal = 0;
        const newMatchMap = [];

        book.capitulos.forEach((chapter, index) => {
            let countInChapter = 0;
            if (chapter.contenido) {
                for (const item of chapter.contenido) {
                    const countIn = (text) => (text?.match(regex) || []).length;
                    switch (item.tipo) {
                        case 'introduccion':
                        case 'h2':
                        case 'h3':
                        case 'h4':
                        case 'parrafo':
                            countInChapter += countIn(item.texto);
                            break;
                        case 'lista':
                            item.items.forEach(li => { if (typeof li === 'string') countInChapter += countIn(li); });
                            break;
                        case 'lista_definicion':
                            item.items.forEach(def => {
                                countInChapter += countIn(def.termino);
                                countInChapter += countIn(def.definicion);
                            });
                            break;
                        case 'tabla':
                        case 'tabla_destacada':
                            if (item.titulo) countInChapter += countIn(item.titulo);
                            item.encabezados?.forEach(h => countInChapter += countIn(h));
                            item.filas?.forEach(row => row.forEach(cell => countInChapter += countIn(cell)));
                            break;
                        case 'nota_especial':
                            if (item.titulo) countInChapter += countIn(item.titulo);
                            countInChapter += countIn(item.texto);
                            break;
                        default: break;
                    }
                }
            }
            
            if (countInChapter > 0 && firstMatchChapterIndex === -1) {
                firstMatchChapterIndex = index;
            }
            newMatchMap.push({ chapterIndex: index, count: countInChapter });
            runningTotal += countInChapter;
        });
        
        setTotalMatches(runningTotal);
        setMatchMap(newMatchMap);

        if (runningTotal > 0) {
            setCurrentMatchIndex(0);
            if (activeChapterIndex !== firstMatchChapterIndex) {
                isNavigatingRef.current = true;
                setActiveChapterIndex(firstMatchChapterIndex);
            }
        } else {
            setCurrentMatchIndex(-1);
        }
    }, [searchTerm, book.capitulos]);

    const navigateMatches = (direction) => {
        if (totalMatches === 0) return;
        isNavigatingRef.current = true;
        const newIndex = (currentMatchIndex + direction + totalMatches) % totalMatches;
        setCurrentMatchIndex(newIndex);

        let targetChapterIndex = -1;
        let cumulativeMatches = 0;
        for (const mapItem of matchMap) {
            if (newIndex < cumulativeMatches + mapItem.count) {
                targetChapterIndex = mapItem.chapterIndex;
                break;
            }
            cumulativeMatches += mapItem.count;
        }

        if (targetChapterIndex !== -1 && targetChapterIndex !== activeChapterIndex) {
            setActiveChapterIndex(targetChapterIndex);
        }
    };

    const clearSearch = () => {
        setSearchTerm('');
        searchInputRef.current?.blur();
    };

    const handleSearchKeyDown = (event) => {
        if (event.key === 'Escape') clearSearch();
        if (event.key === 'Enter') {
            event.preventDefault();
            event.shiftKey ? navigateMatches(-1) : navigateMatches(1);
        }
    };
    
    const highlightText = (text, highlight) => {
        if (!highlight.trim() || !text) return text;
        const safeHighlight = escapeRegExp(highlight);
        const regex = new RegExp(`(${safeHighlight})`, 'gi');
        return text.replace(regex, '<mark class="search-highlight">$1</mark>');
    };
    
    return {
        searchTerm,
        setSearchTerm,
        searchInputRef,
        totalMatches,
        currentMatchIndex,
        matchMap,
        isNavigatingRef,
        handleSearchKeyDown,
        navigateMatches,
        clearSearch,
        highlightText
    };
};