// src/components/Sidebar.jsx
import React from 'react';

// Este componente representa la barra lateral de navegación
const Sidebar = ({ onStartWizard }) => {
  return (
    <aside className="sidebar">
      <div className="sidebar-header">
        <h2>Everyday Heroes</h2>
      </div>
      <nav className="sidebar-nav">
        {/* Aquí podrías añadir más enlaces de navegación en el futuro */}
        <ul>
          <li>Reglas Básicas</li>
          <li>Capítulos</li>
        </ul>
      </nav>
      <div className="sidebar-footer">
        <button className="create-char-btn" onClick={onStartWizard}>
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 5v14"/><path d="M5 12h14"/></svg>
          <span>Crear Personaje</span>
        </button>
      </div>
    </aside>
  );
};

export default Sidebar;