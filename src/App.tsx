// /src/App.tsx
import React from 'react';
import Tabs from './presentation/components/Tabs/Tabs';


const App: React.FC = () => {
  return (
    <div className="d-flex flex-column min-vh-100">
      <header>
        <h1>Reporte de Transacciones por Kiosco</h1>
        <p>Este reporte muestra las transacciones realizadas por cada kiosco y resalta las discrepancias.</p>
      </header>
      <main className="flex-grow-1">
        <Tabs />
        {/* Agregar otras secciones como gráficos, resumen, etc. */}
      </main>
      <footer>
        <p>&copy; 2024 Reporte de Transacciones por Kiosco. Todos los derechos reservados.</p>
      </footer>
    </div>
  );
};

export default App;
