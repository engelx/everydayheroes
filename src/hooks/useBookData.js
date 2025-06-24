// src/hooks/useBookData.js
import { useMemo } from 'react';

const chapterModules = import.meta.glob('../capitulos/*.js', { eager: true });

export const useBookData = () => {
    const book = useMemo(() => {
        const chapters = Object.values(chapterModules)
          .map(module => module.default)
          .filter(Boolean)
          .sort((a, b) => a.numero - b.numero);
        return { titulo: "Everyday Heroes", capitulos: chapters };
    }, []);

    return { book };
};