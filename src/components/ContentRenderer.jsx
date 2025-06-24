// src/components/ContentRenderer.jsx
import React from 'react';
import { Heading, Introduction, List, DefinitionList, Paragraph, SpecialNote, Table } from './content';

const ContentRenderer = ({ chapter, searchTerm, highlightText }) => {
    if (!chapter) return null;

    const renderItem = (item, index) => {
        // Clonamos el item para no mutar el estado original al resaltar
        const highlightedItem = JSON.parse(JSON.stringify(item));

        // Aplicamos el resaltado
        if (searchTerm.trim()) {
            if (highlightedItem.texto) highlightedItem.texto = highlightText(highlightedItem.texto, searchTerm);
            if (highlightedItem.titulo) highlightedItem.titulo = highlightText(highlightedItem.titulo, searchTerm);
            if (highlightedItem.definicion) highlightedItem.definicion = highlightText(highlightedItem.definicion, searchTerm);
            if (highlightedItem.termino) highlightedItem.termino = highlightText(highlightedItem.termino, searchTerm);
            if (highlightedItem.items) {
                highlightedItem.items = highlightedItem.items.map(subItem => {
                    if (typeof subItem === 'string') return highlightText(subItem, searchTerm);
                    if (subItem.termino) subItem.termino = highlightText(subItem.termino, searchTerm);
                    if (subItem.definicion) subItem.definicion = highlightText(subItem.definicion, searchTerm);
                    return subItem;
                });
            }
             if (highlightedItem.filas) {
                highlightedItem.filas = highlightedItem.filas.map(row => row.map(cell => highlightText(cell, searchTerm)));
            }
        }
        
        const Component = {
          'introduccion': Introduction, 'parrafo': Paragraph, 'h2': Heading, 'h3': Heading, 'h4': Heading, 'lista': List,
          'lista_definicion': DefinitionList, 'nota_especial': SpecialNote, 'tabla': Table, 'tabla_destacada': Table,
          'diagrama': ({ src, alt }) => <img src={src} alt={alt} className="content-diagram" />,
        }[highlightedItem.tipo];

        if (highlightedItem.tipo === 'tabla' || highlightedItem.tipo === 'tabla_destacada') {
            let colWidths = [];
            if (item.id_tabla === 'tabla-modificador-habilidad' || item.id_tabla === 'tabla-costos-puntos-caracteristica') colWidths = ['70%', '30%'];
            if (item.id_tabla === 'tabla-arquetipos-y-clases') colWidths = ['15%', '40%', '30%', '15%'];
            return <Component key={`${chapter.id}-${index}`} {...highlightedItem} colWidths={colWidths} />;
        }
        const levelMap = { 'h2': 2, 'h3': 3, 'h4': 4, 'h5': 5, 'h6': 6 };
        if (Component) return <Component key={`${chapter.id}-${index}`} {...highlightedItem} level={levelMap[highlightedItem.tipo] || item.level} />;
        return null;
    };
    
    return (
        <article>
            <h1 className="main-title">{chapter.titulo}</h1>
            {chapter.contenido.map(renderItem)}
        </article>
    );
};

export default ContentRenderer;