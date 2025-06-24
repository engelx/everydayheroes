// src/App.jsx
import React from 'react';
import BookReader from './components/BookReader'; 

function App() {
  return (
    // Estas clases aplican el modo oscuro, los colores y la fuente a toda la app
    <div className="dark bg-slate-900 text-slate-300 font-sans">
      <BookReader />
    </div>
  );
}

export default App;