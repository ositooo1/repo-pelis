// src/components/Inicio.jsx
// Este es el componente de la página de inicio que se muestra en la ruta "/"

import { Link } from 'react-router-dom';

function Inicio() {
  return (
    <div style={{ textAlign: 'center', padding: '2rem' }}>
      <h1>🎬 Bienvenido a CinemaApp</h1>
      <p style={{ fontSize: '1.2rem', margin: '2rem 0' }}>
        Descubre las mejores películas de todos los tiempos
      </p>
      
      {/* Link es como una etiqueta <a> pero para React Router */}
      {/* No recarga la página, solo cambia la vista */}
      <Link 
        to="/peliculas/all" 
        style={{
          display: 'inline-block',
          backgroundColor: '#007bff',
          color: 'white',
          padding: '1rem 2rem',
          textDecoration: 'none',
          borderRadius: '5px',
          fontSize: '1.1rem'
        }}
      >
        Ver todas las películas
      </Link>
    </div>
  );
}

export default Inicio;