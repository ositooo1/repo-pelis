
// src/components/ListaPeliculas.jsx
// Este componente muestra la lista de todas las películas en la ruta "/peliculas/all"

import { Link } from 'react-router-dom';
import { peliculas } from '../data/peliculas';

function ListaPeliculas() {
  return (
    <div style={{ padding: '2rem' }}>
      <h1>🎥 Lista de Películas</h1>
      
      {/* map() recorre el array de películas y crea un elemento para cada una */}
      <div style={{ display: 'grid', gap: '1rem', marginTop: '2rem' }}>
        {peliculas.map(pelicula => (
          <div 
            key={pelicula.id} // key es obligatorio en listas de React
            style={{
              border: '1px solid #ddd',
              borderRadius: '8px',
              padding: '1rem',
              backgroundColor: '#f9f9f9'
            }}
          >
            <h3 style={{ margin: '0 0 0.5rem 0' }}>
              {pelicula.titulo} ({pelicula.año})
            </h3>
            <p style={{ margin: '0.5rem 0', color: '#666' }}>
              Director: {pelicula.director}
            </p>
            
            {/* Link dinámico usando el ID de la película */}
            <Link 
              to={`/peliculas/${pelicula.id}`}
              style={{
                display: 'inline-block',
                backgroundColor: '#28a745',
                color: 'white',
                padding: '0.5rem 1rem',
                textDecoration: 'none',
                borderRadius: '4px',
                marginTop: '0.5rem'
              }}
            >
              Ver detalles
            </Link>
          </div>
        ))}
      </div>
      
      {/* Link para volver al inicio */}
      <Link 
        to="/" 
        style={{
          display: 'inline-block',
          marginTop: '2rem',
          color: '#007bff',
          textDecoration: 'none'
        }}
      >
        ← Volver al inicio
      </Link>
    </div>
  );
}

export default ListaPeliculas;